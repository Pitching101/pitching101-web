"use client";

import { useCallback, useEffect, useMemo, useState, type FormEvent } from "react";
import type { SupabaseClient } from "@supabase/supabase-js";
import {
  formatLessonDay,
  lessonCountLabel,
  todayInNaples,
  type Lesson,
  type Player,
  type Profile,
} from "@/lib/portal";
import { LESSON_VIDEO_BUCKET } from "@/lib/supabase";
import CoachClips from "./CoachClips";

type Tab = "lessons" | "clips" | "roster";

export default function CoachDesk({
  supabase,
  profile,
  onSignOut,
}: {
  supabase: SupabaseClient;
  profile: Profile;
  onSignOut: () => void;
}) {
  const [tab, setTab] = useState<Tab>("lessons");
  const [players, setPlayers] = useState<Player[]>([]);
  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [clipCount, setClipCount] = useState(0);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [clips, setClips] = useState<Record<string, string>>({});
  const [status, setStatus] = useState("");
  const [busy, setBusy] = useState(false);

  const selected = players.find((player) => player.id === selectedId) ?? null;
  const visibleLessons = useMemo(
    () =>
      selectedId
        ? lessons.filter((lesson) => lesson.player_id === selectedId)
        : lessons,
    [lessons, selectedId],
  );
  const playerName = useCallback(
    (id: string) => players.find((player) => player.id === id)?.first_name || "Kid",
    [players],
  );

  const reload = useCallback(async () => {
    const [{ data: playerRows }, { data: lessonRows }, { count }] = await Promise.all([
      supabase.from("players").select("id, first_name, age, guardian_email, player_email, notes").order("first_name"),
      supabase.from("lessons").select("id, player_id, held_on, title, notes, video_path, created_at").order("held_on", { ascending: false }),
      supabase.from("coach_clips").select("id", { count: "exact", head: true }),
    ]);
    setPlayers((playerRows || []) as Player[]);
    setLessons((lessonRows || []) as Lesson[]);
    setClipCount(count || 0);
  }, [supabase]);

  useEffect(() => {
    void reload();
  }, [reload, tab]);

  useEffect(() => {
    let cancelled = false;
    async function signClips() {
      const withVideo = visibleLessons.filter((lesson) => lesson.video_path);
      const signed = await Promise.all(
        withVideo.map(async (lesson) => {
          const { data } = await supabase.storage
            .from(LESSON_VIDEO_BUCKET)
            .createSignedUrl(lesson.video_path as string, 60 * 60);
          return [lesson.id, data?.signedUrl] as const;
        }),
      );
      if (cancelled) return;
      const next: Record<string, string> = {};
      for (const [id, url] of signed) {
        if (url) next[id] = url;
      }
      setClips(next);
    }
    void signClips();
    return () => {
      cancelled = true;
    };
  }, [visibleLessons, supabase]);

  async function addPlayer(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const firstName = String(data.get("first_name") || "").trim();
    const guardianEmail = String(data.get("guardian_email") || "").trim();
    const playerEmail = String(data.get("player_email") || "").trim();
    const ageRaw = String(data.get("age") || "");
    if (!firstName || !guardianEmail) return;
    setBusy(true);
    setStatus("");
    const { error } = await supabase.from("players").insert({
      first_name: firstName,
      guardian_email: guardianEmail,
      player_email: playerEmail || null,
      age: ageRaw ? Number(ageRaw) : null,
      created_by: profile.id,
    });
    setBusy(false);
    if (error) {
      setStatus(error.message);
      return;
    }
    form.reset();
    setStatus("They're on the roster.");
    await reload();
  }

  async function addLesson(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const playerId = String(data.get("player_id") || selectedId || "");
    const kid = players.find((player) => player.id === playerId);
    if (!kid) {
      setStatus("Pick a kid first.");
      return;
    }
    const heldOn = String(data.get("held_on") || todayInNaples());
    const title = String(data.get("title") || "").trim();
    const notes = String(data.get("notes") || "").trim();
    const file = data.get("clip");
    setBusy(true);
    setStatus("");
    const { data: inserted, error } = await supabase
      .from("lessons")
      .insert({
        player_id: kid.id,
        held_on: heldOn,
        title: title || null,
        notes: notes || null,
        created_by: profile.id,
      })
      .select("id")
      .single();
    if (error || !inserted) {
      setBusy(false);
      setStatus(error?.message || "Couldn't save that lesson.");
      return;
    }

    if (file instanceof File && file.size > 0) {
      if (file.size > 100 * 1024 * 1024) {
        setBusy(false);
        setStatus("That clip is over 100MB. Trim it a bit and try again.");
        return;
      }
      const safeName = file.name.replace(/[^\w.\-]+/g, "-");
      const path = `${kid.id}/${inserted.id}/${safeName}`;
      const { error: uploadError } = await supabase.storage
        .from(LESSON_VIDEO_BUCKET)
        .upload(path, file, { contentType: file.type, upsert: true });
      if (uploadError) {
        setBusy(false);
        setStatus(`Lesson saved, but the clip didn't upload: ${uploadError.message}`);
        await reload();
        return;
      }
      await supabase.from("lessons").update({ video_path: path }).eq("id", inserted.id);
    }

    setBusy(false);
    form.reset();
    setStatus("Lesson is in. They'll see it in their dugout.");
    await reload();
  }

  async function removeLesson(id: string) {
    if (!window.confirm("Take this lesson off the card?")) return;
    setBusy(true);
    await supabase.from("lessons").delete().eq("id", id);
    setBusy(false);
    await reload();
  }

  const counts = useMemo(() => {
    const map = new Map<string, number>();
    for (const lesson of lessons) {
      map.set(lesson.player_id, (map.get(lesson.player_id) || 0) + 1);
    }
    return map;
  }, [lessons]);

  const videoLessons = lessons.filter((lesson) => lesson.video_path).length;

  return (
    <div className="portal-desk">
      <div className="portal-desk-bar">
        <div>
          <p className="portal-kicker">Your desk</p>
          <h1 className="ui-title ui-title-md">Lessons and clips</h1>
        </div>
        <button type="button" className="footer-link" onClick={onSignOut}>
          Sign out
        </button>
      </div>

      <ul className="portal-stats">
        <li>
          <strong>{players.length}</strong>
          <span>{players.length === 1 ? "kid" : "kids"}</span>
        </li>
        <li>
          <strong>{lessons.length}</strong>
          <span>{lessons.length === 1 ? "lesson" : "lessons"}</span>
        </li>
        <li>
          <strong>{videoLessons}</strong>
          <span>with a clip</span>
        </li>
        <li>
          <strong>{clipCount}</strong>
          <span>{clipCount === 1 ? "desk video" : "desk videos"}</span>
        </li>
      </ul>

      <div className="portal-tabs" role="tablist" aria-label="Coach desk">
        {([
          ["lessons", "Lessons"],
          ["clips", "My videos"],
          ["roster", "Roster"],
        ] as const).map(([id, label]) => (
          <button
            key={id}
            type="button"
            role="tab"
            aria-selected={tab === id}
            className={`portal-tab${tab === id ? " is-on" : ""}`}
            onClick={() => setTab(id)}
          >
            {label}
          </button>
        ))}
      </div>

      {tab === "lessons" ? (
        <div className="portal-grid portal-grid-desk">
          <section className="portal-card">
            <h2 className="ui-title ui-title-sm">Log a lesson</h2>
            {players.length ? (
              <form
                key={selectedId || "all"}
                className="start-form portal-mini-form"
                onSubmit={(event) => void addLesson(event)}
              >
                <label className="start-field">
                  <span>Kid</span>
                  <select name="player_id" defaultValue={selectedId ?? players[0]?.id ?? ""} required>
                    <option value="" disabled>
                      Pick a kid
                    </option>
                    {players.map((player) => (
                      <option key={player.id} value={player.id}>
                        {player.first_name}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="start-field">
                  <span>Date</span>
                  <input name="held_on" type="date" defaultValue={todayInNaples()} required />
                </label>
                <label className="start-field">
                  <span>
                    What we worked on <em>optional</em>
                  </span>
                  <input name="title" placeholder="Fastball command, glove side" />
                </label>
                <label className="start-field">
                  <span>
                    Notes for them <em>optional</em>
                  </span>
                  <textarea name="notes" placeholder="Keep the front side quiet. We'll pick this up next time." />
                </label>
                <label className="start-field">
                  <span>
                    Your clip <em>optional — they can rewatch it</em>
                  </span>
                  <input name="clip" type="file" accept="video/mp4,video/quicktime,video/webm" />
                </label>
                <button className="btn" type="submit" disabled={busy}>
                  Log this lesson
                </button>
              </form>
            ) : (
              <p className="portal-lead">Add a kid on the roster tab, then we can start logging work.</p>
            )}
          </section>

          <section className="portal-card">
            <h2 className="ui-title ui-title-sm">
              {selected ? `${selected.first_name}'s lessons` : "All lessons"}
            </h2>
            <p className="portal-lead">
              {selected
                ? lessonCountLabel(visibleLessons.length)
                : `${lessonCountLabel(lessons.length)} across the roster.`}
            </p>
            {players.length > 1 ? (
              <ul className="portal-roster portal-roster-row">
                <li>
                  <button
                    type="button"
                    className={`portal-roster-btn${!selectedId ? " is-on" : ""}`}
                    onClick={() => setSelectedId(null)}
                  >
                    <span>All</span>
                  </button>
                </li>
                {players.map((player) => (
                  <li key={player.id}>
                    <button
                      type="button"
                      className={`portal-roster-btn${player.id === selectedId ? " is-on" : ""}`}
                      onClick={() => setSelectedId(player.id)}
                    >
                      <span>{player.first_name}</span>
                    </button>
                  </li>
                ))}
              </ul>
            ) : null}
            <ol className="portal-lessons">
              {visibleLessons.map((lesson) => (
                <li key={lesson.id} className="portal-lesson">
                  <div className="portal-lesson-top">
                    <strong>
                      {formatLessonDay(lesson.held_on)}
                      {selected ? "" : ` · ${playerName(lesson.player_id)}`}
                    </strong>
                    <button
                      type="button"
                      className="footer-link"
                      onClick={() => void removeLesson(lesson.id)}
                    >
                      Remove
                    </button>
                  </div>
                  {lesson.title ? <p>{lesson.title}</p> : null}
                  {lesson.notes ? <p className="portal-lesson-notes">{lesson.notes}</p> : null}
                  {clips[lesson.id] ? (
                    <video className="portal-clip" controls playsInline src={clips[lesson.id]} />
                  ) : lesson.video_path ? (
                    <p className="portal-note">Loading clip…</p>
                  ) : null}
                </li>
              ))}
            </ol>
            {!visibleLessons.length ? (
              <p className="portal-lead">Nothing logged yet. Drop the first one in.</p>
            ) : null}
          </section>
        </div>
      ) : null}

      {tab === "clips" ? <CoachClips supabase={supabase} profile={profile} /> : null}

      {tab === "roster" ? (
        <section className="portal-card">
          <h2 className="ui-title ui-title-sm">Roster</h2>
          <p className="portal-lead">
            {players.length
              ? `${players.length} kid${players.length === 1 ? "" : "s"} on the card.`
              : "Add a kid and I'll keep the lesson count here."}
          </p>
          <ul className="portal-roster">
            {players.map((player) => {
              const count = counts.get(player.id) || 0;
              return (
                <li key={player.id}>
                  <button
                    type="button"
                    className="portal-roster-btn"
                    onClick={() => {
                      setSelectedId(player.id);
                      setTab("lessons");
                    }}
                  >
                    <span>
                      {player.first_name}
                      {player.age ? ` · ${player.age}` : ""}
                    </span>
                    <em>{lessonCountLabel(count)}</em>
                  </button>
                </li>
              );
            })}
          </ul>
          <form className="start-form portal-mini-form" onSubmit={(event) => void addPlayer(event)}>
            <label className="start-field">
              <span>Kid&apos;s first name</span>
              <input name="first_name" required autoCapitalize="words" />
            </label>
            <div className="start-field-row">
              <label className="start-field">
                <span>Family email</span>
                <input name="guardian_email" type="email" required />
              </label>
              <label className="start-field">
                <span>
                  Age <em>opt.</em>
                </span>
                <input name="age" type="number" min={8} max={16} />
              </label>
            </div>
            <label className="start-field">
              <span>
                Kid email <em>optional — if they have their own login</em>
              </span>
              <input name="player_email" type="email" />
            </label>
            <button className="btn" type="submit" disabled={busy}>
              Add to roster
            </button>
          </form>
        </section>
      ) : null}

      {status ? <p className="portal-note">{status}</p> : null}
    </div>
  );
}
