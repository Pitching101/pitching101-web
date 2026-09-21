"use client";

import { useCallback, useEffect, useMemo, useState, type FormEvent } from "react";
import type { SupabaseClient } from "@supabase/supabase-js";
import {
  formatProgressMark,
  type Profile,
  type ProgressMark,
  type ProgressPlayer,
} from "@/lib/portal";

function latestHeadline(marks: ProgressMark[]) {
  const strike = [...marks].reverse().find((mark) => mark.made != null && mark.attempted != null);
  if (strike) return formatProgressMark(strike);
  const toss = [...marks].reverse().find((mark) => mark.yards != null);
  if (toss) return formatProgressMark(toss);
  return "—";
}

export default function CoachProgress({
  supabase,
  profile,
}: {
  supabase: SupabaseClient;
  profile: Profile;
}) {
  const [players, setPlayers] = useState<ProgressPlayer[]>([]);
  const [marks, setMarks] = useState<ProgressMark[]>([]);
  const [busy, setBusy] = useState(false);
  const [status, setStatus] = useState("");
  const [openId, setOpenId] = useState<string | null | "">(null);

  const rows = useMemo(() => {
    return players.map((player) => {
      const lines = marks
        .filter((mark) => mark.player_id === player.id)
        .slice()
        .sort((a, b) => a.sort_order - b.sort_order || a.label.localeCompare(b.label));
      return { player, lines };
    });
  }, [players, marks]);

  const reload = useCallback(async () => {
    const [{ data: playerRows }, { data: markRows }] = await Promise.all([
      supabase.from("tracker_progress_players").select("id, name, sort_order").order("sort_order").order("name"),
      supabase
        .from("tracker_progress_marks")
        .select("id, player_id, sort_order, label, made, attempted, yards")
        .order("sort_order"),
    ]);
    setPlayers((playerRows || []) as ProgressPlayer[]);
    setMarks(
      ((markRows || []) as ProgressMark[]).map((mark) => ({
        ...mark,
        made: mark.made == null ? null : Number(mark.made),
        attempted: mark.attempted == null ? null : Number(mark.attempted),
        yards: mark.yards == null ? null : Number(mark.yards),
      })),
    );
  }, [supabase]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- load progress from supabase
    void reload();
  }, [reload]);

  async function addPlayer(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const name = String(new FormData(form).get("name") || "").trim();
    if (!name) return;
    setBusy(true);
    setStatus("");
    const nextOrder = (players.at(-1)?.sort_order ?? 0) + 1;
    const { error } = await supabase.from("tracker_progress_players").insert({
      name,
      sort_order: nextOrder,
      created_by: profile.id,
    });
    setBusy(false);
    if (error) {
      setStatus(error.message);
      return;
    }
    form.reset();
    await reload();
  }

  async function addMark(event: FormEvent<HTMLFormElement>, playerId: string, nextOrder: number) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const label = String(data.get("label") || "").trim();
    const madeRaw = String(data.get("made") || "").trim();
    const attemptedRaw = String(data.get("attempted") || "").trim();
    const yardsRaw = String(data.get("yards") || "").trim();
    const made = madeRaw === "" ? null : Number(madeRaw);
    const attempted = attemptedRaw === "" ? null : Number(attemptedRaw);
    const yards = yardsRaw === "" ? null : Number(yardsRaw);
    if (!label) {
      setStatus("Put a label on it — 1st lesson, week 9 bullpen, whatever you write.");
      return;
    }
    if ((made == null) !== (attempted == null)) {
      setStatus("Strikes need both numbers — like 10/20.");
      return;
    }
    if (made != null && attempted != null && (made < 0 || attempted <= 0 || made > attempted)) {
      setStatus("Those strike numbers don't add up.");
      return;
    }
    if (yards != null && yards <= 0) {
      setStatus("Long toss needs yards.");
      return;
    }
    setBusy(true);
    setStatus("");
    const { error } = await supabase.from("tracker_progress_marks").insert({
      player_id: playerId,
      sort_order: nextOrder,
      label,
      made,
      attempted,
      yards,
      created_by: profile.id,
    });
    setBusy(false);
    if (error) {
      setStatus(error.message);
      return;
    }
    form.reset();
    await reload();
  }

  async function removeMark(id: string) {
    if (!window.confirm("Take this mark off the notebook?")) return;
    setBusy(true);
    await supabase.from("tracker_progress_marks").delete().eq("id", id);
    setBusy(false);
    await reload();
  }

  return (
    <div
      className="portal-tracker"
      id="portal-panel-progress"
      role="tabpanel"
      aria-labelledby="portal-tab-progress"
    >
      <section className="portal-card">
        <p className="portal-kicker">Your notebook</p>
        <h2 className="ui-title ui-title-sm">Strike growth</h2>
        <p className="portal-lead">
          Same book as the money tracker, for strikes and long toss. Add a
          player, drop in 10/20 or 65 yards. Families don&apos;t see this.
        </p>
      </section>

      {rows.map(({ player, lines }) => {
        const activeId = openId === "" ? null : (openId ?? rows[0]?.player.id ?? null);
        const open = activeId === player.id;
        return (
          <section key={player.id} className="portal-card">
            <button
              type="button"
              className="portal-tracker-head"
              aria-expanded={open}
              onClick={() => setOpenId(open ? "" : player.id)}
            >
              <h3 className="ui-title ui-title-sm">{player.name}</h3>
              <strong>{latestHeadline(lines)}</strong>
            </button>
            {open ? (
              <>
                <ol className="portal-lessons">
                  {lines.map((mark) => {
                    const value = formatProgressMark(mark);
                    return (
                      <li key={mark.id} className="portal-lesson portal-tracker-line">
                        <div className="portal-lesson-top">
                          <strong>{mark.label}</strong>
                          {value ? <span>{value}</span> : <span />}
                          <button
                            type="button"
                            className="footer-link"
                            onClick={() => void removeMark(mark.id)}
                          >
                            Remove
                          </button>
                        </div>
                      </li>
                    );
                  })}
                </ol>
                {!lines.length ? (
                  <p className="portal-lead">No marks yet.</p>
                ) : null}
                <form
                  className="start-form portal-mini-form portal-tracker-add"
                  onSubmit={(event) => void addMark(event, player.id, (lines.at(-1)?.sort_order ?? 0) + 1)}
                >
                  <label className="start-field">
                    <span>What it was</span>
                    <input name="label" placeholder="1st lesson" required autoCapitalize="sentences" />
                  </label>
                  <div className="start-field-row portal-progress-row">
                    <label className="start-field">
                      <span>Strikes</span>
                      <input name="made" type="number" min="0" step="1" />
                    </label>
                    <label className="start-field">
                      <span>Of</span>
                      <input name="attempted" type="number" min="1" step="1" />
                    </label>
                    <label className="start-field">
                      <span>Yards</span>
                      <input name="yards" type="number" min="1" step="1" />
                    </label>
                  </div>
                  <button className="btn" type="submit" disabled={busy}>
                    Add mark
                  </button>
                </form>
              </>
            ) : null}
          </section>
        );
      })}

      <section className="portal-card">
        <h3 className="ui-title ui-title-sm">Add a player</h3>
        <form className="start-form portal-mini-form" onSubmit={(event) => void addPlayer(event)}>
          <label className="start-field">
            <span>Name</span>
            <input name="name" required autoCapitalize="words" />
          </label>
          <button className="btn" type="submit" disabled={busy}>
            Add to progress
          </button>
        </form>
      </section>

      {status ? (
        <p className="portal-note" aria-live="polite">
          {status}
        </p>
      ) : null}
    </div>
  );
}
