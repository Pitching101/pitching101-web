import { EMAIL, INFO_PACKET_FILENAME, INFO_PACKET_HREF, SITE_URL } from "@/data/siteCopy";

export const START_LEAD_KEY = "p101-start-lead";
export const START_LEAD_MAIL_KEY = "p101-start-lead-mail";

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

export function inquiryEmailHref(lead: StartLead) {
  return `mailto:${EMAIL}?subject=${encodeURIComponent(
    "Pitching101 inquiry",
  )}&body=${encodeURIComponent(lead.body)}`;
}

export function thanksEmailHref(lead: StartLead) {
  const to = lead.email || EMAIL;
  const more = [
    `Hi ${lead.name || "there"},`,
    "",
    "Thanks for booking an evaluation with Pitching101. We'll respond within 24 business hours at",
    lead.phone || "the number you left",
    "and pick a time to meet.",
    "",
    "Kids 8–16. Parent, coach, travel team, or school.",
    "We meet once, talk about your kid, then I'll recommend Monthly Strikes Pack or Busy-Week Check-In.",
    "",
    "Keep this short packet about how I work:",
    `${SITE_URL}${INFO_PACKET_HREF}`,
    "",
    "What happens:",
    "1. We receive your evaluation form.",
    "2. We'll respond within 24 business hours.",
    "3. We meet once — then a pack that fits.",
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
  sessionStorage.removeItem(START_LEAD_MAIL_KEY);
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
