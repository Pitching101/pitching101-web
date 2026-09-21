"use client";

import { useEffect, useState } from "react";
import { INFO_PACKET_FILENAME, INFO_PACKET_HREF } from "@/data/siteCopy";
import {
  START_LEAD_SMS_KEY,
  inquiryEmailHref,
  readStartLead,
  smsHref,
  type StartLead,
} from "@/data/startLead";

/** After the evaluation — text and email Coach Deising, and keep the packet. */
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
    return <div className="start-thanks-actions">{packet}</div>;
  }

  return (
    <div className="start-thanks-actions">
      {packet}
      <a href={smsHref(lead.body)} className="btn">
        Text this to Coach Deising
      </a>
      <a href={inquiryEmailHref(lead)} className="btn-ghost">
        Email this to Coach Deising
      </a>
      <p className="start-form-or">
        We&apos;ll use {lead.phone}. Players 8–16.
      </p>
    </div>
  );
}
