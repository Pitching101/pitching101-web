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
export const RESPONSE_PROMISE = "We'll respond within 24 business hours.";
export const META_DESCRIPTION =
  "I'm Coach Deising. Youth pitching lessons in Naples, FL for kids 8-16 — parents, travel teams, other coaches, and schools.";
export const OG_TITLE = "Youth pitching lessons in Naples, FL | Pitching101";
export const OG_DESCRIPTION =
  "I'm Coach Deising. I help kids 8-16 throw more strikes in Naples, FL. Parents, travel teams, other coaches, and schools.";
export const OG_IMAGE = "/og/home.png";
export const OG_IMAGE_ALT = "Pitching101 — youth pitching lessons in Naples, FL";
export const HERO_LINE =
  "Let's get 'em throwing strikes — and taking care of that arm.";
export const ABOUT_INTRO =
  "I'm Coach Deising. I work with kids 8–16 here in Naples, and I'm the JV head coach at Gulfshore High School.";
export const ABOUT_MORE =
  "Parents, travel teams, other coaches, schools — if you're in a kid's corner, come on. Let's get them throwing strikes and taking care of that arm.";
export const HOW_WE_TRAIN_LINE =
  "In person, at home, or both. We'll figure out what fits.";
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
    a: "Around Naples and Southwest Florida. There's no walk-up shop — send the short form and I'll tell you where we're meeting.",
  },
  {
    q: "Do you only do in-person lessons?",
    a: "Nope. We can do it in person, at home, or both. Whatever fits the week.",
  },
  {
    q: "How do I get started?",
    a: "Send the short form. We'll get back within 24 business hours.",
  },
  {
    q: "Do you teach arm care with pitching?",
    a: "Yes. Warm-up and cool-down are part of every lesson. I don't skip that stuff.",
  },
];

export const trainingOptions = [
  {
    label: "In person",
    note: "We'll pick a field around Naples.",
    icon: "/assets/icons/icon-strikes.png",
  },
  {
    label: "At home",
    note: "Work they can actually do between practices.",
    icon: "/assets/icons/icon-free-guide-v2.png",
  },
  {
    label: "A mix",
    note: "Homework plus live check-ins, so they're not guessing.",
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
    note: "Your kid's age (8–16), who you are, and how you want to train.",
  },
  {
    label: "We'll respond within 24 business hours",
    note: "We'll hit the number you left.",
  },
  {
    label: "First session",
    note: "Warm-up, a couple cues, and something to try at the next practice.",
  },
  {
    label: "Keep the plan",
    note: "In person, at home, or both — whatever fits the week.",
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
    label: "Something to try",
    note: "They leave with work for the next practice, not a speech.",
  },
];
