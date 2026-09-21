/** Shared Pitching101 facts — keep answers honest. No invented prices or street address. */

export const SITE_URL = "https://pitching101.com";
export const PHONE_DISPLAY = "845-768-2211";
export const PHONE_TEL = "8457682211";
export const EMAIL = "nickdeisng@gmail.com";
export const TRUSTPILOT_URL = "https://www.trustpilot.com/review/pitching101.com";
export const INSTAGRAM_HANDLE = "pitching101_nickdeising";
export const INSTAGRAM_URL = `https://www.instagram.com/${INSTAGRAM_HANDLE}/`;
export const RESPONSE_PROMISE = "We'll respond within 24 business hours.";
export const ENROLL_LABEL = "Book a First Look";
export const ENROLL_HREF = "/contact/";
export const META_DESCRIPTION =
  "Pitching101 is Coach Deising's youth pitching lessons in Naples, FL for kids ages 8-16. Book a First Look, then a simple pack. Parents, other coaches, travel teams, and schools.";

export type FaqItem = { q: string; a: string };

export const faqs: FaqItem[] = [
  {
    q: "What are Pitching101 youth pitching lessons?",
    a: "Coach Deising works with kids ages 8–16 in Naples, FL. He is the junior varsity head coach at Gulfshore High School, and also coaches travel teams. Lessons include arm care and a plan they can use at the next practice.",
  },
  {
    q: "What ages do you coach?",
    a: "Ages 8–16.",
  },
  {
    q: "Who do you work with?",
    a: "Kids ages 8–16. Parents, other coaches, travel teams, and schools. Same work either way.",
  },
  {
    q: "Do you coach travel teams?",
    a: "Yes. Coach Deising works as a pitching coach for travel teams — with a coach, a team contact, or next to your existing plan. Ages 8–16.",
  },
  {
    q: "Where are pitching lessons in Naples, FL?",
    a: "Naples and Southwest Florida. There is no walk-up address — we'll share the meeting location after you book a First Look.",
  },
  {
    q: "Do you only do in-person lessons?",
    a: "No. Lessons can be in person, at home, or both.",
  },
  {
    q: "How do I book a First Look?",
    a: "Send the short form — age, goals, and schedule. We'll respond within 24 business hours. We meet once, talk plain English, then recommend a pack.",
  },
  {
    q: "What is a First Look?",
    a: "One visit. We talk in plain English about your kid, then recommend the Monthly Strikes Pack or a Busy-Week Check-In. No price menu first.",
  },
  {
    q: "What packs come after the First Look?",
    a: "Monthly Strikes Pack is the main plan. Busy-Week Check-In is an add-on when the week is packed. We'll recommend after we meet.",
  },
  {
    q: "Do you teach arm care with pitching?",
    a: "Yes. Warm-up and cool-down are part of every lesson.",
  },
];

export const trainingOptions = [
  {
    label: "First Look",
    note: "Meet once. Talk plain English. Then we recommend Monthly or Check-In.",
    icon: "/assets/icons/icon-plan-checklist.png",
  },
  {
    label: "Monthly Strikes Pack",
    note: "The main plan after the First Look. Regular work and a clear next practice.",
    icon: "/assets/icons/icon-strikes.png",
  },
  {
    label: "Busy-Week Check-In",
    note: "An add-on when the week is packed. A short look, then back to the plan.",
    icon: "/assets/icons/icon-free-guide-v2.png",
  },
];

export const guyChips = [
  "Ages 8–16",
  "Parents",
  "Other coaches",
  "Travel teams",
  "Schools",
];

export const workWithRoles = [
  "Parent",
  "Coach",
  "Travel team",
  "School",
] as const;

export const startSteps = [
  {
    label: "Book a First Look",
    note: "Age, goals, and schedule. Parent, coach, travel team, or school.",
  },
  {
    label: "We'll respond within 24 business hours",
    note: "We'll use the number you left.",
  },
  {
    label: "We meet once",
    note: "Plain English. Then a pack that fits — not a giant menu first.",
  },
  {
    label: "Monthly or Check-In",
    note: "Monthly Strikes Pack is the main plan. Busy-Week Check-In is the add-on.",
  },
];

export const sessionBeats = [
  {
    label: "Warmup",
    note: "Arm care first. The same routine they can use at practice.",
  },
  {
    label: "A few cues",
    note: "One or two cues they can keep.",
  },
  {
    label: "Then a pack",
    note: "Monthly Strikes Pack, or a Busy-Week Check-In if the week is packed.",
  },
];
