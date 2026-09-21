"use client";

import { useEffect, useState } from "react";
import { INFO_PACKET_FILENAME, INFO_PACKET_HREF, RESPONSE_PROMISE } from "@/data/siteCopy";
import {
  START_LEAD_MAIL_KEY,
  inquiryEmailHref,
  readStartLead,
  thanksEmailHref,
  type StartLead,
} from "@/data/startLead";

/** After the evaluation — send the note so Coach Deising gets it, and keep the packet. */
export default function StartThanksActions() {
  const [lead, setLead] = useState<StartLead | null>(null);

  useEffect(() => {
    const next = readStartLead();
    // eslint-disable-next-line react-hooks/set-state-in-effect -- lead lives in sessionStorage
    setLead(next);
    if (!next || sessionStorage.getItem(START_LEAD_MAIL_KEY)) return;
    sessionStorage.setItem(START_LEAD_MAIL_KEY, "1");
    window.location.href = inquiryEmailHref(next);
  }, []);

  const packet = (
    <a
      href={INFO_PACKET_HREF}
      download={INFO_PACKET_FILENAME}
      className="btn"
    >
      Download how I work
    </a>
  );

  if (!lead) {
    return (
      <div className="start-thanks-actions">
        {packet}
        <p className="start-form-or">{RESPONSE_PROMISE}</p>
      </div>
    );
  }

  return (
    <div className="start-thanks-actions">
      {packet}
      <a href={inquiryEmailHref(lead)} className="btn-ghost">
        Email this to Coach Deising
      </a>
      <a href={thanksEmailHref(lead)} className="footer-link">
        {lead.email ? "Email what happens next" : "Email more information"}
      </a>
      <p className="start-form-or">
        {RESPONSE_PROMISE} We&apos;ll use {lead.phone}. Players 8–16.
      </p>
    </div>
  );
}
