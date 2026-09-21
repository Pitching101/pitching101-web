import { EMAIL } from "@/data/siteCopy";

/**
 * Standard for every free lead magnet on /guides.
 * Add one object here → card on the shelf + /guides/{slug}/ page.
 */
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
};

export const leadMagnets: LeadMagnet[] = [
  {
    slug: "arm-care-checklist",
    title: "Arm-care checklist",
    kicker: "Free guide",
    note: "The same warm-up and cool-down I teach in lessons.",
    topic: "Arm care",
    icon: "/assets/icons/icon-arm-care-v2.png",
    emailSubject: "Arm-Care Checklist Guide",
    cta: "Email me the checklist",
  },
  {
    slug: "strike-tips",
    title: "Strike tips",
    kicker: "Free guide",
    note: "Backyard cues. More strikes. Less overthinking.",
    topic: "Strikes",
    icon: "/assets/icons/icon-strikes.png",
    art: "/assets/pixel-strike-zone.png",
    artAlt: "Nine-box strike zone with zone 5, the middle, highlighted",
    emailSubject: "Strike Percent Tips Guide",
    cta: "Email me the tips",
  },
  {
    slug: "pre-catch-warmup",
    title: "Pre-catch warmup",
    kicker: "Free guide",
    note: "A short routine so catch starts ready.",
    topic: "Warmup",
    icon: "/assets/icons/icon-plan-checklist.png",
    emailSubject: "Pre-Catch Warmup Guide",
    cta: "Email me the warmup",
  },
];

export function getLeadMagnet(slug: string) {
  return leadMagnets.find((magnet) => magnet.slug === slug);
}

export function leadMagnetMailto(magnet: LeadMagnet) {
  return `mailto:${EMAIL}?subject=${encodeURIComponent(magnet.emailSubject)}`;
}
