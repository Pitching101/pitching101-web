"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { ENROLL_LABEL, RESPONSE_PROMISE, workWithRoles } from "@/data/siteCopy";
import { leadFromForm, writeStartLead } from "@/data/startLead";

const AGES = ["8", "9", "10", "11", "12", "13", "14", "15", "16", "Mixed 8–16"] as const;

/** First Look form — age, goals, schedule. No price menu. */
export default function StartForm() {
  const router = useRouter();
  const [sending, setSending] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const lead = leadFromForm(new FormData(event.currentTarget));
    writeStartLead(lead);
    setSending(true);
    router.push("/contact/thanks/");
  }

  return (
    <form className="start-form" onSubmit={onSubmit}>
      <fieldset className="start-field">
        <legend>I&apos;m a</legend>
        <div className="start-train">
          {workWithRoles.map((role) => (
            <label key={role} className="start-train-option">
              <input
                type="radio"
                name="role"
                value={role}
                required
                defaultChecked={role === "Parent"}
              />
              <span>{role}</span>
            </label>
          ))}
        </div>
      </fieldset>
      <label className="start-field">
        <span>Your name</span>
        <input
          name="name"
          type="text"
          autoComplete="name"
          autoCapitalize="words"
          enterKeyHint="next"
          required
        />
      </label>
      <label className="start-field">
        <span>Phone</span>
        <input
          name="phone"
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          enterKeyHint="next"
          required
        />
      </label>
      <div className="start-field-row">
        <label className="start-field">
          <span>
            Player or team <em>optional</em>
          </span>
          <input
            name="player"
            type="text"
            autoComplete="off"
            autoCapitalize="words"
            enterKeyHint="next"
            placeholder="Name or team"
          />
        </label>
        <label className="start-field">
          <span>Age</span>
          <select name="age" required defaultValue="" enterKeyHint="go">
            <option value="" disabled>
              8–16
            </option>
            {AGES.map((age) => (
              <option key={age} value={age}>
                {age}
              </option>
            ))}
          </select>
        </label>
      </div>
      <label className="start-field">
        <span>Goals</span>
        <textarea
          name="goals"
          required
          rows={3}
          enterKeyHint="next"
          placeholder="More strikes, a healthier arm, travel ball…"
        />
      </label>
      <label className="start-field">
        <span>Schedule</span>
        <textarea
          name="schedule"
          required
          rows={2}
          enterKeyHint="go"
          placeholder="Days or times that usually work"
        />
      </label>
      <button type="submit" className="btn" disabled={sending}>
        {sending ? "Sending…" : ENROLL_LABEL}
      </button>
      <p className="start-form-or">{RESPONSE_PROMISE}</p>
    </form>
  );
}
