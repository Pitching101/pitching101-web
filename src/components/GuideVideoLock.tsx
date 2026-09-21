"use client";

import { useEffect, useState } from "react";
import type { Session } from "@supabase/supabase-js";
import GuideAuth from "@/components/GuideAuth";
import GuideSteps from "@/components/GuideSteps";
import Reveal from "@/components/Reveal";
import type { LeadMagnetRoutine } from "@/data/leadMagnets";
import { getSupabase, isSupabaseConfigured } from "@/lib/supabase";

function RoutineBlock({
  routine,
  delayMs,
  hideVideos = false,
  reveal = true,
}: {
  routine: LeadMagnetRoutine;
  delayMs: number;
  hideVideos?: boolean;
  reveal?: boolean;
}) {
  const steps = hideVideos
    ? routine.steps.map((step) => ({ ...step, video: undefined }))
    : routine.steps;
  const body = (
    <>
      <h2 className="ui-title ui-title-sm">{routine.heading}</h2>
      {routine.note ? <p className="guide-copy">{routine.note}</p> : null}
      <GuideSteps steps={steps} titleTag="h3" />
    </>
  );
  if (!reveal) {
    return <div className="guide-routine">{body}</div>;
  }
  return (
    <Reveal delayMs={delayMs} className="guide-routine">
      {body}
    </Reveal>
  );
}

export default function GuideVideoLock({
  slug,
  routines,
}: {
  slug: string;
  routines: LeadMagnetRoutine[];
}) {
  const [session, setSession] = useState<Session | null>(null);
  const [ready, setReady] = useState(false);
  const [unlockedRoutines, setUnlockedRoutines] = useState<LeadMagnetRoutine[] | null>(null);
  const supabase = getSupabase();

  useEffect(() => {
    if (!supabase) {
      setReady(true);
      return;
    }
    let cancelled = false;
    void supabase.auth.getSession().then(({ data }) => {
      if (!cancelled) {
        setSession(data.session);
        setReady(true);
      }
    });
    const { data } = supabase.auth.onAuthStateChange((_event, next) => {
      setSession(next);
    });
    return () => {
      cancelled = true;
      data.subscription.unsubscribe();
    };
  }, [supabase]);

  useEffect(() => {
    if (!session) {
      setUnlockedRoutines(null);
      return;
    }
    let cancelled = false;
    void import("@/data/guideVideoMap").then(({ attachGuideVideos, videoMapFor }) => {
      if (cancelled) return;
      setUnlockedRoutines(attachGuideVideos(routines, videoMapFor(slug)));
    });
    return () => {
      cancelled = true;
    };
  }, [session, routines, slug]);

  const unlocked = Boolean(session);

  if (!ready || (unlocked && !unlockedRoutines)) {
    return (
      <p className="guide-copy guide-gate-wait">Hang on, checking if you&apos;re signed in.</p>
    );
  }

  if (unlocked && unlockedRoutines) {
    return (
      <>
        <p className="guide-gate-in">You&apos;re in. Watch the rest with me.</p>
        {unlockedRoutines.map((routine, index) => (
          <RoutineBlock key={routine.heading} routine={routine} delayMs={40 + index * 20} />
        ))}
      </>
    );
  }

  const peek = routines[0];
  const peekSteps = peek
    ? {
        ...peek,
        steps: peek.steps.slice(0, 2).map((step) => ({ ...step, video: undefined })),
      }
    : null;
  const ghost = peek
    ? peek.steps.slice(2, 5).map((step) => ({ ...step, video: undefined }))
    : [];

  return (
    <div className="guide-gate">
      <div className="guide-gate-peek" aria-hidden="true">
        {peekSteps ? <RoutineBlock routine={peekSteps} delayMs={40} hideVideos reveal={false} /> : null}
        {ghost.length ? (
          <ol className="magnet-template guide-gate-ghost">
            {ghost.map((step, index) => (
              <li key={step.label} className="magnet-step">
                <span className="magnet-step-num" aria-hidden="true">
                  {index + 3}
                </span>
                <div>
                  <h3 className="magnet-step-title">{step.label}</h3>
                  <p className="magnet-step-note">{step.note}</p>
                </div>
              </li>
            ))}
          </ol>
        ) : null}
      </div>
      <div className="guide-gate-lock">
        <p className="magnet-card-kicker">The rest is locked</p>
        <h2 className="ui-title ui-title-sm">Sign in to keep going</h2>
        <p className="guide-copy">
          Welcome&apos;s free. The J-band and single-band clips unlock with the same
          email as the client portal.
        </p>
        {isSupabaseConfigured() && supabase ? (
          <GuideAuth supabase={supabase} onSession={setSession} />
        ) : (
          <p className="guide-gate-warn">
            Login isn&apos;t open on this preview yet. Same email as the client portal once it is.
          </p>
        )}
      </div>
    </div>
  );
}
