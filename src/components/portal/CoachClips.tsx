"use client";

import { useCallback, useEffect, useState, type FormEvent } from "react";
import type { SupabaseClient } from "@supabase/supabase-js";
import { formatLessonDay, type CoachClip, type Profile } from "@/lib/portal";
import { LESSON_VIDEO_BUCKET } from "@/lib/supabase";
import PortalLessonClip from "./PortalLessonClip";

export default function CoachClips({
  supabase,
  profile,
}: {
  supabase: SupabaseClient;
  profile: Profile;
}) {
  const [clips, setClips] = useState<CoachClip[]>([]);
  const [urls, setUrls] = useState<Record<string, string>>({});
  const [busy, setBusy] = useState(false);
  const [status, setStatus] = useState("");

  const reload = useCallback(async () => {
    const { data } = await supabase
      .from("coach_clips")
      .select("id, title, notes, video_path, created_at")
      .order("created_at", { ascending: false });
    setClips((data || []) as CoachClip[]);
  }, [supabase]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- load clips from supabase
    void reload();
  }, [reload]);

  useEffect(() => {
    let cancelled = false;
    async function sign() {
      const signed = await Promise.all(
        clips.map(async (clip) => {
          const { data } = await supabase.storage
            .from(LESSON_VIDEO_BUCKET)
            .createSignedUrl(clip.video_path, 60 * 60);
          return [clip.id, data?.signedUrl] as const;
        }),
      );
      if (cancelled) return;
      const next: Record<string, string> = {};
      for (const [id, url] of signed) {
        if (url) next[id] = url;
      }
      setUrls(next);
    }
    void sign();
    return () => {
      cancelled = true;
    };
  }, [clips, supabase]);

  async function addClip(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const title = String(data.get("title") || "").trim();
    const notes = String(data.get("notes") || "").trim();
    const file = data.get("clip");
    if (!title || !(file instanceof File) || file.size === 0) {
      setStatus("Give it a name and pick a clip.");
      return;
    }
    if (file.size > 100 * 1024 * 1024) {
      setStatus("That clip is over 100MB. Trim it a bit and try again.");
      return;
    }
    setBusy(true);
    setStatus("");
    const id = crypto.randomUUID();
    const safeName = file.name.replace(/[^\w.\-]+/g, "-");
    const path = `library/${id}/${safeName}`;
    const { error: uploadError } = await supabase.storage
      .from(LESSON_VIDEO_BUCKET)
      .upload(path, file, { contentType: file.type, upsert: true });
    if (uploadError) {
      setBusy(false);
      setStatus(uploadError.message);
      return;
    }
    const { error } = await supabase.from("coach_clips").insert({
      id,
      title,
      notes: notes || null,
      video_path: path,
      created_by: profile.id,
    });
    setBusy(false);
    if (error) {
      setStatus(error.message);
      return;
    }
    form.reset();
    setStatus("Clip is on your desk.");
    await reload();
  }

  async function removeClip(clip: CoachClip) {
    if (!window.confirm("Take this clip off your desk?")) return;
    setBusy(true);
    await supabase.storage.from(LESSON_VIDEO_BUCKET).remove([clip.video_path]);
    await supabase.from("coach_clips").delete().eq("id", clip.id);
    setBusy(false);
    await reload();
  }

  return (
    <section className="portal-card">
      <h2 className="ui-title ui-title-sm">My videos</h2>
      <p className="portal-lead">
        Your clips stay on this desk. Drop one on a player&apos;s lesson when you
        want them to rewatch it.
      </p>
      <form className="start-form portal-mini-form" onSubmit={(event) => void addClip(event)}>
        <label className="start-field">
          <span>Name</span>
          <input name="title" required placeholder="Band routine, glove-side miss" />
        </label>
        <label className="start-field">
          <span>
            Note <em>optional</em>
          </span>
          <textarea name="notes" />
        </label>
        <label className="start-field">
          <span>Clip</span>
          <input name="clip" type="file" accept="video/mp4,video/quicktime,video/webm" required />
        </label>
        <button className="btn" type="submit" disabled={busy}>
          Save to my desk
        </button>
      </form>
      {status ? (
        <p className="portal-note" aria-live="polite">
          {status}
        </p>
      ) : null}
      <ol className="portal-lessons">
        {clips.map((clip) => (
          <li key={clip.id} className="portal-lesson">
            <div className="portal-lesson-top">
              <strong>{clip.title}</strong>
              <button type="button" className="footer-link" onClick={() => void removeClip(clip)}>
                Remove
              </button>
            </div>
            <p className="portal-lesson-notes">{formatLessonDay(clip.created_at.slice(0, 10))}</p>
            {clip.notes ? <p className="portal-lesson-notes">{clip.notes}</p> : null}
            {urls[clip.id] ? (
              <PortalLessonClip src={urls[clip.id]} label={`Clip: ${clip.title}`} />
            ) : (
              <p className="portal-note">Loading clip…</p>
            )}
          </li>
        ))}
      </ol>
    </section>
  );
}
