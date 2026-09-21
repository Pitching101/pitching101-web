"use client";

import { useState, type FormEvent } from "react";
import type { Session, SupabaseClient } from "@supabase/supabase-js";

type Mode = "signin" | "signup";

export default function DugoutGate({
  supabase,
  onSession,
}: {
  supabase: SupabaseClient;
  onSession: (session: Session) => void;
}) {
  const [mode, setMode] = useState<Mode>("signin");
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setBusy(true);
    setError("");
    setMessage("");
    const form = new FormData(event.currentTarget);
    const email = String(form.get("email") || "").trim().toLowerCase();
    const password = String(form.get("password") || "");
    const displayName = String(form.get("name") || "").trim();
    const redirectTo = `${window.location.origin}/portal/`;

    if (mode === "signup") {
      const { data, error: signError } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: displayName ? { display_name: displayName } : undefined,
          emailRedirectTo: redirectTo,
        },
      });
      setBusy(false);
      if (signError) {
        setError(signError.message);
        return;
      }
      if (data.session) {
        onSession(data.session);
        return;
      }
      setMessage("Check your email to confirm, then come back here.");
      return;
    }

    const { data, error: signError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    setBusy(false);
    if (signError) {
      setError(signError.message);
      return;
    }
    if (data.session) onSession(data.session);
  }

  async function sendLink() {
    const emailInput = document.querySelector<HTMLInputElement>('input[name="email"]');
    const email = emailInput?.value.trim().toLowerCase() || "";
    if (!email) {
      setError("Put your email in first.");
      return;
    }
    setBusy(true);
    setError("");
    setMessage("");
    const { error: linkError } = await supabase.auth.signInWithOtp({
      email,
      options: { emailRedirectTo: `${window.location.origin}/portal/` },
    });
    setBusy(false);
    if (linkError) {
      setError(linkError.message);
      return;
    }
    setMessage("I emailed you a login link. It might take a minute.");
  }

  return (
    <form className="start-form portal-auth" onSubmit={onSubmit}>
      {mode === "signup" ? (
        <label className="start-field">
          <span>Your name</span>
          <input name="name" type="text" autoComplete="name" autoCapitalize="words" />
        </label>
      ) : null}
      <label className="start-field">
        <span>Email</span>
        <input
          name="email"
          type="email"
          autoComplete="email"
          required
          enterKeyHint="next"
        />
      </label>
      <label className="start-field">
        <span>Password</span>
        <input
          name="password"
          type="password"
          autoComplete={mode === "signup" ? "new-password" : "current-password"}
          minLength={8}
          required
        />
      </label>
      {error ? <p className="portal-note portal-note-warn">{error}</p> : null}
      {message ? <p className="portal-note">{message}</p> : null}
      <button className="btn" type="submit" disabled={busy}>
        {busy ? "Hang on…" : mode === "signup" ? "Create my account" : "Sign in"}
      </button>
      <button
        className="btn-ghost portal-link-btn"
        type="button"
        disabled={busy}
        onClick={() => void sendLink()}
      >
        Email me a login link
      </button>
      <p className="start-form-or">
        {mode === "signin" ? (
          <button type="button" className="footer-link" onClick={() => setMode("signup")}>
            New here? Make an account
          </button>
        ) : (
          <button type="button" className="footer-link" onClick={() => setMode("signin")}>
            I already have one
          </button>
        )}
      </p>
    </form>
  );
}
