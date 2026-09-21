import { EMAIL } from "@/data/siteCopy";

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
};

export type LeadMagnet = {
  slug: string;
  title: string;
  kicker: string;
  note: string;
  topic: string;
  icon: string;
  /** Optional full-bleed card art (nine-box, etc). Falls back to icon. */
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
};

export const leadMagnets: LeadMagnet[] = [
  {
    slug: "how-to-choose-pitching-lessons-naples-fl",
    title: "How to choose pitching lessons in Naples, FL",
    metaTitle: "How to Choose Pitching Lessons in Naples, FL",
    metaDescription:
      "A short parent checklist for picking youth pitching lessons in Naples, FL — what to ask, green flags, red flags, and when pitching-focused coaching fits.",
    kicker: "Free guide",
    note: "A short parent checklist so you can pick a coach without the jargon — or the guesswork.",
    topic: "Choosing a coach",
    icon: "/assets/icons/icon-free-guide-v2.png",
    art: "/assets/og-green-red-flags.png",
    artAlt: "Green flags and red flags for choosing youth pitching lessons",
    ogImage: "/assets/og-green-red-flags.png",
    emailSubject: "How to Choose Pitching Lessons in Naples FL",
    cta: "Book a First Look",
    ctaHref: "/contact/",
    sections: [
      {
        heading: 'What "good" looks like for ages 8–16',
        paragraphs: [
          "You do not need a pitching dictionary to know if a lesson is helping. For this age, good looks simple.",
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
          "If the answers are plain, you are in the right place. If they get foggy, keep looking.",
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
          "Talks like a human, not a textbook",
          'More than "throw harder" — command, mechanics, recovery',
          "Happy to use the contact form with a clear next step",
          "Gets Southwest Florida schedules and heat",
        ],
      },
      {
        heading: "Red flags",
        tone: "red",
        bullets: [
          "Big package pressure before a first look",
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
          { href: "/contact/", label: "Book a First Look" },
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
    note: "The same warm-up and cool-down I run in lessons.",
    topic: "Arm care",
    icon: "/assets/icons/icon-arm-care-v2.png",
    ogImage: "/assets/icons/icon-arm-care-v2.png",
    metaDescription:
      "The same warm-up and cool-down Coach Deising teaches in Naples pitching lessons. A simple arm-care checklist parents can use before and after throwing.",
    emailSubject: "Arm-Care Checklist Guide",
    cta: "Email the checklist",
    steps: [
      {
        label: "Get warm first",
        note: "Don't throw until the body's moving. A little jog, jumping jacks — whatever gets blood going.",
      },
      {
        label: "Arms both ways",
        note: "Easy circles forward and back. Slow. You're not showing off.",
      },
      {
        label: "Then play catch",
        note: "Start close. Move back when it feels easy. Save the juice.",
      },
      {
        label: "Cool down after",
        note: "Don't bag it and sit. Light stretch, same arm care you started with.",
      },
      {
        label: "Hurt means stop",
        note: "Tell a parent or coach. We don't throw through that.",
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
    art: "/assets/pixel-strike-zone.png",
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
