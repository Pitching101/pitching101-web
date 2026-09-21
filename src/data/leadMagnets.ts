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
