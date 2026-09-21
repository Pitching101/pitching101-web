/** Shared Pitching101 facts — keep answers honest. No invented prices or street address. */

export const SITE_URL = "https://pitching101.com";
export const PHONE_DISPLAY = "845-768-2211";
export const PHONE_TEL = "8457682211";
export const EMAIL = "nickdeisng@gmail.com";
export const TRUSTPILOT_URL = "https://www.trustpilot.com/review/pitching101.com";
export const GOOGLE_PLACE_ID = "ChIJWyzPmvrYw4ARCv_THm3I2kQ";
export const GOOGLE_REVIEW_URL = "https://g.page/r/CQr_0x5tyNpEEAI/review";
export const GOOGLE_MAPS_URL =
  `https://www.google.com/maps/place/?q=place_id:${GOOGLE_PLACE_ID}`;
export const INSTAGRAM_HANDLE = "pitching101_nickdeising";
export const INSTAGRAM_URL = `https://www.instagram.com/${INSTAGRAM_HANDLE}/`;
export const RESPONSE_PROMISE = "We'll respond within 24 business hours.";
export const META_DESCRIPTION =
  "Pitching101 is Coach Deising's youth pitching lessons in Naples, FL for kids ages 8-16. Parents, other coaches, travel teams, and schools. Text 845-768-2211.";

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
    a: "Naples and Southwest Florida. There is no walk-up address — text 845-768-2211 and we will share the meeting location.",
  },
  {
    q: "Do you only do in-person lessons?",
    a: "No. Lessons can be in person, at home, or both.",
  },
  {
    q: "How do I get started?",
    a: "Send the short form. We'll respond within 24 business hours. Or text 845-768-2211.",
  },
  {
    q: "Do you teach arm care with pitching?",
    a: "Yes. Warm-up and cool-down are part of every lesson.",
  },
];

export const trainingOptions = [
  {
    label: "In person",
    note: "Lessons around Naples. We will confirm the field.",
    icon: "/assets/icons/icon-strikes.png",
  },
  {
    label: "At home",
    note: "A plan for between practices.",
    icon: "/assets/icons/icon-free-guide-v2.png",
  },
  {
    label: "A mix",
    note: "At-home work plus live check-ins.",
    icon: "/assets/icons/icon-plan-checklist.png",
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
    label: "Tell us who",
    note: "Ages 8–16. Parent, coach, travel team, or school — and how you want to train.",
  },
  {
    label: "We'll respond within 24 business hours",
    note: "We'll use the number you left.",
  },
  {
    label: "First session",
    note: "Warm-up, a few cues, and work for the next practice.",
  },
  {
    label: "Keep the plan",
    note: "In person, at home, or both — choose what fits.",
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
    label: "Something to try",
    note: "They leave with work for the next practice.",
  },
];
