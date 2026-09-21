"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { PHONE_DISPLAY, PHONE_TEL, trainingOptions, workWithRoles } from "@/data/siteCopy";
import { leadFromForm, writeStartLead } from "@/data/startLead";

const AGES = ["8", "9", "10", "11", "12", "13", "14", "Mixed 8–14"] as const;

/** Collects a start note, texts Nick, then goes to the thank-you page. */
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
        <input name="name" type="text" autoComplete="name" required />
      </label>
      <div className="start-field-row">
        <label className="start-field">
          <span>Player or team</span>
          <input name="player" type="text" autoComplete="off" required />
        </label>
        <label className="start-field">
          <span>Age</span>
          <select name="age" required defaultValue="">
            <option value="" disabled>
              8–14
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
        <span>Phone so I can call you</span>
        <input name="phone" type="tel" autoComplete="tel" required />
      </label>
      <label className="start-field">
        <span>
          Email <em>optional — I can send more info</em>
        </span>
        <input name="email" type="email" autoComplete="email" />
      </label>
      <fieldset className="start-field">
        <legend>How do you want to train?</legend>
        <div className="start-train">
          {trainingOptions.map((option) => (
            <label key={option.label} className="start-train-option">
              <input
                type="radio"
                name="train"
                value={option.label}
                required
                defaultChecked={option.label === "In person"}
              />
              <span>{option.label}</span>
            </label>
          ))}
        </div>
      </fieldset>
      <label className="start-field">
        <span>
          Anything I should know <em>optional</em>
        </span>
        <textarea name="note" rows={3} />
      </label>
      <button type="submit" className="btn" disabled={sending}>
        {sending ? "Opening a text…" : "Text Nick and get started"}
      </button>
      <p className="start-form-or">
        Your phone opens a text to me with this note. I call or text you back.
        Or{" "}
        <a className="footer-link" href={`sms:${PHONE_TEL}`}>
          text {PHONE_DISPLAY}
        </a>{" "}
        yourself.
      </p>
    </form>
  );
}
