import { EMAIL, ENROLL_LABEL } from "@/data/siteCopy";

export type LeadMagnetLink = {
  href: string;
  label: string;
};

export type LeadMagnetSection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
  numbered?: string[];
  tone?: "green" | "red";
  links?: LeadMagnetLink[];
};

/**
 * Standard for every free lead magnet on /guides.
 * Add one object here → card on the shelf + /guides/{slug}/ page.
 */
export type LeadMagnetStep = {
  label: string;
  note: string;
  /** Optional clip under public/, e.g. /videos/band/....mp4 */
  video?: string;
};

export type LeadMagnetRoutine = {
  heading: string;
  note?: string;
  steps: LeadMagnetStep[];
};

export type LeadMagnet = {
  slug: string;
  title: string;
  kicker: string;
  note: string;
  topic: string;
  icon: string;
  /** Optional 3:4 baseball-card thumbnail. Falls back to the icon in a 3:4 well. */
  art?: string;
  artAlt?: string;
  emailSubject: string;
  cta: string;
  /** Internal path (e.g. /contact/). Defaults to a mailto using emailSubject. */
  ctaHref?: string;
  metaTitle?: string;
  metaDescription: string;
  /** Path under public/, e.g. /assets/... */
  ogImage?: string;
  /** Long-form body for parent guides. Short magnets omit this. */
  sections?: LeadMagnetSection[];
  /** Numbered checklist for short magnets. */
  steps?: LeadMagnetStep[];
  /** Intro clip on the page, e.g. a welcome. */
  introVideo?: string;
  /** Named checklists with clips, like the band routine. */
  routines?: LeadMagnetRoutine[];
  /** Hide routine clips until they sign in (same login as the client portal). */
  videoGate?: boolean;
};

export const leadMagnets: LeadMagnet[] = [
  {
    slug: "how-to-choose-pitching-lessons-naples-fl",
    title: "How to choose pitching lessons in Naples, FL",
    metaTitle: "How to Choose Pitching Lessons in Naples, FL",
    metaDescription:
      "A short parent checklist for picking youth pitching lessons in Naples, FL — what to ask, green flags, red flags, and when pitching-focused coaching fits.",
    kicker: "Free guide",
    note: "A short parent checklist so you can pick a coach without guessing.",
    topic: "Choosing a coach",
    icon: "/assets/icons/icon-free-guide-v2.png",
    art: "/assets/thumbs/choose-coach-3x4.png",
    artAlt: "Green flags and red flags for choosing youth pitching lessons",
    ogImage: "/assets/og-green-red-flags.png",
    emailSubject: "How to Choose Pitching Lessons in Naples FL",
    cta: ENROLL_LABEL,
    ctaHref: "/contact/",
    sections: [
      {
        heading: 'What "good" looks like for ages 8–16',
        paragraphs: [
          "You'll know if a lesson's helping. For this age, good looks simple.",
        ],
        bullets: [
          "Clear cues your player can remember at practice",
          "Arm care in the session (warm-up + cool-down)",
          "A plan you can explain at dinner in one sentence",
          "Fits Naples / travel-ball weeks, not just perfect Saturdays",
        ],
      },
      {
        heading: "Five questions to ask any coach",
        paragraphs: [
          "If they can answer without dancing around it, you're in the right place. If it gets foggy, keep looking.",
        ],
        numbered: [
          "What ages do you coach best?",
          "What happens in the first lesson?",
          "How do you handle arm care?",
          "How will I know what to practice this week?",
          "What if we can't make it in person one week?",
        ],
      },
      {
        heading: "Green flags",
        tone: "green",
        bullets: [
          "You'll actually understand what they're saying",
          'More than "throw harder" — command, mechanics, recovery',
          "Happy to use the contact form with a clear next step",
          "Gets Southwest Florida schedules and heat",
        ],
      },
      {
        heading: "Red flags",
        tone: "red",
        bullets: [
          "Big package pressure before an evaluation",
          "No warm-up talk",
          "Only velocity talk for a young arm",
          "You leave more confused than you arrived",
        ],
      },
      {
        heading: "Pitching-only vs a full facility",
        paragraphs: [
          "Full baseball and softball facilities are great when your athlete needs everything under one roof.",
          "Pitching-focused lessons often fit when the main gap is the mound — strikes, mechanics, confidence — and you want shorter, clearer sessions.",
          "Match the offer to the problem.",
        ],
      },
      {
        heading: "Easy next step",
        paragraphs: [
          "Share age, goals, and schedule on the short form. If a week is too busy to meet in person, video check-ins are an option.",
        ],
        links: [
          { href: "/contact/", label: ENROLL_LABEL },
          { href: "/naples-fl-pitching-lessons/", label: "Naples pitching lessons" },
          { href: "/guides/", label: "Free guides" },
          { href: "/about/", label: "About Coach Deising" },
        ],
      },
    ],
  },
  {
    slug: "arm-care-checklist",
    title: "Arm-care checklist",
    kicker: "Free guide",
    note: "This is the same band routine I run in lessons. Hit play on the welcome. Sign in to run the rest with me.",
    topic: "Arm care",
    icon: "/assets/icons/icon-arm-care-v2.png",
    ogImage: "/assets/icons/icon-arm-care-v2.png",
    metaDescription:
      "Coach Deising's band-routine videos for youth pitchers in Naples, FL. Watch the welcome, then sign in for the J-band and single-band checklist.",
    emailSubject: "Arm-Care Checklist Guide",
    cta: "Email the checklist",
    introVideo: "/videos/band/00-welcome.mp4",
    videoGate: true,
    steps: [
      {
        label: "Get warm first",
        note: "Don't throw until the body's moving. A little jog, jumping jacks, whatever gets blood going.",
      },
      {
        label: "Then the bands",
        note: "J-band if you've got them. Single band if that's what you've got. Watch, then do it.",
      },
      {
        label: "Then play catch",
        note: "Start close. Move back when it feels easy. Save the juice.",
      },
      {
        label: "Hurt means stop",
        note: "Tell a parent or coach. We don't throw through that.",
      },
    ],
    routines: [
      {
        heading: "J-band routine",
        note: "The longer tube. Same order I use.",
        steps: [
          { label: "Internal extension", video: "/videos/band/jband-01-internal-extension.mp4", note: "Easy. Don't yank it." },
          { label: "External extension", video: "/videos/band/jband-02-external-extension.mp4", note: "Other way. Same pace." },
          { label: "I's extension", video: "/videos/band/jband-03-is-extension.mp4", note: "Arms stay long." },
          { label: "T extension", video: "/videos/band/jband-04-t-extension.mp4", note: "Out to the sides." },
          { label: "90 internal rotations", video: "/videos/band/jband-05-90-internal-rotations.mp4", note: "Elbows at 90. Slow." },
          { label: "Y extension", video: "/videos/band/jband-06-y-extension.mp4", note: "Up and out." },
          { label: "I's away", video: "/videos/band/jband-07-is-away.mp4", note: "Now we're facing away from the anchor." },
          { label: "T's away", video: "/videos/band/jband-08-ts-away.mp4", note: "Same idea, T shape." },
          { label: "90's away", video: "/videos/band/jband-09-90s-away.mp4", note: "Elbows at 90, facing away." },
          { label: "Tricep extension", video: "/videos/band/jband-10-tricep-extension.mp4", note: "Finish the arm." },
        ],
      },
      {
        heading: "Single-band routine",
        note: "One band. If that's what you've got at home, this is the one.",
        steps: [
          { label: "Palms-down pull-aparts", video: "/videos/band/single-01-palms-down-pa.mp4", note: "Palms down. Squeeze the shoulder blades." },
          { label: "Palms-up pull-aparts", video: "/videos/band/single-02-palms-up-pa.mp4", note: "Flip the hands." },
          { label: "Diagonal pull-aparts", video: "/videos/band/single-03-diagonal-pa.mp4", note: "One high, one low." },
          { label: "Shoulder-blade pinch", video: "/videos/band/single-04-shoulder-blade-pinch.mp4", note: "Band behind the head. Pinch." },
          { label: "Around the world", video: "/videos/band/single-05-around-the-world.mp4", note: "Big slow circle." },
          { label: "Bicep curls", video: "/videos/band/single-06-bicep-curls.mp4", note: "Don't cheat the top." },
          { label: "Tricep extension", video: "/videos/band/single-07-tricep-extension.mp4", note: "Lock it out easy." },
          { label: "Shoulder press", video: "/videos/band/single-08-shoulder-press.mp4", note: "Press it up. That's the last one." },
        ],
      },
    ],
  },
  {
    slug: "band-routine-checklist",
    title: "Band routine checklist",
    metaTitle: "Band Routine Checklist for Young Pitchers",
    metaDescription:
      "Parent-friendly: band warm-up checklist to use before throwing — J-Bands and singular-band moves for youth pitchers in Naples, FL / SWFL pitching lessons.",
    kicker: "Free guide",
    note: "J-Bands + band warm-up before you throw — same checklist we use in lessons.",
    topic: "Arm care",
    icon: "/assets/icons/icon-arm-care-v2.png",
    ogImage: "/assets/icons/icon-arm-care-v2.png",
    emailSubject: "Band Routine Checklist",
    cta: ENROLL_LABEL,
    ctaHref: "/contact/",
    sections: [
      {
        heading: "Why we do this before we throw",
        paragraphs: [
          "This band routine warms up the arm, wakes up the small muscles that help control the shoulder, and keeps the shoulder stable and mobile so the arm feels good during the throwing program.",
          "A light burn is what you want. If 10 reps feel too hard, move closer to the band. If they don't feel anything, step farther away.",
        ],
      },
      {
        heading: "Printable checklist",
        paragraphs: [
          "Want the same sheet we use in lessons? Download the printable checklist and keep it in the bag.",
        ],
        links: [
          {
            href: "/guides/band-routine-checklist.pdf",
            label: "Download the printable checklist",
          },
        ],
      },
      {
        heading: "J-Bands (10–15 reps each)",
        paragraphs: [
          "If you've got J-Bands, run this list. Ten to fifteen quality reps of each move.",
        ],
        bullets: [
          "External/internal shoulder extensions",
          "Wall facing I's extension",
          "Wall facing T's extension",
          "90's internal rotation",
          "Wall facing Y extensions",
          "I's extension Away",
          "T's extension Away",
          "90's external rotation",
          "Tricep Extension Away",
        ],
      },
      {
        heading: "Singular band (10–15 reps each)",
        paragraphs: [
          "Same idea with a regular band. Ten to fifteen quality reps of each.",
        ],
        bullets: [
          "Palms up pull apart",
          "Palms down pull apart",
          "Diagonal pull apart",
          "Behind the head shoulder blade pinch",
          "Around the worlds",
          "Bicep curls",
          "Tricep extension",
          "Shoulder press",
        ],
      },
      {
        heading: "Before you throw",
        paragraphs: [
          "One set of each movement, 10–15 quality reps, before you throw. If it hurts, stop. Tell a parent or coach. We don't throw through that.",
        ],
      },
      {
        heading: "Easy next step",
        paragraphs: [
          "Share age, goals, and schedule on the short form. We'll get this routine into lessons if that's what they need.",
        ],
        links: [
          { href: "/contact/", label: ENROLL_LABEL },
          { href: "/guides/arm-care-checklist/", label: "Arm-care checklist" },
          { href: "/guides/pre-catch-warmup/", label: "Pre-catch warmup" },
          { href: "/guides/lesson-curriculum/", label: "15-lesson curriculum" },
          { href: "/guides/", label: "Free guides" },
        ],
      },
    ],
  },
  {
    slug: "strike-tips",
    title: "Strike tips",
    kicker: "Free guide",
    note: "Simple cues so they can hunt more strikes.",
    topic: "Strikes",
    icon: "/assets/icons/icon-strikes.png",
    art: "/assets/thumbs/strike-zone-3x4.png",
    artAlt: "Nine-box strike zone with zone 5, the middle, highlighted",
    ogImage: "/assets/pixel-strike-zone.png",
    metaDescription:
      "Simple strike cues from Coach Deising's Naples pitching lessons. Help your 8–16 year old throw more strikes with a clear plan parents can use at practice.",
    emailSubject: "Strike Percent Tips Guide",
    cta: "Email the tips",
    steps: [
      {
        label: "Hunt the middle",
        note: "Your best pitch is a strike. Get zone 5 — the middle of that nine-box — before you get cute.",
      },
      {
        label: "One cue",
        note: "Don't stack five thoughts. One thing you can actually remember on the mound.",
      },
      {
        label: "Finish to the plate",
        note: "Get out over the front side. The ball tends to follow you.",
      },
      {
        label: "If you're spraying",
        note: "Slow it down. Easy catch, then you earn the juice. Strikes first.",
      },
    ],
  },
  {
    slug: "pre-catch-warmup",
    title: "Pre-catch warmup",
    kicker: "Free guide",
    note: "A short routine so they're ready before catch.",
    topic: "Warmup",
    icon: "/assets/icons/icon-plan-checklist.png",
    ogImage: "/assets/icons/icon-plan-checklist.png",
    metaDescription:
      "A short pre-catch warmup so your pitcher starts ready. The same routine Coach Deising uses in youth pitching lessons in Naples, FL for players ages 8–16.",
    emailSubject: "Pre-Catch Warmup Guide",
    cta: "Email the warmup",
    steps: [
      {
        label: "Body first",
        note: "Legs and trunk before the arm. You're not starting catch from zero.",
      },
      {
        label: "Then the arm",
        note: "Easy circles, both ways. Same arm care as the checklist.",
      },
      {
        label: "Short toss",
        note: "First ones are easy strikes to your partner. Close. Loose.",
      },
      {
        label: "Then stretch it out",
        note: "Move back when it feels easy. That's when catch can get competitive.",
      },
    ],
  },
  {
    slug: "lesson-curriculum",
    title: "15-lesson curriculum",
    metaTitle: "15-Lesson Pitching Curriculum for Ages 8–16",
    metaDescription:
      "Coach Deising's 15-lesson pitching sequence for players 8–16 in Naples, FL: everyday warmup, then drills and bullpens in order.",
    kicker: "Free guide",
    note: "The order I like. We don't always run it straight through — we go by the player.",
    topic: "Lessons",
    icon: "/assets/icons/icon-plan-checklist.png",
    ogImage: "/assets/icons/icon-plan-checklist.png",
    emailSubject: "15-Lesson Pitching Curriculum",
    cta: ENROLL_LABEL,
    ctaHref: "/contact/",
    steps: [
      {
        label: "Everydays first",
        note: "Stretch, bands, activation, heart rate, catch, mound drill of the day, then close. Full checklist is on the stretching and recovery page.",
      },
      {
        label: "Then the lesson of the day",
        note: "One main thing. Teach it, then put it into the throw.",
      },
      {
        label: "Bullpens are checkpoints",
        note: "Lessons 4, 8, 12, and 15. That's when we take the work onto the mound.",
      },
    ],
    routines: [
      {
        heading: "Lesson 1 · routine, balance, timing, stability",
        steps: [
          {
            label: "Catch play",
            note: "Talk about replicating our mechanics.",
          },
          {
            label: "Mound drill of the day",
            note: "1–4 steps. Mix up the order.",
          },
          { label: "Recovery", note: "Close it out. Purpose + arm care." },
        ],
      },
      {
        heading: "Lesson 2 · landing, repeatability, direction",
        steps: [
          {
            label: "Quick review",
            note: "1–4 on catch play.",
          },
          {
            label: "Landing cone drill and direction",
            note: "Start without throwing. Lead into partner catch. Direction to the plate. Repeat the landing area and stride.",
          },
        ],
      },
      {
        heading: "Lesson 3 · timing, upper-half awareness, sequencing hips and arms",
        note: "May need two lessons to finish.",
        steps: [
          { label: "Flip-up drill", note: "Feel the upper half." },
          { label: "Flip-up with hips", note: "Now add the hips." },
        ],
      },
      {
        heading: "Lesson 4 · bullpen, mechanics into the game, mindset",
        steps: [{ label: "Bullpen", note: "30 pitches." }],
      },
      {
        heading: "Lesson 5 · arm extension, lower-body drive, body awareness",
        steps: [{ label: "Ball tee up", note: "Extension and drive." }],
      },
      {
        heading: "Lesson 6 · balance, stability, timing, leg lift",
        steps: [{ label: "Leg-lift toe taps n' go", note: "Lift, tap, go." }],
      },
      {
        heading: "Lesson 7 · balance, timing, stability, body control",
        steps: [{ label: "Yu Darvish drill", note: "Stay in control." }],
      },
      {
        heading: "Lesson 8 · bullpen, mechanics into the game, mindset",
        steps: [{ label: "Bullpen", note: "30–45 pitches." }],
      },
      {
        heading: "Lesson 9 · timing, rhythm, flow",
        steps: [
          {
            label: "Toss to the pitcher, catch and finish",
            note: "Keep it moving.",
          },
        ],
      },
      {
        heading: "Lesson 10 · rhythm, flow, staying loose / whippy",
        steps: [
          {
            label: "1–4 timing",
            note: "Put lessons 1–4 into the throw.",
          },
        ],
      },
      {
        heading: "Lesson 11 · leg-drive repeatability, using the back hip",
        steps: [
          { label: "Timing drills", note: "Keep the timing work in." },
          {
            label: "Slide feet into 90, land and glove point",
            note: "Back hip. Land. Glove.",
          },
        ],
      },
      {
        heading: "Lesson 12 · bullpen, mechanics into the game, mindset",
        steps: [{ label: "Bullpen", note: "45–60 pitches." }],
      },
      {
        heading: "Lesson 13 · four points of contact, visualization, repeatability",
        steps: [
          { label: "Landing-position drill", note: "Hold the shape." },
          {
            label: "Four points",
            note: "Foot pointed, glove pointed, weight in back, arm up.",
          },
        ],
      },
      {
        heading: "Lesson 14 · visualization, lower-half sequencing",
        steps: [
          { label: "Hands in front drill", note: "See it in front." },
          { label: "Shuffle hands in front", note: "Same idea, add the shuffle." },
          {
            label: "Leg lift / pitch, hands in front",
            note: "Now into the pitch.",
          },
        ],
      },
      {
        heading: "Lesson 15 · bullpen, mechanics into the game, mindset",
        steps: [{ label: "Bullpen", note: "60+ pitches." }],
      },
    ],
    sections: [
      {
        heading: "Easy next step",
        paragraphs: [
          "Want this sequence for your player? Share age, goals, and schedule on the short form. The everyday stretch and throw list lives on the stretching and recovery page.",
        ],
        links: [
          { href: "/contact/", label: ENROLL_LABEL },
          { href: "/guides/stretch-recovery-warmup/", label: "Stretching and recovery" },
          { href: "/guides/arm-care-checklist/", label: "Arm-care checklist" },
          { href: "/guides/pre-catch-warmup/", label: "Pre-catch warmup" },
          { href: "/guides/", label: "Free guides" },
        ],
      },
    ],
  },
];

export function getLeadMagnet(slug: string) {
  return leadMagnets.find((magnet) => magnet.slug === slug);
}

export function leadMagnetMailto(magnet: LeadMagnet) {
  return `mailto:${EMAIL}?subject=${encodeURIComponent(magnet.emailSubject)}`;
}

export function leadMagnetCtaHref(magnet: LeadMagnet) {
  return magnet.ctaHref ?? leadMagnetMailto(magnet);
}
