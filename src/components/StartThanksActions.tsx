"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { INFO_PACKET_FILENAME, INFO_PACKET_HREF } from "@/data/siteCopy";
import {
  inquiryEmailHref,
  readStartLead,
  readStartLeadSaved,
  smsHref,
  type StartLead,
} from "@/data/startLead";

/** After the evaluation — text and email Coach Deising, and keep the packet. */
export default function StartThanksActions() {
  const [view, setView] = useState<{
    lead: StartLead | null;
    saved: boolean;
  } | null>(null);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- lead lives in sessionStorage
    setView({ lead: readStartLead(), saved: readStartLeadSaved() });
  }, []);

  const lead = view?.lead ?? null;
  const saved = view?.saved ?? false;
  const note = saved
    ? "Coach Deising has your evaluation. Text or email is a backup if you want to send the same note yourself."
    : lead
      ? "Text or email this note to Coach Deising, then tap send."
      : "Send the evaluation and Coach Deising will have it. Text or email is a backup.";

  const afterForm = view ? (
    <p className="start-form-or">
      {note}{" "}
      <Link href="/privacy/">Privacy policy</Link>
      {" · "}
      <Link href="/terms/">Terms of service</Link>
    </p>
  ) : null;

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
        {afterForm}
      </div>
    );
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
      {afterForm}
    </div>
  );
}
