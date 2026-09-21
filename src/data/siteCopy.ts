/** Shared Pitching101 facts — keep answers honest. No invented prices or street address. */

export const SITE_URL = "https://pitching101.com";
export const PHONE_DISPLAY = "845-768-2211";
export const PHONE_TEL = "8457682211";
export const EMAIL = "nickdeisng@gmail.com";
export const TRUSTPILOT_URL = "https://www.trustpilot.com/review/pitching101.com";
export const INSTAGRAM_HANDLE = "pitching101_nickdeising";
export const INSTAGRAM_URL = `https://www.instagram.com/${INSTAGRAM_HANDLE}/`;

export const business = {
  name: "Pitching101",
  coach: "Coach Nick",
  area: "Naples, FL",
  ages: "8–14",
  phoneDisplay: PHONE_DISPLAY,
  phoneTel: PHONE_TEL,
  email: EMAIL,
  description:
    "Pitching101 is Coach Nick's youth pitching lessons in Naples, FL for kids ages 8-14. He works with parents, other coaches, travel teams, and schools.",
};

export type FaqItem = { q: string; a: string };

export const faqs: FaqItem[] = [
  {
    q: "What are Pitching101 youth pitching lessons?",
    a: "Coach Nick. Kids 8–14 in Naples, FL. Clear cues, arm care, and a plan you can use Tuesday.",
  },
  {
    q: "What ages do you coach?",
    a: "8–14. That's when simple cues actually stick.",
  },
  {
    q: "Who do you work with?",
    a: "Kids 8–14. Sometimes a parent. Sometimes another coach, a travel team, or a school. Same work.",
  },
  {
    q: "Where are pitching lessons in Naples, FL?",
    a: "Naples and SWFL. No walk-up address — text 845-768-2211 and I'll tell you where to meet.",
  },
  {
    q: "Do you only do in-person lessons?",
    a: "Nope. In person, at home, or both. Pick what fits the week.",
  },
  {
    q: "How do I get started?",
    a: "Text or call 845-768-2211. One conversation.",
  },
  {
    q: "Do you teach arm care with pitching?",
    a: "Yes. Warm-up and cool-down come with the work.",
  },
];

export const trainingOptions = [
  {
    label: "In person",
    note: "Around Naples. I'll say where.",
    icon: "/assets/icons/icon-strikes.png",
  },
  {
    label: "At home",
    note: "A plan for between practices.",
    icon: "/assets/icons/icon-free-guide-v2.png",
  },
  {
    label: "A mix",
    note: "Home work plus live check-ins.",
    icon: "/assets/icons/icon-plan-checklist.png",
  },
];

export const guyChips = [
  "Ages 8–14",
  "Parents",
  "Other coaches",
  "Travel teams",
  "Schools",
];

export const workWith = [
  { label: "Parents", note: "A parent or guardian texts. We pick a field." },
  { label: "Other coaches", note: "I can work next to your plan." },
  { label: "Travel teams", note: "A coach or team mom. Same ages." },
  { label: "Schools", note: "Kids 8–14. I'll say where." },
];
