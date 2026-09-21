"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import type { Session } from "@supabase/supabase-js";
import { ENROLL_HREF, ENROLL_LABEL } from "@/data/siteCopy";
import { getSupabase, isPortalConfigured } from "@/lib/supabase";
import type { Profile } from "@/lib/portal";
import DugoutGate, { type PortalAudience } from "./DugoutGate";
import CoachDesk from "./CoachDesk";
import FamilyDesk from "./FamilyDesk";

export default function PortalApp() {
  const supabase = getSupabase();
  const [session, setSession] = useState<Session | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [ready, setReady] = useState(!supabase);
  const [audience, setAudience] = useState<PortalAudience>("family");

  useEffect(() => {
    if (!supabase) return;
    let cancelled = false;
    supabase.auth.getSession().then(({ data }) => {
      if (!cancelled) setSession(data.session ?? null);
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
    if (!supabase) return;
    if (!session) {
      queueMicrotask(() => {
        setProfile(null);
        setReady(true);
      });
      return;
    }
    let cancelled = false;
    supabase
      .from("profiles")
      .select("id, role, display_name")
      .eq("id", session.user.id)
      .maybeSingle()
      .then(({ data }) => {
        if (cancelled) return;
        setProfile((data as Profile | null) ?? {
          id: session.user.id,
          role: "family",
          display_name: null,
        });
        setReady(true);
      });
    return () => {
      cancelled = true;
    };
  }, [session, supabase]);

  async function signOut() {
    await supabase?.auth.signOut();
    setSession(null);
    setProfile(null);
  }

  function chooseAudience(next: PortalAudience) {
    setAudience(next);
  }

  if (!isPortalConfigured() || !supabase) {
    return (
      <div className="portal-card">
        <h1 className="ui-title ui-title-lg">The client portal isn&apos;t open yet</h1>
        <p className="portal-lead">
          Lesson tracking is still getting wired. Book an evaluation and I&apos;ll
          get you in when it&apos;s ready.
        </p>
        <Link href={ENROLL_HREF} className="btn">
          {ENROLL_LABEL}
        </Link>
      </div>
    );
  }

  if (!ready) {
    return <p className="portal-lead">Opening the client portal…</p>;
  }

  if (!session) {
    const familyDoor = audience === "family";
    return (
      <div className="portal-gate">
        <div className="portal-who" role="group" aria-label="Who is signing in">
          <button
            type="button"
            className={`portal-who-btn${familyDoor ? " is-on" : ""}`}
            aria-pressed={familyDoor}
            onClick={() => chooseAudience("family")}
          >
            Parents and players
          </button>
          <button
            type="button"
            className={`portal-who-btn${!familyDoor ? " is-on" : ""}`}
            aria-pressed={!familyDoor}
            onClick={() => chooseAudience("coach")}
          >
            Coach
          </button>
        </div>
        {familyDoor ? (
          <>
            <h1 className="ui-title ui-title-lg">Client portal</h1>
            <p className="portal-lead">
              See lesson notes and clips from Coach Deising. Use the email we
              have on file.
            </p>
          </>
        ) : (
          <>
            <h1 className="ui-title ui-title-lg">Coach desk</h1>
            <p className="portal-lead">
              Log lessons, keep the roster, and drop clips. Families see what
              you post.
            </p>
          </>
        )}
        <DugoutGate
          supabase={supabase}
          audience={audience}
          onSession={setSession}
        />
      </div>
    );
  }

  if (profile?.role === "admin") {
    return (
      <CoachDesk
        supabase={supabase}
        profile={profile}
        onSignOut={() => void signOut()}
      />
    );
  }

  return <FamilyDesk supabase={supabase} onSignOut={() => void signOut()} />;
}
