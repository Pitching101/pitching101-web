"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { PHONE_DISPLAY, PHONE_TEL, RESPONSE_PROMISE, workWithRoles } from "@/data/siteCopy";
import { leadFromForm, writeStartLead } from "@/data/startLead";

const AGES = ["8", "9", "10", "11", "12", "13", "14", "15", "16", "Mixed 8–16"] as const;

/** Short start form — name, phone, age. Texts Coach Deising, then thank-you. */
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
        <legend>I am a</legend>
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
      <button type="submit" className="btn" disabled={sending}>
        {sending ? "Sending…" : "Get started"}
      </button>
      <p className="start-form-or">
        {RESPONSE_PROMISE} Or{" "}
        <a className="footer-link" href={`sms:${PHONE_TEL}`}>
          text {PHONE_DISPLAY}
        </a>
        .
      </p>
    </form>
  );
}
