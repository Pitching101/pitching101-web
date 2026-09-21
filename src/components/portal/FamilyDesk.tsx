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
import PortalLessonClip from "./PortalLessonClip";

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
    return <p className="portal-lead">Loading your lessons…</p>;
  }

  if (!players.length) {
    return (
      <div className="portal-desk portal-desk-family">
        <div className="portal-desk-bar">
          <div>
            <p className="portal-kicker">Client portal</p>
            <h1 className="ui-title ui-title-md">Your lessons</h1>
          </div>
          <button type="button" className="footer-link" onClick={onSignOut}>
            Sign out
          </button>
        </div>
        <div className="portal-card">
          <h2 className="ui-title ui-title-sm">Nothing posted yet</h2>
          <p className="portal-lead">
            Sign in with the email Coach has on file. After we start lessons,
            notes and clips show up here.
          </p>
        </div>
      </div>
    );
  }

  const heading =
    players.length === 1 && selected
      ? `${selected.first_name}'s lessons`
      : "Your lessons";

  return (
    <div className="portal-desk portal-desk-family">
      <div className="portal-desk-bar">
        <div>
          <p className="portal-kicker">Client portal</p>
          <h1 className="ui-title ui-title-md">{heading}</h1>
        </div>
        <button type="button" className="footer-link" onClick={onSignOut}>
          Sign out
        </button>
      </div>
      <p className="portal-lead">
        Notes and clips from lessons. Coach posts them here after you throw.
      </p>
      {players.length > 1 ? (
        <div className="portal-picker">
          <p className="portal-picker-label" id="portal-whose-lessons">
            Whose lessons
          </p>
          <div
            className="portal-roster portal-roster-row"
            role="radiogroup"
            aria-labelledby="portal-whose-lessons"
          >
            {players.map((player) => (
              <button
                key={player.id}
                type="button"
                role="radio"
                aria-checked={player.id === selectedId}
                className={`portal-roster-btn${player.id === selectedId ? " is-on" : ""}`}
                onClick={() => setSelectedId(player.id)}
              >
                <span>{player.first_name}</span>
              </button>
            ))}
          </div>
        </div>
      ) : null}
      {selected ? (
        <section className="portal-card" aria-label={`${selected.first_name}'s lesson notes`}>
          {players.length > 1 ? (
            <h2 className="ui-title ui-title-sm">
              {selected.first_name}
              {selected.age ? ` · ${selected.age}` : ""}
            </h2>
          ) : null}
          <p className="portal-stat">{lessonCountLabel(selectedLessons.length)}</p>
          {selectedLessons.length ? (
            <ol className="portal-lessons">
              {selectedLessons.map((lesson) => {
                const day = formatLessonDay(lesson.held_on);
                const clipLabel = lesson.title
                  ? `Lesson clip: ${lesson.title}`
                  : `Lesson clip from ${day}`;
                return (
                  <li key={lesson.id} className="portal-lesson">
                    <h2 className="portal-lesson-day">{day}</h2>
                    {lesson.title ? <p className="portal-lesson-title">{lesson.title}</p> : null}
                    {lesson.notes ? <p className="portal-lesson-notes">{lesson.notes}</p> : null}
                    {clips[lesson.id] ? (
                      <PortalLessonClip src={clips[lesson.id]} label={clipLabel} />
                    ) : lesson.video_path ? (
                      <p className="portal-note">Loading clip…</p>
                    ) : null}
                  </li>
                );
              })}
            </ol>
          ) : (
            <p className="portal-lead">
              No lessons posted yet. After we throw, you&apos;ll see notes and
              clips here.
            </p>
          )}
        </section>
      ) : null}
    </div>
  );
}
