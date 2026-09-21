import { EMAIL, INFO_PACKET_FILENAME, INFO_PACKET_HREF, PHONE_TEL } from "@/data/siteCopy";

export const START_LEAD_KEY = "p101-start-lead";
export const START_LEAD_SMS_KEY = "p101-start-lead-sms";

export type StartLead = {
  role: string;
  name: string;
  player: string;
  age: string;
  phone: string;
  email: string;
  goals: string;
  schedule: string;
  heard: string;
  train: string;
  note: string;
  body: string;
};

export function leadFromForm(data: FormData): StartLead {
  const role = String(data.get("role") || "").trim();
  const name = String(data.get("name") || "").trim();
  const player = String(data.get("player") || "").trim();
  const age = String(data.get("age") || "").trim();
  const phone = String(data.get("phone") || "").trim();
  const email = String(data.get("email") || "").trim();
  const goals = String(data.get("goals") || "").trim();
  const schedule = String(data.get("schedule") || "").trim();
  const heard = String(data.get("heard") || "").trim();
  const train = String(data.get("train") || "").trim();
  const note = String(data.get("note") || "").trim();

  const body = [
    "Pitching101 evaluation",
    "",
    `Who: ${role}`,
    `Name: ${name}`,
    player ? `Player or team: ${player}` : "",
    `Age: ${age}`,
    `Phone: ${phone}`,
    email ? `Email: ${email}` : "",
    goals ? `Goals: ${goals}` : "",
    schedule ? `Schedule: ${schedule}` : "",
    heard ? `How they heard: ${heard}` : "",
    train ? `Train: ${train}` : "",
    note ? `Note: ${note}` : "",
  ]
    .filter((line) => line !== "")
    .join("\n");

  return {
    role,
    name,
    player,
    age,
    phone,
    email,
    goals,
    schedule,
    heard,
    train,
    note,
    body,
  };
}

/** Text the evaluation to Coach Deising's phone. iOS wants &body; everyone else wants ?body. */
export function smsHref(body: string) {
  const encoded = encodeURIComponent(body);
  if (typeof navigator !== "undefined" && /iPad|iPhone|iPod/i.test(navigator.userAgent)) {
    return `sms:${PHONE_TEL}&body=${encoded}`;
  }
  return `sms:${PHONE_TEL}?body=${encoded}`;
}

/** Email the same note to Coach Deising. Never the phone or email the parent typed. */
export function inquiryEmailHref(lead: StartLead) {
  return `mailto:${EMAIL}?subject=${encodeURIComponent(
    "Pitching101 inquiry",
  )}&body=${encodeURIComponent(lead.body)}`;
}

export function readStartLead(): StartLead | null {
  if (typeof sessionStorage === "undefined") return null;
  try {
    const raw = sessionStorage.getItem(START_LEAD_KEY);
    return raw ? (JSON.parse(raw) as StartLead) : null;
  } catch {
    return null;
  }
}

export function writeStartLead(lead: StartLead) {
  sessionStorage.setItem(START_LEAD_KEY, JSON.stringify(lead));
  sessionStorage.removeItem(START_LEAD_SMS_KEY);
}

export function downloadInfoPacket() {
  const link = document.createElement("a");
  link.href = INFO_PACKET_HREF;
  link.download = INFO_PACKET_FILENAME;
  link.rel = "noopener";
  document.body.appendChild(link);
  link.click();
  link.remove();
}
