/** Shared Pitching101 facts — keep answers honest. No invented prices or street address. */

export const SITE_URL = "https://pitching101.com";
export const PHONE_DISPLAY = "845-768-2211";
export const PHONE_TEL = "8457682211";
export const EMAIL = "nickdeisng@gmail.com";
export const TRUSTPILOT_URL = "https://www.trustpilot.com/review/pitching101.com";

export const business = {
  name: "Pitching101",
  coach: "Coach Nick",
  area: "Naples, FL",
  ages: "8–14",
  phoneDisplay: PHONE_DISPLAY,
  phoneTel: PHONE_TEL,
  email: EMAIL,
  description:
    "Pitching101 is Coach Nick's youth pitching lessons in Naples, FL for kids ages 8-14. Clear cues, healthy arm habits, and a plan parents can actually use.",
};

export type FaqItem = { q: string; a: string };

export const faqs: FaqItem[] = [
  {
    q: "What are Pitching101 youth pitching lessons?",
    a: "Pitching101 is Coach Nick's pitching lessons for kids ages 8-14 in Naples, FL. You get clear cues, healthy arm habits, and a plan you can use between practices.",
  },
  {
    q: "What ages do you coach?",
    a: "I work with young pitchers ages 8-14. That's the window where simple cues and good habits actually stick.",
  },
  {
    q: "Where are pitching lessons in Naples, FL?",
    a: "I coach Naples and Southwest Florida families. There's no walk-up street address — text or call 845-768-2211 first and I'll tell you where to meet.",
  },
  {
    q: "Do you only do in-person lessons?",
    a: "Nope. Throw with me in person, train at home with a guide, or mix both. Pick what fits your kid's week.",
  },
  {
    q: "How do I get my child started?",
    a: "Text or call 845-768-2211, or email nickdeisng@gmail.com. One conversation. I'll keep it simple.",
  },
  {
    q: "Do you teach arm care with pitching?",
    a: "Yes. Warm-up and cool-down come with the work. A healthy arm is the point, not an extra.",
  },
];

export const trainingOptions = [
  {
    label: "In person",
    note: "Throw with me around Naples, FL. I’ll tell you where once we talk.",
    icon: "/assets/icons/icon-strikes.png",
  },
  {
    label: "At home",
    note: "A simple plan and video so you can work between practices.",
    icon: "/assets/icons/icon-free-guide-v2.png",
  },
  {
    label: "A mix",
    note: "DIY most days, plus live check-ins when you want a second set of eyes.",
    icon: "/assets/icons/icon-plan-checklist.png",
  },
];

export const guyBullets = [
    "Kids ages 8-14 who are still learning the mound.",
  "More strikes, clean basics, and an arm that lasts the season.",
  "Cues you can repeat in the backyard — no fancy gear.",
  "Plain English for parents. Affordable. Zero coach-speak.",
];
