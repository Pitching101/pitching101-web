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
  coach: "Coach Deising",
  area: "Naples, FL",
  ages: "8–14",
  phoneDisplay: PHONE_DISPLAY,
  phoneTel: PHONE_TEL,
  email: EMAIL,
  description:
    "Pitching101 is Coach Deising's youth pitching lessons in Naples, FL for kids ages 8-14. He is the junior varsity head coach at Gulfshore High School, and works with parents, other coaches, travel teams, and schools.",
};

export type FaqItem = { q: string; a: string };

export const faqs: FaqItem[] = [
  {
    q: "What are Pitching101 youth pitching lessons?",
    a: "Coach Deising. Kids 8–14 in Naples, FL. He's the JV head coach at Gulfshore High School. Arm care and a plan you can use Tuesday.",
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
    a: "Fill in the short note. It texts my phone. I call or text you back. Or text 845-768-2211.",
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

export const workWithRoles = [
  "Parent",
  "Coach",
  "Travel team",
  "School",
] as const;

export const startSteps = [
  {
    label: "Tell me who",
    note: "Ages 8–14. Parent, coach, travel team, or school — and how you want to train.",
  },
  {
    label: "I call or text you back",
    note: "Your note hits my phone. I'll call the number you left.",
  },
  {
    label: "First session",
    note: "Warmup, a few cues, something to try next practice.",
  },
  {
    label: "Keep the plan",
    note: "In person, at home, or both — pick what fits.",
  },
];

export const sessionBeats = [
  {
    label: "Warmup",
    note: "Arm care first. Same stuff they can do next practice.",
  },
  {
    label: "A few cues",
    note: "One or two things they can actually keep.",
  },
  {
    label: "Something to try",
    note: "They leave with work for Tuesday.",
  },
];
