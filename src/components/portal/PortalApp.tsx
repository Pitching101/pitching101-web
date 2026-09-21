"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import type { Session } from "@supabase/supabase-js";
import { ENROLL_HREF, ENROLL_LABEL } from "@/data/siteCopy";
import { getSupabase, isPortalConfigured } from "@/lib/supabase";
import type { Profile } from "@/lib/portal";
import DugoutGate from "./DugoutGate";
import CoachDesk from "./CoachDesk";
import FamilyDesk from "./FamilyDesk";

export default function PortalApp() {
  const supabase = getSupabase();
  const [session, setSession] = useState<Session | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!supabase) {
      setReady(true);
      return;
    }
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
    if (!supabase) {
      setReady(true);
      return;
    }
    if (!session) {
      setProfile(null);
      setReady(true);
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
    return (
      <>
        <h1 className="ui-title ui-title-lg">Client portal</h1>
        <p className="portal-lead">
          Families see lesson counts and clips. Coach gets the desk — lessons,
          roster, and your videos. Use the email I have on file.
        </p>
        <DugoutGate supabase={supabase} onSession={setSession} />
      </>
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
