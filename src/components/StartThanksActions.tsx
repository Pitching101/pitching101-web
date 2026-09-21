"use client";

import { useEffect, useState } from "react";
import { RESPONSE_PROMISE } from "@/data/siteCopy";
import {
  START_LEAD_SMS_KEY,
  readStartLead,
  smsHref,
  thanksEmailHref,
  type StartLead,
} from "@/data/startLead";

/** After First Look — send the note so Coach Deising gets it. */
export default function StartThanksActions() {
  const [lead, setLead] = useState<StartLead | null>(null);

  useEffect(() => {
    const next = readStartLead();
    // eslint-disable-next-line react-hooks/set-state-in-effect -- lead lives in sessionStorage
    setLead(next);
    if (!next || sessionStorage.getItem(START_LEAD_SMS_KEY)) return;
    sessionStorage.setItem(START_LEAD_SMS_KEY, "1");
    window.location.href = smsHref(next.body);
  }, []);

  if (!lead) {
    return (
      <div className="start-thanks-actions">
        <p className="start-form-or">{RESPONSE_PROMISE}</p>
      </div>
    );
  }

  return (
    <div className="start-thanks-actions">
      <a href={smsHref(lead.body)} className="btn">
        Send this to Coach Deising
      </a>
      <a href={thanksEmailHref(lead)} className="footer-link">
        {lead.email ? "Email what happens next" : "Email more information"}
      </a>
      <p className="start-form-or">
        {RESPONSE_PROMISE} We&apos;ll use {lead.phone}. Kids 8–16.
      </p>
    </div>
  );
}
