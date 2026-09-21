"use client";

import { useState, type FormEvent } from "react";
import { EMAIL, PHONE_DISPLAY, PHONE_TEL, trainingOptions } from "@/data/siteCopy";

const AGES = ["8", "9", "10", "11", "12", "13", "14"] as const;

/** Static-export friendly — opens a ready-to-send email to Nick. */
export default function StartForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const parent = String(data.get("parent") || "").trim();
    const kid = String(data.get("kid") || "").trim();
    const age = String(data.get("age") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const email = String(data.get("email") || "").trim();
    const train = String(data.get("train") || "").trim();
    const note = String(data.get("note") || "").trim();

    const lines = [
      "New Pitching101 start note",
      "",
      `Parent: ${parent}`,
      `Kid: ${kid}`,
      `Age: ${age}`,
      `Phone: ${phone}`,
      email ? `Email: ${email}` : "",
      `How we train: ${train}`,
      note ? `Note: ${note}` : "",
    ].filter((line) => line !== "");

    const href = `mailto:${EMAIL}?subject=${encodeURIComponent(
      `Get started — ${kid || parent}`,
    )}&body=${encodeURIComponent(lines.join("\n"))}`;

    setSent(true);
    window.location.href = href;
  }

  return (
    <form className="start-form" onSubmit={onSubmit}>
      <label className="start-field">
        <span>Your name</span>
        <input name="parent" type="text" autoComplete="name" required />
      </label>
      <div className="start-field-row">
        <label className="start-field">
          <span>Kid&apos;s first name</span>
          <input name="kid" type="text" autoComplete="off" required />
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
        <span>Phone</span>
        <input name="phone" type="tel" autoComplete="tel" required />
      </label>
      <label className="start-field">
        <span>
          Email <em>optional</em>
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
      <button type="submit" className="btn">
        Get your child started
      </button>
      <p className="start-form-or">
        {sent ? "Your email app should open next. " : ""}
        Or{" "}
        <a className="footer-link" href={`sms:${PHONE_TEL}`}>
          text {PHONE_DISPLAY}
        </a>{" "}
        if that&apos;s faster.
      </p>
    </form>
  );
}
