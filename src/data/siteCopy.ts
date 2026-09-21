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
export const INSTAGRAM_HANDLE = "pitchinglesson";
export const INSTAGRAM_URL = `https://www.instagram.com/${INSTAGRAM_HANDLE}/`;
/** Public @pitchinglesson count as of 2026-09-21. Update when it moves. */
export const INSTAGRAM_FOLLOWERS = 4102;
/** Four newest public reels from @pitchinglesson, snapshotted 2026-09-21. */
export const INSTAGRAM_POSTS = [
  {
    id: "DdgzLp6owYP",
    href: "https://www.instagram.com/p/DdgzLp6owYP/",
    src: "/assets/ig/ddgzlp6owyp.jpg",
    alt: "Instagram reel: keep the same arm slot so pitches start on one line",
  },
  {
    id: "DdPzrjEAerg",
    href: "https://www.instagram.com/p/DdPzrjEAerg/",
    src: "/assets/ig/ddpzrjeaerg.jpg",
    alt: "Instagram reel: don't get ahead early just to lose the hitter later",
  },
  {
    id: "DdCqjb5pq_s",
    href: "https://www.instagram.com/p/DdCqjb5pq_s/",
    src: "/assets/ig/ddcqjb5pq_s.jpg",
    alt: "Instagram reel: the little things at the plate can pay off",
  },
  {
    id: "Dc_TtnUo01K",
    href: "https://www.instagram.com/p/Dc_TtnUo01K/",
    src: "/assets/ig/dc_ttnuo01k.jpg",
    alt: "Instagram reel: pitching ahead versus pitching behind",
  },
] as const;
export const RESPONSE_PROMISE = "We'll respond within 24 business hours.";
export const ENROLL_LABEL = "Book an Evaluation";
export const ENROLL_HREF = "/contact/";
export const META_DESCRIPTION =
  "I'm Coach Deising. Youth pitching lessons in Naples, FL for kids 8-16. Book an evaluation, then a simple pack.";
export const OG_TITLE = "Youth pitching lessons in Naples, FL | Pitching101";
export const OG_DESCRIPTION =
  "I'm Coach Deising. I help kids 8-16 throw more strikes in Naples, FL. Book an evaluation, then a simple pack.";
export const OG_IMAGE = "/og/home.png";
export const OG_IMAGE_ALT = "Pitching101 — youth pitching lessons in Naples, FL";
export const HERO_LINE =
  "Let's get 'em throwing strikes and keep that arm healthy.";
export const ABOUT_INTRO =
  "I'm Coach Deising. I work with kids 8–16 here in Naples, and I'm the JV head coach at Gulfshore High School.";
export const ABOUT_MORE =
  "Parents, travel teams, other coaches, schools — if you're in a kid's corner, come on. Let's get them throwing strikes and taking care of that arm.";
export const HOW_WE_TRAIN_LINE =
  "Book an evaluation. Then a simple pack — no price menu first.";
export const FAQ_INTRO = "Stuff parents and coaches ask before we get going.";

export function shareImage(path = OG_IMAGE, alt = OG_IMAGE_ALT) {
  return [{ url: path, width: 1200, height: 630, alt }];
}

export type FaqItem = { q: string; a: string };

export const faqs: FaqItem[] = [
  {
    q: "What are Pitching101 youth pitching lessons?",
    a: "I work with kids 8–16 here in Naples. I'm the JV head coach at Gulfshore High School, and I help travel teams too. We do arm care, throw some strikes, and they leave with something they can try at the next practice.",
  },
  {
    q: "What ages do you coach?",
    a: "Eight through sixteen. That's my group.",
  },
  {
    q: "Who do you work with?",
    a: "Parents, other coaches, travel teams, schools — if you're helping a kid throw, I'm in.",
  },
  {
    q: "Do you coach travel teams?",
    a: "Yep. I'll jump in with a coach, a team contact, or next to the plan you've already got. Ages 8–16.",
  },
  {
    q: "Where are pitching lessons in Naples, FL?",
    a: "Around Naples and Southwest Florida. There's no walk-up shop — we'll share the meeting location after you book an evaluation.",
  },
  {
    q: "Do you only do in-person lessons?",
    a: "Nope. We can do it in person, at home, or both. Whatever fits the week.",
  },
  {
    q: "How do I book an evaluation?",
    a: "Send the short form — age, goals, and schedule. We'll get back within 24 business hours. We meet once, talk plain English, then recommend a pack.",
  },
  {
    q: "What is an evaluation?",
    a: "One visit. We talk in plain English about your kid, then recommend the Monthly Strikes Pack or a Busy-Week Check-In. No price menu first.",
  },
  {
    q: "What packs come after the evaluation?",
    a: "Monthly Strikes Pack is the main plan. Busy-Week Check-In is an add-on when the week is packed. We'll recommend after we meet.",
  },
  {
    q: "Do you teach arm care with pitching?",
    a: "Yes. Warm-up and cool-down are part of every lesson. I don't skip that stuff.",
  },
];

export const trainingOptions = [
  {
    label: "Evaluation",
    note: "Meet once. Talk plain English. Then we recommend Monthly or Check-In.",
    icon: "/assets/icons/icon-plan-checklist.png",
  },
  {
    label: "Monthly Strikes Pack",
    note: "The main plan after the evaluation. Regular work and a clear next practice.",
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
    label: ENROLL_LABEL,
    note: "Age, goals, and schedule. Parent, coach, travel team, or school.",
  },
  {
    label: "We'll respond within 24 business hours",
    note: "We'll hit the number you left.",
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
    note: "Arm care first. Same routine they can use at practice, not just with me.",
  },
  {
    label: "A few cues",
    note: "One or two things they can actually remember.",
  },
  {
    label: "Then a pack",
    note: "Monthly Strikes Pack, or a Busy-Week Check-In if the week is packed.",
  },
];
