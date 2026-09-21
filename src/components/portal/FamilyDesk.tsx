"use client";

import { useEffect, useMemo, useState } from "react";
import type { SupabaseClient } from "@supabase/supabase-js";
import {
  formatLessonDay,
  lessonCountLabel,
  type Lesson,
  type Player,
} from "@/lib/portal";
import { LESSON_VIDEO_BUCKET } from "@/lib/supabase";

export default function FamilyDesk({
  supabase,
  onSignOut,
}: {
  supabase: SupabaseClient;
  onSignOut: () => void;
}) {
  const [players, setPlayers] = useState<Player[]>([]);
  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [clips, setClips] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(true);

  const selected = players.find((player) => player.id === selectedId) ?? null;
  const selectedLessons = useMemo(
    () => lessons.filter((lesson) => lesson.player_id === selectedId),
    [lessons, selectedId],
  );

  useEffect(() => {
    let cancelled = false;
    async function load() {
      const [{ data: playerRows }, { data: lessonRows }] = await Promise.all([
        supabase.from("players").select("id, first_name, age, guardian_email, player_email, notes").order("first_name"),
        supabase.from("lessons").select("id, player_id, held_on, title, notes, video_path, created_at").order("held_on", { ascending: false }),
      ]);
      if (cancelled) return;
      const nextPlayers = (playerRows || []) as Player[];
      setPlayers(nextPlayers);
      setLessons((lessonRows || []) as Lesson[]);
      setSelectedId(nextPlayers[0]?.id ?? null);
      setLoading(false);
    }
    void load();
    return () => {
      cancelled = true;
    };
  }, [supabase]);

  useEffect(() => {
    let cancelled = false;
    async function signClips() {
      const withVideo = selectedLessons.filter((lesson) => lesson.video_path);
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
  }, [selectedLessons, supabase]);

  if (loading) {
    return <p className="portal-lead">Grabbing your card…</p>;
  }

  if (!players.length) {
    return (
      <div className="portal-desk">
        <div className="portal-desk-bar">
          <p className="portal-kicker">Client portal</p>
          <button type="button" className="footer-link" onClick={onSignOut}>
            Sign out
          </button>
        </div>
        <div className="portal-card">
          <h2 className="ui-title ui-title-sm">Nothing on the card yet</h2>
          <p className="portal-lead">
            Use the same email Coach has on file. If this is your first login, hang
            tight. I&apos;ll add you to the roster after we start lessons.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="portal-desk">
      <div className="portal-desk-bar">
        <p className="portal-kicker">Client portal</p>
        <button type="button" className="footer-link" onClick={onSignOut}>
          Sign out
        </button>
      </div>
      {players.length > 1 ? (
        <ul className="portal-roster portal-roster-row">
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
      {selected ? (
        <section className="portal-card">
          <h2 className="ui-title ui-title-sm">{selected.first_name}</h2>
          <p className="portal-stat">{lessonCountLabel(selectedLessons.length)}</p>
          <p className="portal-lead">
            {selectedLessons.length
              ? "Here's the work so far. Watch the clip if Coach dropped one in."
              : "No lessons posted yet. We'll put them here after we throw."}
          </p>
          <ol className="portal-lessons">
            {selectedLessons.map((lesson) => (
              <li key={lesson.id} className="portal-lesson">
                <div className="portal-lesson-top">
                  <strong>{formatLessonDay(lesson.held_on)}</strong>
                </div>
                {lesson.title ? <p>{lesson.title}</p> : null}
                {lesson.notes ? <p className="portal-lesson-notes">{lesson.notes}</p> : null}
                {clips[lesson.id] ? (
                  <video className="portal-clip" controls playsInline src={clips[lesson.id]} />
                ) : null}
              </li>
            ))}
          </ol>
        </section>
      ) : null}
    </div>
  );
}
