"use client";

import { useEffect, useState } from "react";
import { PHONE_DISPLAY, PHONE_TEL } from "@/data/siteCopy";
import {
  START_LEAD_SMS_KEY,
  readStartLead,
  smsHref,
  thanksEmailHref,
  type StartLead,
} from "@/data/startLead";

/** After Get started — send the note to Nick's phone, or email more info. */
export default function StartThanksActions() {
  const [lead, setLead] = useState<StartLead | null>(null);

  useEffect(() => {
    const next = readStartLead();
    setLead(next);
    if (!next || sessionStorage.getItem(START_LEAD_SMS_KEY)) return;
    sessionStorage.setItem(START_LEAD_SMS_KEY, "1");
    window.location.href = smsHref(next.body);
  }, []);

  if (!lead) {
    return (
      <div className="start-thanks-actions">
        <a href={`sms:${PHONE_TEL}`} className="btn">
          Text {PHONE_DISPLAY}
        </a>
        <p className="start-form-or">
          No note on this phone? Text me and I&apos;ll call you back.
        </p>
      </div>
    );
  }

  return (
    <div className="start-thanks-actions">
      <a href={smsHref(lead.body)} className="btn">
        Send this to Nick&apos;s phone
      </a>
      {lead.email ? (
        <a href={thanksEmailHref(lead)} className="footer-link">
          Email me what happens next
        </a>
      ) : (
        <a href={thanksEmailHref(lead)} className="footer-link">
          Email more information
        </a>
      )}
      <p className="start-form-or">
        I&apos;ll call or text {lead.phone}. Kids 8–14. Parent, coach, travel
        team, or school.
      </p>
    </div>
  );
}
