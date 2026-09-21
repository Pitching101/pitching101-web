import { EMAIL, PHONE_TEL } from "@/data/siteCopy";

export const START_LEAD_KEY = "p101-start-lead";
export const START_LEAD_SMS_KEY = "p101-start-lead-sms";

export type StartLead = {
  role: string;
  name: string;
  player: string;
  age: string;
  phone: string;
  email: string;
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
  const train = String(data.get("train") || "").trim();
  const note = String(data.get("note") || "").trim();

  const body = [
    "Pitching101 start note",
    "",
    `Who: ${role}`,
    `Name: ${name}`,
    `Player or team: ${player}`,
    `Age: ${age}`,
    `Call them: ${phone}`,
    email ? `Email: ${email}` : "",
    `Train: ${train}`,
    note ? `Note: ${note}` : "",
  ]
    .filter((line) => line !== "")
    .join("\n");

  return { role, name, player, age, phone, email, train, note, body };
}

export function smsHref(body: string) {
  const encoded = encodeURIComponent(body);
  if (typeof navigator !== "undefined" && /iPad|iPhone|iPod/i.test(navigator.userAgent)) {
    return `sms:${PHONE_TEL}&body=${encoded}`;
  }
  return `sms:${PHONE_TEL}?body=${encoded}`;
}

export function thanksEmailHref(lead: StartLead) {
  const to = lead.email || EMAIL;
  const more = [
    `Hey ${lead.name || "there"} —`,
    "",
    "Got your Pitching101 note. I'll call or text you back at",
    lead.phone || "the number you left",
    "and we'll pick a field.",
    "",
    "Kids 8–16. Parent, other coach, travel team, or school.",
    "In person, at home, or a mix.",
    "",
    "What happens:",
    "1. I get your note on my phone.",
    "2. I call or text you back.",
    "3. First session — warmup, a few cues, something to try next practice.",
    "",
    "Text or call 845-768-2211 if you want to jump ahead.",
  ].join("\n");

  return `mailto:${to}?subject=${encodeURIComponent(
    "Pitching101 — what happens next",
  )}&body=${encodeURIComponent(more)}`;
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
