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
          "Clear cues your kid can remember at practice",
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
    note: "This is the same band routine I run in lessons. Hit play and do it with me.",
    topic: "Arm care",
    icon: "/assets/icons/icon-arm-care-v2.png",
    ogImage: "/assets/icons/icon-arm-care-v2.png",
    metaDescription:
      "Coach Deising's band-routine videos for youth pitchers in Naples, FL. Watch the J-band and single-band checklist right on the page.",
    emailSubject: "Arm-Care Checklist Guide",
    cta: "Email the checklist",
    introVideo: "/videos/band/00-welcome.mp4",
    steps: [
      {
        label: "Get warm first",
        note: "Don't throw until the body's moving. A little jog, jumping jacks — whatever gets blood going.",
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
      "A short pre-catch warmup so your pitcher starts ready. The same routine Coach Deising uses in youth pitching lessons in Naples, FL for kids ages 8–16.",
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
