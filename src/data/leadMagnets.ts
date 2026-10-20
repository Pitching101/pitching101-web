import { beginnerSeries } from "@/data/beginnerSeries";
import { EMAIL, ENROLL_LABEL, OG_IMAGE, OG_IMAGE_ALT } from "@/data/siteCopy";

export type LeadMagnetLink = {
  href: string;
  label: string;
};

export type GuideFaq = {
  q: string;
  a: string;
};

export type GuideHowToStep = {
  name: string;
  text: string;
  anchor: string;
};

export type GuideHowTo = {
  name: string;
  description: string;
  /** Canonical path, e.g. /guides/example/. */
  path: string;
  steps: GuideHowToStep[];
};

export type GuideBlock =
  | { kind: "p"; text: string }
  | { kind: "ul"; items: string[] }
  | { kind: "ol"; items: string[] }
  | { kind: "table"; label?: string; headers: string[]; rows: string[][] }
  | { kind: "faq"; items: GuideFaq[] };

export type LeadMagnetSection = {
  heading: string;
  /**
   * Stable anchor. When omitted, the heading is slugged.
   * Set this when a Reel or another guide links to a specific section.
   */
  id?: string;
  /** Earlier anchors that should keep working after a heading rename. */
  aliasIds?: string[];
  paragraphs?: string[];
  bullets?: string[];
  numbered?: string[];
  tone?: "green" | "red";
  links?: LeadMagnetLink[];
  /** Ordered body. When set, this is the section copy. */
  blocks?: GuideBlock[];
};

/** One step in a series hub. Path may include a hash. */
export type GuideSeriesItem = {
  name: string;
  path: string;
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
  /** Anchor for the on-page contents list. Set when the page is built. */
  id?: string;
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
  /** Share title. Falls back to the branded page title. */
  ogTitle?: string;
  ogDescription?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  /** Path under public/, e.g. /assets/... */
  ogImage?: string;
  ogImageAlt?: string;
  /** ISO date for Article JSON-LD. */
  datePublished?: string;
  /** ISO date for Article JSON-LD when a published guide is revised. */
  dateModified?: string;
  /** Opening paragraphs before the first section. */
  lede?: string[];
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
  /** Ordered series for CollectionPage + ItemList JSON-LD. Hub pages only. */
  series?: GuideSeriesItem[];
};

export const leadMagnets: LeadMagnet[] = [
  {
    slug: "how-to-choose-pitching-lessons-naples-fl",
    title: "How to choose pitching lessons in Naples, FL",
    metaTitle: "How to Choose Pitching Lessons for Your Kid | Naples FL",
    metaDescription:
      "How to choose pitching lessons for your kid in Naples, FL: 11 questions to ask any coach, green flags, red flags, and when pitching-only lessons fit best.",
    ogTitle: "How to Choose Pitching Lessons for Your Kid in Naples, FL",
    ogDescription:
      "How to choose pitching lessons for your kid in Naples, FL: 11 questions to ask any coach, green flags, red flags, and when pitching-only lessons fit best.",
    twitterTitle: "How to Choose Pitching Lessons for Your Kid in Naples, FL",
    twitterDescription:
      "How to choose pitching lessons for your kid in Naples, FL: 11 questions to ask any coach, green flags, red flags, and when pitching-only lessons fit best.",
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
    dateModified: "2026-10-20",
    lede: [
      "**Quick answer:** Choose a pitching coach who works with your child's age, can tell you what happens in the first lesson, and builds arm care (warm-up and cool-down) into every session. For ages 8–16, a good coach puts strikes and mechanics before speed and tells you what to practice between lessons. If a coach pushes a big package before you've even met, keep looking.",
    ],
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
        heading: "Questions to ask any pitching coach",
        id: "questions-to-ask-any-pitching-coach",
        aliasIds: ["five-questions-to-ask-any-coach"],
        blocks: [
          {
            kind: "p",
            text: "If they can answer without dancing around it, you're in the right place. If it gets foggy, keep looking.",
          },
          {
            kind: "ol",
            items: [
              "What ages do you coach best?",
              "What happens in the first lesson?",
              "How do you handle arm care?",
              "How will I know what to practice this week?",
              "What if we can't make it in person one week?",
              "How do you keep track of pitch counts and rest days around my child's team schedule?",
              "What should my child do, and not do, between lessons?",
              "How will we know it's working, and what should we expect to see first?",
              "Can we start with one evaluation before picking a package?",
              "Will you talk with me after each lesson about what you worked on?",
              "Do you focus on throwing strikes and mechanics, or mostly on throwing harder?",
            ],
          },
          {
            kind: "p",
            text: "Want to see how we'd answer these? Read how we plan the [week between lessons](/guides/how-often-should-young-pitchers-throw-between-lessons/), or start with our [Beginner Pitching Series](/guides/beginner-pitching-series/).",
          },
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
          "No clear answer when you ask about pitch counts or rest days",
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
          { href: "/guides/pre-throwing-routine/", label: "Pre-throwing routine" },
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
    slug: "pre-throwing-routine",
    title: "Pre-throwing routine",
    metaTitle: "Pre-Throwing Routine for Young Pitchers",
    metaDescription:
      "Coach Deising's 15–20 minute pre-throwing routine: stretch, bands, heart-rate work, then throw. The same plan used in youth pitching lessons in Naples, FL for players ages 8–16.",
    kicker: "Free guide",
    note: "The 15–20 minute plan I use before we throw. Stretch, bands, get the heart going — then keep the throwing simple and loose.",
    topic: "Warmup",
    icon: "/assets/icons/icon-plan-checklist.png",
    ogImage: "/assets/icons/icon-plan-checklist.png",
    emailSubject: "Pre-Throwing Routine Guide",
    cta: ENROLL_LABEL,
    ctaHref: "/contact/",
    routines: [
      {
        heading: "Pre-throwing · 15–20 min",
        note: "This is the body work. Don't skip the heart-rate piece — that's the most important one.",
        steps: [
          {
            label: "Static stretch",
            note: "5–10 minutes. Easy holds. Get loose before you do anything else.",
          },
          {
            label: "Band routine",
            note: "5 minutes. Same band list as the arm-care checklist.",
          },
          {
            label: "Dynamic — heart-rate elevation",
            note: "Most important. Sprint, skip, and jump variations until you're actually warm.",
          },
        ],
      },
      {
        heading: "Muscle activation · 7–10 min",
        steps: [
          { label: "Push-up with twist", note: "2×10 each." },
          { label: "Bear crawl forward + backward", note: "2×10." },
          { label: "Push-up opposite direction", note: "Same idea, other way." },
        ],
      },
      {
        heading: "Plyo routine · optional",
        note: "60–80% effort. You're trying to feel mechanics, rhythm, flow, timing — and nothing else.",
        steps: [
          {
            label: "Feel it, don't max it",
            note: "If you use a weighted med ball or water bag, this is where you slot it in.",
          },
          {
            label: "Save your bullets",
            note: "Don't spend the best stuff here. Save it for later.",
          },
        ],
      },
      {
        heading: "Throwing progression · majority of your time",
        note: "Keep it simple and loose. Don't try and do too much or think about too much.",
        steps: [
          {
            label: "Long toss with a changeup",
            note: "One thing I recommend is long tossing with a changeup to get a feel.",
          },
          {
            label: "90 feet, then walk it in",
            note: "Start working on your pitches at 90 feet and slowly bring it in to 60.",
          },
          {
            label: "About 80% until the mound",
            note: "All at about 80% effort until you get off a mound.",
          },
        ],
      },
      {
        heading: "Off the mound · 10 min",
        note: "15–25 pitches max, but go by your feel.",
        steps: [
          {
            label: "Sequences and locations",
            note: "Work on sequences, locations, envisioning situations.",
          },
          {
            label: "Talk to yourself like you mean it",
            note: "Speak with nothing but confidence and positive things to yourself.",
          },
          {
            label: "Breath control",
            note: "That's the reset between pitches.",
          },
        ],
      },
    ],
    sections: [
      {
        heading: "Easy next step",
        paragraphs: [
          "Want help running this in a lesson? Share age, goals, and schedule on the short form.",
        ],
        links: [
          { href: "/contact/", label: ENROLL_LABEL },
          { href: "/guides/arm-care-checklist/", label: "Arm-care checklist" },
          { href: "/guides/band-routine-checklist/", label: "Band routine checklist" },
          { href: "/guides/pre-catch-warmup/", label: "Pre-catch warmup" },
          { href: "/guides/", label: "Free guides" },
        ],
      },
    ],
  },
  {
    slug: "offseason-strength",
    title: "Offseason strength program",
    metaTitle: "Offseason Strength Program for Young Pitchers",
    metaDescription:
      "Coach Deising's offseason strength list for youth pitchers in Naples, FL: core lifts, explosive work, and the sets and reps he pulls from for players ages 8–16.",
    kicker: "Free guide",
    note: "The offseason strength list I pull from. We pick lifts for the player — you don't run every line in one session.",
    topic: "Strength",
    icon: "/assets/icons/icon-plan-checklist.png",
    ogImage: "/assets/icons/icon-plan-checklist.png",
    emailSubject: "Offseason Strength Program Guide",
    cta: ENROLL_LABEL,
    ctaHref: "/contact/",
    sections: [
      {
        heading: "How we use this",
        paragraphs: [
          "This is a menu, not a one-day workout. Core lifts build the big stuff. Explosive work is the fast-twitch piece. Then we pick from the lift list with the sets and reps I already like.",
          "If it hurts, stop. Tell a parent or coach.",
        ],
      },
      {
        heading: "Core lifts (large muscle)",
        bullets: [
          "Reverse lunge",
          "RDL",
          "Bird dog",
          "Split squat",
          "Inverted row",
        ],
      },
      {
        heading: "Explosive work",
        bullets: [
          "Trap bar deadlift (chains / bands)",
          "Split squat, broad, and skater jumps",
          "Med ball rotational throw",
          "Sled push sprints",
          "Banded push / pull and jumps",
        ],
      },
      {
        heading: "The lifts",
        paragraphs: [
          "Sets and reps the way I write them. RFESS is a rear-foot elevated split squat.",
        ],
        bullets: [
          "Speed trap deadlift — 4×5",
          "3-point row — 4×6",
          "RFESS — 4×5",
          "Bird dog — 4×6",
          "Side plank row — 3×10",
          "Eccentric banded straight-arm rotation — 3×10",
          "RDL — 4×8",
          "DB squat jumps — 4×4",
          "Swiss bench — 5×6",
          "Banded face pulls — 5×8",
          "Farmer's walk — 3×20 yds",
          "Down-dog toe touch — 3×10",
          "Landmine squat — 5×8",
          "Banded push-up — 4×10",
          "Inverted row — 4×6 (eccentric)",
          "DB split squat — 5×6",
          "Single-leg hip thrust — 4×6",
          "Straight-leg sit-ups — 3×10",
          "Med ball slams — 3×5",
          "Reverse lunge front — 5×5",
          "3-point row — 4×8",
          "DB RFESS — 3×10",
          "Bird dog — 4×10",
          "Starfish plank — 2×30s",
          "Skater jump — 2×5 each",
          "Isolated preacher curl — 4×8",
          "Banded tricep extension — 4×12",
          "Front box squat w/ chain — 4×3",
          "KB overhead press — 4×6",
          "Goblet lateral squat — 3×10",
          "Med ball rotational — 3×5",
          "Chest-supported row — 4×8",
          "Push-up w/ overload — 4×6",
          "RDL — 5×8",
          "KB isolated walk — 4×10 yds",
          "Split squat jump (pause at the bottom) — 3×6",
          "Starfish side plank — 3×20s",
          "Banded skater jumps — 4×3",
          "Turkish get-up — 3×5",
          "Bird dog — 3×6",
          "Hip-thrusted single-arm press — 4×8",
          "Bear crawl — 3×15 yds",
          "Sled push sprint — 3×15 yds",
          "Speed trap deadlift — 4×5",
          "Step-down squat jump — 4×4",
          "DB RFESS — 3×3",
          "Banded push-up jump — 3×10",
          "Banded face pulls — 4×10",
          "Single-arm banded press, split stance — 4×8",
          "Lateral squat — 3×5 each",
          "Skater jump — 3×3",
          "Wide-stance iso press — 4×10",
          "Inverted row — 5×8",
          "Broad jump — 3×2",
          "Burpee — 3×10",
        ],
      },
      {
        heading: "Easy next step",
        paragraphs: [
          "Want this built into a lesson plan for your player? Share age, goals, and schedule on the short form.",
        ],
        links: [
          { href: "/contact/", label: ENROLL_LABEL },
          { href: "/guides/arm-care-checklist/", label: "Arm-care checklist" },
          { href: "/guides/band-routine-checklist/", label: "Band routine checklist" },
          { href: "/guides/", label: "Free guides" },
        ],
      },
    ],
  },
  {
    slug: "stretch-recovery-warmup",
    title: "Stretching and recovery warmup",
    metaTitle: "Stretching and Recovery Warmup for Young Pitchers",
    metaDescription:
      "Coach Deising's everyday stretching, band, activation, throw, and recovery checklist for youth pitching lessons in Naples, FL. Players ages 8–16.",
    kicker: "Free guide",
    note: "The full everyday sheet. Stretch, bands, get the heart going, throw, then close it out.",
    topic: "Warmup",
    icon: "/assets/icons/icon-plan-checklist.png",
    ogImage: "/assets/icons/icon-plan-checklist.png",
    emailSubject: "Stretching and Recovery Warmup Guide",
    cta: ENROLL_LABEL,
    ctaHref: "/contact/",
    sections: [
      {
        heading: "Everydays",
        paragraphs: [
          "This is the shape of a lesson day. Same order most days.",
        ],
        numbered: [
          "Static stretching — 10–15 min",
          "Band routine, J-band + single strap — 5–10 min",
          "Shoulder activation — push-ups, side-lying external rotations, bear crawl, push-up with twist — 10 min",
          "Dynamic heart-rate elevation — sprint, jump, skip — 5 min",
          "Catch play — athletic, accuracy, mechanics",
          "Mound drill of the day — teach it, then put it into the throw",
          "Recovery and close — talk purpose + arm care — 5 min",
        ],
      },
      {
        heading: "Static stretching checklist",
        bullets: [
          "Neck CARS",
          "Arm circles",
          "Arm swings with hug",
          "Trunk twists with arm swings",
          "Deltoid stretch",
          "Tricep stretch",
          "Forearm pull back",
          "Side lunges / down the middle",
          "Butterflies",
          "One-leg toe touch",
          "Sexy ladies",
          "Hip switches",
          "Quad pull",
          "Knee hugs",
          "One-knee-down open-ups",
          "Hip bridges",
          "Cobra",
          "Lat inchworms",
        ],
      },
      {
        heading: "J-bands",
        paragraphs: [
          "Same idea as the band-routine checklist. Clips live on the arm-care page.",
        ],
        bullets: [
          "External / internal shoulder extensions",
          "Wall-facing reach backs",
          "Wall-facing shoulder pinch",
          "Wall-facing 90 external extension",
          "Wall-facing Y extensions",
          "Away, hands together low",
          "Away, hands clap",
          "Away, 90 internal extension",
          "Away, tricep extension",
        ],
        links: [
          { href: "/guides/arm-care-checklist/", label: "Arm-care checklist" },
          { href: "/guides/band-routine-checklist/", label: "Band routine checklist" },
        ],
      },
      {
        heading: "Singular band",
        bullets: [
          "Palms-up pull-apart",
          "Palms-down pull-apart",
          "Diagonal pull-apart",
          "Behind-the-head shoulder-blade pinch",
          "Around the worlds",
          "Bicep curls",
          "Tricep extension",
          "Shoulder press",
        ],
      },
      {
        heading: "Shoulder + core activation",
        bullets: [
          "Bear crawl",
          "Push-up overhead twist arm extension",
          "Supermans",
          "Inchworm",
          "Toe touches",
        ],
      },
      {
        heading: "Dynamic",
        bullets: [
          "Sprint variations",
          "Skip variations",
          "Explosive jump variations",
        ],
      },
      {
        heading: "Throwing warmup everydays",
        bullets: [
          "One knee down with trunk twists",
          "Standing tree",
          "Rocker",
          "Slope drill",
          "Back-leg drop n' drive",
          "Quarterback drop back",
          "Single-leg throwing",
          "Normal, but extend the toss",
          "Athletic catch on the way in",
        ],
      },
      {
        heading: "Long toss variation",
        bullets: ["Back-foot cross shuffle"],
      },
      {
        heading: "Med ball drills",
        bullets: [
          "One-knee-down shotput",
          "Med ball scoop toss",
          "Rocker shotput",
          "Rocker scoop toss",
          "Med ball slams",
          "Med ball slam side to side",
          "Shuffle scoop toss",
          "Shuffle shotput",
          "Keg toss",
        ],
      },
      {
        heading: "Recovery",
        bullets: [
          "Plyo ball drop n' catch",
          "Plyo tricep extension",
          "3-point 90 extension",
          "Band routine without extensions",
        ],
      },
      {
        heading: "Fun games to mix in",
        bullets: [
          "21",
          "9 hole",
          "Call your shot",
          "Throwing with a football",
          "Ground-ball footwork",
          "Ghost batters — game simulation",
          "Pickoffs",
          "Most IP (most strikes)",
        ],
      },
      {
        heading: "Easy next step",
        paragraphs: [
          "Want this run in a lesson? Share age, goals, and schedule on the short form.",
        ],
        links: [
          { href: "/contact/", label: ENROLL_LABEL },
          { href: "/guides/arm-care-checklist/", label: "Arm-care checklist" },
          { href: "/guides/band-routine-checklist/", label: "Band routine checklist" },
          { href: "/guides/pre-catch-warmup/", label: "Pre-catch warmup" },
          { href: "/guides/", label: "Free guides" },
        ],
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
  {
    slug: "long-toss-lessons",
    title: "Long toss lessons",
    metaTitle: "Long Toss Lessons for Young Pitchers",
    metaDescription:
      "Coach Deising's 15-day long toss focus for youth pitchers in Naples, FL. Same sequence as the lesson curriculum, run as long toss for players ages 8–16.",
    kicker: "Free guide",
    note: "Same 15-day focus as the curriculum. This one is the long-toss day.",
    topic: "Long toss",
    icon: "/assets/icons/icon-plan-checklist.png",
    ogImage: "/assets/icons/icon-plan-checklist.png",
    emailSubject: "Long Toss Lessons Guide",
    cta: ENROLL_LABEL,
    ctaHref: "/contact/",
    steps: [
      {
        label: "Same 15 focuses",
        note: "Routine and balance, then landing, then timing, then a bullpen. Keep going through 15.",
      },
      {
        label: "Run it as long toss",
        note: "The mound-day drills live on the 15-lesson curriculum. This page is the focus of the day when you're stretching it out.",
      },
      {
        label: "Bullpen days stay bullpen days",
        note: "4, 8, 12, and 15. Lesson 15 is a 60+ pitch bullpen.",
      },
    ],
    sections: [
      {
        heading: "The 15 long-toss days",
        numbered: [
          "Lesson 1 — routine, balance, timing, stability",
          "Lesson 2 — landing, repeatability, direction",
          "Lesson 3 — timing, upper-half awareness, sequencing hips and arms",
          "Lesson 4 — bullpen, mechanics into the game, mindset",
          "Lesson 5 — arm extension, lower-body drive, body awareness",
          "Lesson 6 — balance, stability, timing, leg lift",
          "Lesson 7 — balance, timing, stability, body control",
          "Lesson 8 — bullpen, mechanics into the game, mindset",
          "Lesson 9 — timing, rhythm, flow",
          "Lesson 10 — rhythm, flow, staying loose / whippy",
          "Lesson 11 — leg-drive repeatability, using the back hip",
          "Lesson 12 — bullpen, mechanics into the game, mindset",
          "Lesson 13 — four points of contact, visualization, repeatability",
          "Lesson 14 — visualization, lower-half sequencing",
          "Lesson 15 — bullpen, mechanics into the game, mindset — 60+ pitch bullpen",
        ],
      },
      {
        heading: "Easy next step",
        paragraphs: [
          "Want this run with your player? Share age, goals, and schedule on the short form.",
        ],
        links: [
          { href: "/contact/", label: ENROLL_LABEL },
          { href: "/guides/lesson-curriculum/", label: "15-lesson curriculum" },
          { href: "/guides/pre-throwing-routine/", label: "Pre-throwing routine" },
          { href: "/guides/pre-catch-warmup/", label: "Pre-catch warmup" },
          { href: "/guides/", label: "Free guides" },
        ],
      },
    ],
  },
  {
    slug: "fun-games",
    title: "Fun games to play",
    metaTitle: "Fun Pitching Games for Youth Lessons",
    metaDescription:
      "Command games Coach Deising mixes into youth pitching lessons in Naples, FL: around the world, 21, call your shot, knockout, and more for players ages 8–16.",
    kicker: "Free guide",
    note: "Games we mix in so command work feels like competing, not a lecture.",
    topic: "Games",
    icon: "/assets/icons/icon-strikes.png",
    ogImage: "/assets/icons/icon-strikes.png",
    emailSubject: "Fun Pitching Games Guide",
    cta: ENROLL_LABEL,
    ctaHref: "/contact/",
    sections: [
      {
        heading: "Quick mix-ins",
        paragraphs: ["These are the ones we throw in most."],
        bullets: [
          "Around the world",
          "21",
          "Call your shot",
          "Partner spot control — 5 in a row",
        ],
      },
      {
        heading: "Target knockout",
        paragraphs: [
          "Put 3–5 small targets on a net — cones, numbers, tape squares. Command, pressure, and competition.",
        ],
        bullets: [
          "Each player gets 5 pitches per round",
          "Hit a target = 1 point",
          "Hit the bonus small target = 3 points",
          "After 3 rounds, highest score wins",
        ],
      },
      {
        heading: "21 count",
        paragraphs: [
          "First pitcher to hit exactly 21 points wins. Go over and you drop back to 15. Strategy and precision under pressure.",
        ],
        bullets: [
          "Middle target = 3",
          "Corners = 5",
          "Miss entirely = –1",
        ],
      },
      {
        heading: "Freeze out",
        paragraphs: ["Every pitch feels like a real at-bat."],
        bullets: [
          "Each pitcher throws 1 ball",
          "Hit the zone and you freeze the next thrower — they skip a turn",
          "Frozen twice and you're out that round",
          "Last pitcher standing wins",
        ],
      },
      {
        heading: "Pitcher's poker",
        paragraphs: [
          "Assign each location a card value. High in is an ace. Low away is a king. Low in is a queen. Middle is a 10. You have to locate to all the quadrants.",
        ],
        bullets: [
          "Each pitch earns a card",
          "Build the best poker hand in 10 pitches",
        ],
      },
      {
        heading: "Battle boxes",
        paragraphs: [
          "Divide the strike zone into 6 labeled boxes. Game-speed execution with consequences.",
        ],
        bullets: [
          "Coach calls a battle box — low-away, whatever it is",
          "Each pitcher gets 2 pitches to hit it",
          "Hit it = win the battle, 1 point",
          "First to 5 wins",
        ],
      },
      {
        heading: "Around the world",
        paragraphs: [
          "Hit all 6 zones in order — up-in, up-middle, up-away, and on around. Smooths out command across the whole zone.",
        ],
        bullets: [
          "Each player gets 2 shots at each zone",
          "Miss both and you stay on that zone until your next turn",
          "First to finish all zones wins",
        ],
      },
      {
        heading: "Strike zone bowling",
        paragraphs: [
          "Put 10 cones in a bowling formation behind home plate or on a net. Accuracy plus a visual target. It shows up fast.",
        ],
        bullets: [
          "Each pitcher gets 2 frames, 5 pitches per frame",
          "Knock down (hit) as many cones as you can",
        ],
      },
      {
        heading: "Sudden death showdown",
        paragraphs: ["Pure pressure. Great last game."],
        bullets: [
          "Coach picks a spot",
          "Everyone throws 1 pitch",
          "Closest to the target wins the point",
          "New spot, go again",
          "First to 7 wins",
        ],
      },
      {
        heading: "Easy next step",
        paragraphs: [
          "Want these mixed into a lesson? Share age, goals, and schedule on the short form.",
        ],
        links: [
          { href: "/contact/", label: ENROLL_LABEL },
          { href: "/guides/strike-tips/", label: "Strike tips" },
          { href: "/guides/pre-catch-warmup/", label: "Pre-catch warmup" },
          { href: "/guides/", label: "Free guides" },
        ],
      },
    ],
  },
  {
    slug: "how-often-should-young-pitchers-throw-between-lessons",
    title: "How Often Should Young Pitchers Throw Between Lessons?",
    metaTitle: "How Often Should Kids Throw Between Pitching Lessons?",
    metaDescription:
      "A simple week of throwing for young pitchers between lessons: easy catch days, rest days, and pitch-count limits by age. A parent guide from Naples, FL.",
    ogTitle: "How Often Should Young Pitchers Throw Between Lessons?",
    ogDescription:
      "Easy catch, real rest, and pitch-count limits by age. A simple weekly plan for parents of pitchers ages 8–16.",
    twitterTitle: "How Often Should Young Pitchers Throw Between Lessons?",
    twitterDescription:
      "Easy catch, real rest, and pitch-count limits by age. A simple weekly plan for parents.",
    ogImage: OG_IMAGE,
    ogImageAlt: OG_IMAGE_ALT,
    datePublished: "2026-09-26",
    kicker: "Free guide",
    note: "A simple week of easy catch, rest days, and pitch-count limits by age.",
    topic: "Arm care",
    icon: "/assets/icons/icon-arm-care-v2.png",
    emailSubject: "How Often Should Young Pitchers Throw Between Lessons",
    cta: "Contact",
    ctaHref: "/contact/",
    lede: [
      "**Short answer:** Most healthy young pitchers do well with **light, easy catch three to four days a week** between lessons, **at least one or two full rest days**, and **only one or two days of real pitching effort**, following the pitch-count and rest rules for their age. Throwing and pitching are not the same thing. Easy catch keeps the arm in rhythm. Full-effort pitching is what needs rest after.",
      "Every week, parents ask us the same thing after a lesson: \"How much should they throw before we come back?\" Here's the simple plan we give families in Naples.",
    ],
    sections: [
      {
        heading: "Throwing is not the same as pitching",
        blocks: [
          {
            kind: "ul",
            items: [
              "**Easy catch:** relaxed throws to a partner, short to medium distance, no max effort. This is how the arm stays loose and the new movement from the lesson sticks.",
              "**Pitching:** full-effort throws off a mound or flat ground to a catcher. This is what wears the arm out, so it gets counted and followed by rest.",
            ],
          },
          {
            kind: "p",
            text: "If your child only remembers one thing: **practice the movement often, throw hard rarely.**",
          },
        ],
      },
      {
        heading: "A simple week between lessons",
        blocks: [
          {
            kind: "p",
            text: "This sample is for a healthy player ages 8–16 with one lesson a week and no games that week. Adjust it around games and team practice.",
          },
          {
            kind: "table",
            headers: ["Day", "What to do"],
            rows: [
              ["Lesson day", "Lesson. That counts as the pitching day."],
              ["Day 2", "Rest from throwing. Bands and stretching are fine."],
              ["Day 3", "Easy catch, 10–15 minutes, plus the warm-up from the lesson."],
              ["Day 4", "Easy catch plus 10–15 dry-run motions (no ball) of the lesson cue."],
              ["Day 5", "Rest."],
              [
                "Day 6",
                "Easy catch, or a short, light flat-ground session (well under the daily pitch limit).",
              ],
              ["Day 7", "Rest or easy catch only."],
            ],
          },
          {
            kind: "p",
            text: "**Game week?** The game becomes the pitching day. Drop the extra flat-ground session and follow the rest rules below.",
          },
        ],
      },
      {
        heading: "Pitch counts and rest days by age",
        blocks: [
          {
            kind: "p",
            text: "The most widely used youth guidelines come from MLB and USA Baseball's Pitch Smart program. The main idea: the more pitches thrown in a day, the more days of rest before pitching again.",
          },
          {
            kind: "table",
            label: "Daily pitch limits (games):",
            headers: ["Age", "Max pitches per day"],
            rows: [
              ["7–8", "50"],
              ["9–10", "75"],
              ["11–12", "85"],
              ["13–14", "95"],
              ["15–16", "95"],
            ],
          },
          {
            kind: "table",
            label: "Rest before pitching again (ages 14 and under):",
            headers: ["Pitches thrown", "Days of rest"],
            rows: [
              ["1–20", "0"],
              ["21–35", "1"],
              ["36–50", "2"],
              ["51–65", "3"],
              ["66 or more", "4"],
            ],
          },
          {
            kind: "p",
            text: "**Ages 15–16:** 1–30 pitches, 0 days. 31–45 pitches, 1 day. 46–60 pitches, 2 days. 61–75 pitches, 3 days. 76 or more, 4 days.",
          },
          {
            kind: "p",
            text: "A few more rules worth knowing:",
          },
          {
            kind: "ul",
            items: [
              "Don't pitch on back-to-back days in games.",
              "Don't pitch for more than one team in the same week without adding up the pitches.",
              "Don't catch and pitch in the same game. Catching is a lot of throws too.",
              "Take real time off each year. Pitch Smart suggests at least two to three months a year away from overhead throwing, with at least four months off from competitive pitching.",
            ],
          },
          {
            kind: "p",
            text: "Rest days mean rest from **pitching**. Easy catch and bands are usually fine on those days, as long as the arm feels good.",
          },
        ],
      },
      {
        heading: "Signs it's time to back off",
        blocks: [
          {
            kind: "p",
            text: "Stop throwing for the day and check in with your coach if your child:",
          },
          {
            kind: "ul",
            items: [
              "Says their elbow or shoulder hurts (not just \"tired\")",
              "Starts dropping their arm or changing their motion",
              "Loses a lot of speed or control all of a sudden",
              "Is still sore the next morning",
            ],
          },
          {
            kind: "p",
            text: "Pain that doesn't go away after a couple of days is a reason to see a doctor, not to push through.",
          },
        ],
      },
      {
        heading: "Make the easy-catch days count",
        blocks: [
          {
            kind: "p",
            text: "Easy catch is where lesson cues turn into habits. Keep it short and focused:",
          },
          {
            kind: "ol",
            items: [
              "Warm up first. Our [pre-catch warm-up](/guides/pre-catch-warmup/) takes about five minutes.",
              "Do the band routine from our [band routine checklist](/guides/band-routine-checklist/).",
              "Pick one cue from the last lesson and think about only that one.",
              "Stop while the arm still feels fresh.",
            ],
          },
          {
            kind: "p",
            text: "For more on keeping the arm healthy, see the [arm care checklist](/guides/arm-care-checklist/). When your child is ready to work on accuracy, try our [strike tips](/guides/strike-tips/).",
          },
        ],
      },
      {
        heading: "Quick answers for parents",
        blocks: [
          {
            kind: "faq",
            items: [
              {
                q: "Can my kid throw every day?",
                a: "Easy, relaxed catch most days is usually fine for a healthy player. Full-effort pitching every day is not. Build in at least one or two full rest days a week.",
              },
              {
                q: "Should they pitch the day after a lesson?",
                a: "No. Treat the lesson as the pitching day and rest or play easy catch the next day.",
              },
              {
                q: "Does long toss count as pitching?",
                a: "Long toss at high effort is hard on the arm, so treat it like a pitching day. Short, easy catch does not count.",
              },
              {
                q: "What if they play on two teams?",
                a: "Add up all the pitches across both teams for the week. The rest rules apply to the total.",
              },
            ],
          },
        ],
      },
      {
        heading: "Want a plan built around your child's schedule?",
        blocks: [
          {
            kind: "p",
            text: "Every young pitcher's week looks different once games, team practice, and other sports are in the mix. Reach out on the [contact page](/contact/) and send a note with your child's age, goals, and schedule. We'll help you map out a throwing week that fits. We offer in-person lessons around Naples and video check-ins if you can't make it in person.",
          },
        ],
      },
    ],
  },
  {
    slug: "when-should-young-pitchers-start-throwing-a-changeup",
    title: "When Should Young Pitchers Start Throwing a Changeup?",
    metaTitle: "When Should Young Pitchers Start a Changeup? | Pitching101",
    metaDescription:
      "Parent guide: when kids should start a changeup, a simple grip, and why fastball command comes first. For families in Naples / Collier County.",
    ogTitle: "When Should Young Pitchers Start Throwing a Changeup?",
    ogDescription:
      "Age guide, simple grip, and when to wait — so you don’t rush the wrong pitch.",
    twitterTitle: "When Should Young Pitchers Start Throwing a Changeup?",
    twitterDescription:
      "Fastball first, then a soft changeup. Parent-friendly age guide for Naples families.",
    ogImage: OG_IMAGE,
    ogImageAlt: OG_IMAGE_ALT,
    datePublished: "2026-09-29",
    kicker: "Free guide",
    note: "A parent guide to age, arm readiness, and a simple grip — so you don’t rush the wrong pitch too soon.",
    topic: "Pitch selection",
    icon: "/assets/icons/icon-strikes.png",
    emailSubject: "When Should Young Pitchers Start Throwing a Changeup",
    cta: "Contact",
    ctaHref: "/contact/",
    lede: [
      "Short answer: Most kids do best with a solid fastball and a simple changeup only after they can throw strikes with good arm care. A true curveball can wait. In Naples / Collier County travel ball, the changeup is usually the second pitch worth learning — not the first trick pitch.",
      "Parents ask this every season: “Is it time for a changeup?” Here’s the simple rule we use with families.",
    ],
    sections: [
      {
        heading: "Fastball first",
        blocks: [
          {
            kind: "p",
            text: "Before a second pitch, your child should:",
          },
          {
            kind: "ul",
            items: [
              "Throw to a catcher with a calm, repeatable delivery",
              "Hit the strike zone often enough that catch play isn’t random",
              "Finish warm-ups and cool-downs",
              "Know one clear cue from lessons and use it on easy days",
            ],
          },
          {
            kind: "p",
            text: "If those pieces aren’t there yet, add a new pitch later. Command and arm care beat fancy grips.",
          },
        ],
      },
      {
        id: "changeup-for-beginners",
        heading: "Changeup for beginners: fastball command first, changeup second",
        blocks: [
          {
            kind: "p",
            text: "This matches Coach Nick's Beginner Series Reel.",
          },
          {
            kind: "ul",
            items: [
              "**It looks like a fastball.** That's the whole point. The hitter sees fastball and swings early.",
              "**The difference is the grip, not throwing softer.** Don't slow the arm down on purpose.",
              "**Same arm speed.** Throw it with the same arm speed as your fastball.",
              "**Pretend it's a fastball.** Same motion, same finish. Let the grip slow it down.",
              "**Only after fastball strikes.** Fastball command first, changeup second.",
            ],
          },
          {
            kind: "p",
            text: "New to the series? Start with the [four-seam fastball grip](/guides/four-seam-fastball-grip-for-kids/), and when the changeup is working, see [ready for a curveball?](/guides/ready-for-a-curveball/). All steps: [Beginner Pitching Series](/guides/beginner-pitching-series/).",
          },
        ],
      },
      {
        heading: "What a changeup is (in parent words)",
        blocks: [
          {
            kind: "p",
            text: "A changeup is a slower pitch that looks like a fastball out of the hand. The difference is the grip, not throwing softer. Same arm speed. Hitters swing early. It is not a curve. It does not need a big wrist snap. That is why it is usually safer to teach next than a breaking ball.",
          },
        ],
      },
      {
        heading: "A simple age guide (not a hard rule)",
        blocks: [
          {
            kind: "p",
            text: "Every arm is different. Use this as a starting point, then check with your coach.",
          },
          {
            kind: "table",
            headers: ["Age", "What usually makes sense"],
            rows: [
              ["8–10", "Fastball command and easy catch. Skip secondary pitches in games."],
              [
                "11–12",
                "Add a soft changeup in lessons and light flat ground if the arm feels good.",
              ],
              ["13–14", "Changeup becomes a real game pitch once strikes are consistent."],
              [
                "15–16",
                "Refine the changeup; only then talk about breaking balls with a coach who watches the arm.",
              ],
            ],
          },
          {
            kind: "p",
            text: "If your child is still growing fast or just started lessons, stay on the early end of that range.",
          },
        ],
      },
      {
        heading: "The grip we start with",
        blocks: [
          {
            kind: "ol",
            items: [
              "Hold the ball deeper in the hand than a fastball (more fingers on the ball).",
              "Use the same arm path and arm speed as the fastball.",
              "Aim for the same release point — don’t “push” it or slow the arm on purpose.",
              "Pretend it's a fastball. Let the grip do the work, not a trick or a snap.",
            ],
          },
          {
            kind: "p",
            text: "Questions about the grip? Ask through the [contact page](/contact/).",
          },
        ],
      },
      {
        heading: "How to practice it without frying the arm",
        blocks: [
          {
            kind: "ul",
            items: [
              "Warm up first (pre-catch routine + bands).",
              "Throw mostly fastballs. Mix in a few changeups, not a full bucket of them.",
              "Any pain or something feels wrong? Stop throwing and talk to a doctor.",
            ],
          },
          {
            kind: "p",
            text: "This guide is general information for parents, not medical advice.",
          },
          {
            kind: "ul",
            items: ["Rest days still follow your throw-between-lessons plan."],
          },
        ],
      },
      {
        heading: "Signs they’re ready",
        blocks: [
          {
            kind: "ul",
            items: [
              "Fastball strikes feel normal, not lucky",
              "Delivery and arm speed stay the same when they use the changeup grip",
              "They can explain the grip in one sentence",
            ],
          },
        ],
      },
      {
        heading: "Signs to wait",
        blocks: [
          {
            kind: "ul",
            items: [
              "They’re still learning to throw downhill without rushing",
              "Arm path changes every throw",
              "A coach or parent is pushing a curve “because travel ball”",
            ],
          },
          {
            kind: "faq",
            items: [
              {
                q: "When should they throw a curveball?",
                a: "Later, and there's no one age for every kid. Start with the three questions in our [ready for a curveball?](/guides/ready-for-a-curveball/) guide, and talk with your coach. For health questions, talk to a doctor.",
              },
              {
                q: "Can they throw a changeup in a game this weekend?",
                a: "Only if they’ve practiced it enough that the grip and arm speed stay the same under pressure. One or two in a low-stress inning is plenty early on.",
              },
              {
                q: "Does a changeup count toward pitch count?",
                a: "Yes. Every pitch counts. Treat changeups like any other pitch for rest rules.",
              },
              {
                q: "What if travel ball coaches want a curve now?",
                a: "Ask what they mean by “curve.” Many youth “curves” are really early breaking balls that stress the elbow. Share this guide and ask for a changeup-first plan instead.",
              },
            ],
          },
        ],
      },
      {
        heading: "Want a plan for your child’s arm and schedule?",
        blocks: [
          {
            kind: "p",
            text: "Share age, goals, and where they are with strikes on the [contact page](/contact/). We’ll map a simple second-pitch plan that fits Naples travel weeks and keeps the arm healthy. In-person lessons around Naples.",
          },
        ],
      },
    ],
  },
  {
    slug: "how-to-teach-a-kid-to-pitch",
    title: "How to Teach a Kid to Pitch: 5 Beginner Steps for Parents",
    metaTitle: "How to Teach a Kid to Pitch: 5 Beginner Steps",
    metaDescription:
      "Brand new pitcher? Teach your kid to pitch in 5 simple steps: grip, balance, stride, arm path and finish, plus a first-week plan. A Naples, FL parent guide.",
    ogTitle: "How to Teach a Kid to Pitch: 5 Beginner Steps for Parents",
    ogDescription:
      "Grip, balance, stride, arm path and finish. Five simple steps any parent can teach in the backyard, plus the mistakes to watch for.",
    twitterTitle: "How to Teach a Kid to Pitch: 5 Beginner Steps",
    twitterDescription:
      "Grip, balance, stride, arm path and finish. Five simple steps any parent can teach in the backyard.",
    // Custom art is planned at /og/how-to-teach-a-kid-to-pitch.png. That file is not in the repo yet, and missing /og/{slug}.png is not a safe fallback, so share cards use the default image.
    ogImage: OG_IMAGE,
    ogImageAlt: OG_IMAGE_ALT,
    datePublished: "2026-10-05",
    kicker: "Free guide",
    note: "Brand new pitcher in the house? You don't need a mound or a radar gun. Here are the five steps we start every beginner with, in the order we teach them.",
    topic: "Lessons",
    icon: "/assets/icons/icon-strikes.png",
    emailSubject: "How to Teach a Kid to Pitch",
    cta: "Contact",
    ctaHref: "/contact/",
    lede: [
      "**Short answer:** Teach pitching one piece at a time: **(1) the grip, (2) balance, (3) a straight stride at the target, (4) a smooth arm path, and (5) a full finish.** Keep throws easy, keep sessions short, and stop while the arm still feels fresh. Speed comes later. Good habits come first.",
      "If your child just told you they want to pitch, that's great news. It's also normal to feel unsure where to start. This is the same order we use with first-time pitchers in Naples, written so any parent can help in the backyard.",
    ],
    sections: [
      {
        heading: "Before you start: keep it easy",
        blocks: [
          {
            kind: "ul",
            items: [
              "**Warm up first.** Five minutes of moving around and light catch. Our [pre-catch warm-up](/guides/pre-catch-warmup/) is a simple way to do it.",
              "**Start close.** Begin at about half of a normal pitching distance and move back only when throws are easy and on target.",
              '**Easy effort.** Beginners should throw at a relaxed, "smooth" speed. Throwing hard before the motion is right builds bad habits.',
              "**Short sessions.** 10 to 15 minutes is plenty for a beginner. End on a good throw.",
              "**Hurt means stop.** Tired is normal. Pain in the elbow or shoulder is not. See our [arm care checklist](/guides/arm-care-checklist/).",
            ],
          },
        ],
      },
      {
        heading: "Step 1: The grip",
        blocks: [
          {
            kind: "p",
            text: "Start with the four-seam fastball grip. It's the easiest pitch to control and the only one a beginner needs.",
          },
          {
            kind: "ul",
            items: [
              "Index and middle fingers on top, across the wide part of the seams, a little space between them.",
              "Thumb underneath, roughly in the middle.",
              "Hold it in the fingertips, not choked deep in the palm. You should see a small gap between the ball and the palm.",
            ],
          },
          {
            kind: "p",
            text: "**Parent check:** Ask your child to show you the grip with their eyes closed. If they can find it by feel, it's ready.",
          },
        ],
      },
      {
        heading: "Step 2: Balance",
        blocks: [
          {
            kind: "p",
            text: "Most beginner wildness starts here. A pitcher who can't balance can't repeat a throw.",
          },
          {
            kind: "ul",
            items: [
              "Stand sideways to the target, front shoulder pointing at the catcher.",
              "Lift the front knee up to about belt height.",
              "Hold it for a two-count without wobbling.",
            ],
          },
          {
            kind: "p",
            text: '**Practice drill:** "Lift and hold." Ten lifts with a two-second hold, no ball needed. If they tip over, slow down and lift a little lower.',
          },
        ],
      },
      {
        heading: "Step 3: Stride straight at the target",
        blocks: [
          {
            kind: "p",
            text: "Where the front foot lands decides a lot about where the ball goes.",
          },
          {
            kind: "ul",
            items: [
              "From the balance position, step straight toward the target.",
              "Land on the front foot with toes pointing at the target, not off to the side.",
              "The stride should feel long and controlled, not a jump.",
            ],
          },
          {
            kind: "p",
            text: '**Practice drill:** "Walk the line." Lay a towel, a bat, or a chalk line from the pitcher to the target. The front foot should land on or right next to it every time.',
          },
        ],
      },
      {
        heading: "Step 4: A smooth arm path",
        blocks: [
          {
            kind: "p",
            text: "Keep the arm loose and let it swing, instead of pushing or aiming the ball.",
          },
          {
            kind: "ul",
            items: [
              "As the front leg strides, the hands break apart.",
              "The throwing hand swings down, back, and up in one smooth motion, with the ball facing away from the target.",
              "The glove arm points at the target to help keep the body on line.",
            ],
          },
          {
            kind: "p",
            text: '**Common mistake:** "Pushing" or aiming the ball like a dart. It looks careful but usually sails high and stresses the arm. If you see it, back up to a shorter distance and have them throw a little looser.',
          },
        ],
      },
      {
        heading: "Step 5: The finish",
        blocks: [
          {
            kind: "p",
            text: "A full finish keeps the arm safe and the ball on target.",
          },
          {
            kind: "ul",
            items: [
              "Throw through the target, not to it.",
              "Chest finishes out over the front knee.",
              "Throwing arm comes all the way down and across the body.",
              "Back leg swings around so they end up facing the plate, ready to field.",
            ],
          },
          {
            kind: "p",
            text: '**Parent check:** After each throw, ask, "Could you catch a ball hit back at you right now?" If they\'re falling off to the side, the finish needs work.',
          },
        ],
      },
      {
        id: "balance-move-throw-finish",
        heading: "Balance → Move → Throw → Finish: the whole motion in 4 words",
        blocks: [
          {
            kind: "p",
            text: "Once the five steps make sense, put them together with four simple words. This is how we teach the basic pitching motion, and it matches Coach Nick's Beginner Series Reel.",
          },
          {
            kind: "ol",
            items: [
              "**Balance.** Lift the knee and stay tall.",
              "**Move.** Stride straight to the catcher.",
              "**Throw.** Let the arm work naturally. Don't force it.",
              "**Finish.** Bring the glove to the chest.",
            ],
          },
          {
            kind: "p",
            text: "Think of it as **one straight line** from the rubber to the catcher. Simple = repeatable = strikes. When the motion is simple, kids can repeat it, and a repeatable motion throws more strikes.",
          },
          {
            kind: "p",
            text: "New to the mound? Start with [how to stand on the mound](/guides/how-to-stand-on-the-mound-balance/), then try [aim small, miss small](/guides/how-to-throw-strikes-aim-small-miss-small/). The full step-by-step series is in our [Beginner Pitching Series](/guides/beginner-pitching-series/).",
          },
        ],
      },
      {
        heading: "Put it together: a simple first week",
        blocks: [
          {
            kind: "table",
            headers: ["Day", "What to do"],
            rows: [
              ["Day 1", 'Grip and balance only. "Lift and hold" plus easy catch.'],
              ["Day 2", "Rest from throwing."],
              [
                "Day 3",
                'Add the stride. "Walk the line" drill, then easy throws at a short distance.',
              ],
              ["Day 4", "Rest or easy catch."],
              [
                "Day 5",
                "All five steps, slow motion first, then easy throws to a target. 10–15 minutes total.",
              ],
              [
                "Days 6–7",
                "Rest, or a fun target game like the ones in our [fun games guide](/guides/fun-games/).",
              ],
            ],
          },
          {
            kind: "p",
            text: "Once the motion feels natural, our [strike tips](/guides/strike-tips/) help with accuracy, and our [throwing-between-lessons guide](/guides/how-often-should-young-pitchers-throw-between-lessons/) covers rest days and pitch counts by age.",
          },
        ],
      },
      {
        heading: "Beginner mistakes and quick fixes",
        blocks: [
          {
            kind: "table",
            headers: ["What you see", "Quick fix"],
            rows: [
              [
                "Ball sails high or way outside",
                "Shorten the distance, throw looser, finish chest over front knee.",
              ],
              ["Front foot lands way off to the side", 'Use the "walk the line" drill.'],
              ["Falls over before the throw", 'Go back to "lift and hold." Lift lower and slower.'],
              [
                "Trying to throw as hard as possible",
                "Smooth speed first. Make it a game: five strikes in a row before trying harder.",
              ],
              [
                "Complains about elbow or shoulder pain",
                "Stop for the day and talk to a coach. Pain that lasts is a reason to see a doctor.",
              ],
            ],
          },
        ],
      },
      {
        heading: "Quick answers for parents",
        blocks: [
          {
            kind: "faq",
            items: [
              {
                q: "What age can a kid start pitching?",
                a: "Many kids start learning the motion around 7 or 8, often in coach-pitch or machine-pitch leagues. The steps above work at any age. What matters most is easy effort and short sessions.",
              },
              {
                q: "Should beginners learn a curveball?",
                a: "No. Start with the fastball and learn to throw strikes with it. Our [changeup guide](/guides/when-should-young-pitchers-start-throwing-a-changeup/) covers when a second pitch makes sense.",
              },
              {
                q: "How far away should we practice?",
                a: "Start close, at about half a normal pitching distance, and move back as throws get easy and accurate.",
              },
              {
                q: "How do I know if they're doing it right?",
                a: "Look for three things: they can balance, the front foot lands toward the target, and they finish facing the plate. If those are there, the rest usually follows.",
              },
              {
                q: "What are the basic parts of a pitching motion?",
                a: "Balance, move, throw, finish: lift the knee and stay tall, stride straight to the catcher, let the arm work naturally, and bring the glove to the chest.",
              },
            ],
          },
        ],
      },
      {
        heading: "Want a coach to check the motion?",
        blocks: [
          {
            kind: "p",
            text: "A few early lessons can lock in good habits before bad ones set in. Reach out on the [contact page](/contact/) with your child's age, experience, and schedule. We'll start with a First Look evaluation and help you pick the right next step. We teach in-person lessons around Naples and Collier County.",
          },
        ],
      },
    ],
  },
  {
    slug: "tired-arm-after-pitching-young-pitchers",
    title: "Tired Arm After Pitching? What's Normal for Young Pitchers",
    metaTitle: "Tired Arm After Pitching? What's Normal | Pitching101",
    metaDescription:
      "Is it normal for a young pitcher's arm to feel tired after a game? A calm parent guide to recovery, rest days, and good arm habits from a Naples, FL coach.",
    ogTitle: "Tired Arm After Pitching? What's Normal for Young Pitchers",
    ogDescription:
      "A tired arm after pitching is common. Simple rest and recovery habits that help young arms bounce back.",
    twitterTitle: "Tired Arm After Pitching? What's Normal for Young Pitchers",
    twitterDescription:
      "A calm parent guide to recovery and arm-friendly habits for young pitchers, from a Naples pitching coach.",
    // No custom share image in the repo. Missing /og/{slug}.png is not a safe fallback, so share cards use the default image.
    ogImage: OG_IMAGE,
    ogImageAlt: OG_IMAGE_ALT,
    datePublished: "2026-10-12",
    kicker: "Free guide",
    note: "A calm, simple parent guide to the normal tired feeling after pitching, and the easy rest and recovery habits that help young arms bounce back.",
    topic: "Arm care",
    icon: "/assets/icons/icon-arm-care-v2.png",
    emailSubject: "Tired Arm After Pitching",
    cta: "Contact",
    ctaHref: "/contact/",
    lede: [
      '**Short answer:** After pitching, it\'s common for a young pitcher\'s arm to feel a bit tired or heavy for a day or so. That\'s usually just the arm saying "I worked," and rest, easy days, and good habits help it bounce back. If pain doesn\'t go away or something just doesn\'t feel right, talk to a doctor.',
      'Parents in Naples and around Collier County ask me this a lot, usually the morning after a tournament: "He says his arm feels tired. Is that okay?" Here\'s the general picture I share with families.',
      "*This guide is general information for parents, not medical advice. I'm a pitching coach, not a doctor. If you're ever worried about your child's arm, talk to a doctor.*",
    ],
    sections: [
      {
        heading: "What normal tiredness after pitching often feels like",
        blocks: [
          { kind: "p", text: "Kids often describe it as:" },
          {
            kind: "ul",
            items: [
              'A dull, heavy, or "worked" feeling, like legs after a long run',
              "Tiredness in the shoulder or upper arm the day after a game or lesson",
              "Feeling a little better each day as they rest",
            ],
          },
          {
            kind: "p",
            text: "That's a normal part of throwing. Throwing is hard work for any body, and young arms need time to recharge, just like the rest of them.",
          },
        ],
      },
      {
        heading: "Habits that help arms recover",
        blocks: [
          {
            kind: "ol",
            items: [
              "**Cool down easy.** A few minutes of light movement after pitching instead of stopping cold.",
              "**Drink water and eat a real meal.** Southwest Florida heat drains kids fast during fall and spring tournaments.",
              "**Sleep.** Growing athletes recover best with a full night's rest.",
              "**Take the rest days.** Our [throw-between-lessons guide](/guides/how-often-should-young-pitchers-throw-between-lessons/) has a simple weekly plan and the MLB/USA Baseball Pitch Smart rest-day guidelines by age.",
              "**Keep the next day easy.** Light movement, bands, or easy catch, not a bullpen. Our [arm-care checklist](/guides/arm-care-checklist/) shows the band routine we use.",
              "**Warm up every time.** Our [pre-catch warmup](/guides/pre-catch-warmup/) takes about five minutes.",
            ],
          },
        ],
      },
      {
        heading: "Schedule habits that help",
        blocks: [
          {
            kind: "ul",
            items: [
              "Avoid pitching on back-to-back days, or for more than one team in the same week.",
              "Build in real time off from throwing during the year.",
              "Let the fastball and changeup come first before anything fancier ([changeup guide](/guides/when-should-young-pitchers-start-throwing-a-changeup/)).",
            ],
          },
          {
            kind: "p",
            text: "Most arm-friendly habits are about the **schedule**, not about trying harder. That's good news, because parents can help with the schedule.",
          },
        ],
      },
      {
        heading: "Keep the conversation open",
        blocks: [
          {
            kind: "p",
            text: "Let your child know it's always okay to tell you or their coach how their arm feels, without worrying about losing innings. Kids who feel safe speaking up get the rest they need sooner.",
          },
        ],
      },
      {
        heading: "When to talk to a doctor",
        blocks: [
          {
            kind: "p",
            text: 'If pain doesn\'t go away, keeps coming back, or something just doesn\'t feel right, skip throwing and talk to a doctor. You never need a reason beyond "I want to be sure."',
          },
        ],
      },
      {
        heading: "FAQ",
        blocks: [
          {
            kind: "faq",
            items: [
              {
                q: "Is it normal for my child's arm to feel tired after pitching?",
                a: "Yes, a tired or heavy feeling for a day or so after pitching is common. Rest, easy days, and good sleep help it recover.",
              },
              {
                q: "What helps a young pitcher's arm recover?",
                a: "Easy cooldowns, water and food, sleep, following rest days, and keeping the next day light. Our [throw-between-lessons guide](/guides/how-often-should-young-pitchers-throw-between-lessons/) has a simple weekly plan.",
              },
              {
                q: "Should we ice after pitching?",
                a: "Families do different things, and advice has changed over the years. Ask your doctor what they suggest. Rest days and easy days matter most.",
              },
              {
                q: "When should we talk to a doctor?",
                a: "Any time pain doesn't go away, keeps coming back, or you just have a feeling something isn't right. When in doubt, ask.",
              },
            ],
          },
        ],
      },
      {
        heading: "Want help building an arm-friendly week?",
        blocks: [
          {
            kind: "p",
            text: "Tell me your child's age and team schedule on the [contact page](/contact/). I'll help you plan rest days and easy days around Naples travel-ball weekends.",
          },
        ],
      },
    ],
  },
  ...beginnerSeries,
  {
    slug: "pitching-from-the-stretch-for-beginners",
    title: "Pitching From the Stretch: 3 Simple Steps for Young Pitchers",
    metaTitle: "Pitching From the Stretch for Beginners | Pitching101",
    metaDescription:
      "New to pitching from the stretch? Three simple steps for young pitchers: stand sideways, come set and hold, then lift and go. Plus an easy drill for home.",
    ogTitle: "Pitching From the Stretch: 3 Simple Steps for Young Pitchers",
    ogDescription:
      "Runners on base? Stand sideways, come set and hold, then lift and go. Plus an easy at-home drill.",
    twitterTitle: "Pitching From the Stretch: 3 Simple Steps for Young Pitchers",
    twitterDescription:
      "Only the start changes. Three steps and one backyard drill for young pitchers learning the stretch.",
    // No custom share image in the repo. Share cards use the default image.
    ogImage: OG_IMAGE,
    ogImageAlt: OG_IMAGE_ALT,
    datePublished: "2026-10-20",
    kicker: "Free guide",
    note: "Runners on base? Here's how a young pitcher stands sideways, comes set, and still throws strikes, plus one easy drill to practice at home.",
    topic: "Beginner series",
    icon: "/assets/icons/icon-free-guide-v2.png",
    emailSubject: "Pitching From the Stretch for Beginners",
    cta: "Contact",
    ctaHref: "/contact/",
    lede: [
      "**Short answer:** The stretch is a shorter way to start a pitch, used mostly when runners are on base. Stand sideways to the catcher, bring your hands together and come to a full stop, then lift, balance, and throw the same way you always do. Most beginners rush the stop, so practice it slowly first.",
      "Once a young pitcher finishes our [Beginner Pitching Series](/guides/beginner-pitching-series/), the stretch is usually the next new thing they see in games. Parents in Naples and around Collier County often ask why their kid suddenly \"pitches differently\" with a runner on first. Here's the simple version.",
    ],
    sections: [
      {
        heading: "What is the stretch?",
        blocks: [
          {
            kind: "p",
            text: "There are two ways to start a pitch. The **windup** is the longer start most beginners learn first (see [how to stand on the mound](/guides/how-to-stand-on-the-mound-balance/)). The **stretch** is shorter. Pitchers use it with runners on base so they can keep an eye on the runner and get the ball to the catcher sooner.",
          },
          {
            kind: "p",
            text: "The good news: only the start changes. After the leg lift, it's the same balance, move, throw, finish your child already practices.",
          },
        ],
      },
      {
        heading: "Step 1: Stand sideways",
        blocks: [
          {
            kind: "p",
            text: "Stand with your back foot along the front edge of the rubber and your front side facing the catcher, like you're standing on a line that points at the plate. Feet about shoulder-width apart, knees soft, standing tall.",
          },
        ],
      },
      {
        heading: "Step 2: Come set and hold",
        blocks: [
          {
            kind: "p",
            text: "Bring your hands together at your belly or chest, and stop. A real stop, not a quick bounce. Hold it for a moment and pick your target on the glove. That pause is what \"coming set\" means, and it's the part beginners rush most.",
          },
        ],
      },
      {
        heading: "Step 3: Lift, balance, go",
        blocks: [
          {
            kind: "p",
            text: "From the set, lift your front leg, find your balance, and throw to the target. From here it's the motion your child already knows: balance, move, throw, finish. See [the basic pitching motion](/guides/how-to-teach-a-kid-to-pitch/#balance-move-throw-finish).",
          },
        ],
      },
      {
        heading: "A drill to try at home: Set, Pause, Go",
        blocks: [
          {
            kind: "p",
            text: "You can do this in the backyard or at the park. No mound needed.",
          },
          {
            kind: "ol",
            items: [
              "Your child gets sideways, like Step 1.",
              "You say \"Set.\" They bring their hands together and stop.",
              "Count out loud: \"One, two.\"",
              "You say \"Go.\" They lift, balance, and throw easy to your glove.",
            ],
          },
          {
            kind: "p",
            text: "Start slow and at easy effort. Once the stop looks clean every time, let them count in their head instead of out loud. Keep it short and end on a good throw.",
          },
        ],
      },
      {
        heading: "Rushing the set? That's normal",
        blocks: [
          {
            kind: "p",
            text: "Almost every beginner hurries the stop at first, especially in a game with a runner leading off. If the hands never really stop, or the throw sails, step off, take a breath, and come set again. Slower is better while they're learning.",
          },
        ],
      },
      {
        heading: "Why it matters for parents",
        blocks: [
          {
            kind: "ul",
            items: [
              "**Same motion, new start.** Kids who practice the stretch at home don't feel thrown off the first time a runner gets on.",
              "**Calmer with runners on.** A clear set and pause gives your child a second to breathe and aim, which helps with [aim small, miss small](/guides/how-to-throw-strikes-aim-small-miss-small/).",
              "**Rules vary by league.** Some youth leagues don't allow leading off, and balk rules aren't the same everywhere. Ask your child's coach or league which rules apply to them.",
            ],
          },
        ],
      },
      {
        heading: "FAQ",
        blocks: [
          {
            kind: "faq",
            items: [
              {
                q: "When should a young pitcher learn the stretch?",
                a: "Once they can throw strikes from the windup with a motion they can repeat. Many kids start using it once runners can lead off or steal in their league. Your child's coach can tell you when it fits their team.",
              },
              {
                q: "Is the stretch harder than the windup?",
                a: "It's different, not harder. There are fewer moving parts at the start, but the full stop takes practice.",
              },
              {
                q: "Do they need a mound to practice the stretch?",
                a: "No. Flat ground in the backyard or at the park works fine.",
              },
              {
                q: "What's a balk?",
                a: "A balk is a pitcher's illegal move with runners on base, like not coming to a full stop or faking a throw. Rules differ by league and age, so ask your coach what your league calls. Our [pitching terms for beginners](/guides/pitching-terms-for-beginners/) guide covers the basics.",
              },
              {
                q: "Should my child pitch from the stretch all the time?",
                a: "Some pitchers do, because it's simpler. That's a choice to make with your child's pitching coach.",
              },
            ],
          },
        ],
      },
      {
        heading: "Want help with the stretch?",
        blocks: [
          {
            kind: "p",
            text: "Tell us your child's age and where they're pitching on the [contact page](/contact/). Lessons are at Fleischmann Park in Naples, and we travel within Collier County.",
          },
        ],
      },
    ],
  },
];

export function getLeadMagnet(slug: string) {
  return leadMagnets.find((magnet) => magnet.slug === slug);
}

/** FAQ pairs from a guide, in the order they appear. */
export function guideFaqs(magnet: LeadMagnet): GuideFaq[] {
  const items: GuideFaq[] = [];
  for (const section of magnet.sections ?? []) {
    for (const block of section.blocks ?? []) {
      if (block.kind === "faq") items.push(...block.items);
    }
  }
  return items;
}

/** Topics that sit next to each other when a guide has no siblings. */
const RELATED_TOPICS: Record<string, string[]> = {
  "Arm care": ["Warmup", "Strength"],
  Warmup: ["Arm care", "Strength"],
  Strength: ["Warmup", "Arm care"],
  Strikes: ["Games", "Long toss", "Lessons"],
  Games: ["Strikes", "Long toss"],
  "Long toss": ["Strikes", "Lessons", "Warmup"],
  Lessons: ["Long toss", "Strikes", "Choosing a coach"],
  "Choosing a coach": ["Lessons", "Arm care", "Strikes"],
  "Pitch selection": ["Arm care", "Strikes", "Lessons"],
  "Beginner series": ["Strikes", "Lessons", "Pitch selection"],
};

/** Other guides to show at the bottom of a post. Same topic first. */
export function relatedGuides(slug: string, limit = 3): LeadMagnet[] {
  const current = getLeadMagnet(slug);
  if (!current) return [];

  const others = leadMagnets.filter((magnet) => magnet.slug !== slug);
  const order = [current.topic, ...(RELATED_TOPICS[current.topic] ?? [])];
  const picked: LeadMagnet[] = [];

  for (const topic of order) {
    for (const magnet of others) {
      if (picked.length >= limit) return picked;
      if (magnet.topic === topic && !picked.includes(magnet)) picked.push(magnet);
    }
  }

  for (const magnet of others) {
    if (picked.length >= limit) break;
    if (!picked.includes(magnet)) picked.push(magnet);
  }

  return picked;
}

export function leadMagnetMailto(magnet: LeadMagnet) {
  return `mailto:${EMAIL}?subject=${encodeURIComponent(magnet.emailSubject)}`;
}

export function leadMagnetCtaHref(magnet: LeadMagnet) {
  return magnet.ctaHref ?? leadMagnetMailto(magnet);
}

export type GuideTocItem = { id: string; label: string };

const TOC_MIN = 4;

function headingSlug(label: string) {
  const base = label
    .toLowerCase()
    .replace(/['’]/g, "")
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 72);
  return base || "section";
}

function uniqueHeadingIds(labels: string[]) {
  const used = new Set<string>();
  return labels.map((label) => {
    const base = headingSlug(label);
    let id = base;
    let n = 2;
    while (used.has(id)) {
      id = `${base}-${n}`;
      n += 1;
    }
    used.add(id);
    return id;
  });
}

/** Section and routine headings, in the order they appear. Short posts stay out. */
export function guideOutline(magnet: LeadMagnet) {
  const routineLabels = magnet.routines?.map((routine) => routine.heading) ?? [];
  const routineIds = uniqueHeadingIds(routineLabels);
  const used = new Set(routineIds);
  for (const section of magnet.sections ?? []) {
    for (const alias of section.aliasIds ?? []) {
      const id = alias.trim();
      if (id) used.add(id);
    }
  }
  const sectionIds = (magnet.sections ?? []).map((section) => {
    const preferred = section.id?.trim() || headingSlug(section.heading);
    let id = preferred;
    let n = 2;
    while (used.has(id)) {
      id = `${preferred}-${n}`;
      n += 1;
    }
    used.add(id);
    return id;
  });

  const routines = (magnet.routines ?? []).map((routine, index) => ({
    ...routine,
    id: routineIds[index],
  }));
  const sections = (magnet.sections ?? []).map((section, index) => ({
    ...section,
    id: sectionIds[index],
  }));
  const toc: GuideTocItem[] = [
    ...routines.map((routine) => ({ id: routine.id, label: routine.heading })),
    ...sections.map((section) => ({ id: section.id, label: section.heading })),
  ];

  return {
    routines,
    sections,
    toc: toc.length >= TOC_MIN ? toc : [],
  };
}

/** Guide markdown (`**bold**`, `[label](/path/)`) as plain text for JSON-LD. */
export function plainGuideCopy(text: string) {
  return text
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/\s+/g, " ")
    .trim();
}

const HOW_TO_STEP = /^Step \d+:\s+(.+)$/;

function howToStepText(section: LeadMagnetSection) {
  const chunks: string[] = [];
  for (const block of section.blocks ?? []) {
    if (block.kind === "p") chunks.push(plainGuideCopy(block.text));
    if (block.kind === "ul" || block.kind === "ol") {
      for (const item of block.items) chunks.push(plainGuideCopy(item));
    }
  }
  return chunks.filter(Boolean).join(" ");
}

/** Numbered "Step N:" sections, in page order. Null when a guide has none. */
export function guideHowTo(magnet: LeadMagnet): GuideHowTo | null {
  const steps = guideOutline(magnet).sections.flatMap((section) => {
    const match = HOW_TO_STEP.exec(section.heading);
    const text = match ? howToStepText(section) : "";
    if (!match || !text) return [];
    return [{ name: match[1], text, anchor: section.id }];
  });
  if (steps.length === 0) return null;

  return {
    name: magnet.title,
    description: magnet.metaDescription,
    path: `/guides/${magnet.slug}/`,
    steps,
  };
}
