import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import ParkSky from "@/components/ParkSky";
import LeadMagnetShelf from "@/components/LeadMagnetShelf";
import { ENROLL_HREF, ENROLL_LABEL, pageTitle, shareImage } from "@/data/siteCopy";

export const metadata: Metadata = {
  title: "Free youth pitching guides",
  description:
    "Free pitching guides for players 8–16 in Naples: how to choose lessons, arm care, strike tips, a pre-catch warmup, and offseason strength. Same stuff I use in lessons.",
  alternates: { canonical: "/guides/" },
  openGraph: {
    title: pageTitle("Free youth pitching guides"),
    description:
      "Free pitching guides for ages 8–16 in Naples, FL: arm-care checklist, strike tips, a pre-catch warmup, and offseason strength.",
    url: "/guides/",
    images: shareImage("/og/guides.png", "Free Pitching101 youth pitching guides"),
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle("Free youth pitching guides"),
    description:
      "Free pitching guides for ages 8–16 in Naples, FL: arm-care checklist, strike tips, a pre-catch warmup, and offseason strength.",
    images: ["/og/guides.png"],
  },
};

export default function GuidesPage() {
  return (
    <ParkSky tone="park">
      <article className="park-page park-page-magnets">
        <Reveal className="guide-hero">
          <p className="text-base font-semibold text-blue-dark">
            <Link href="/" className="hover:underline">
              ← Home
            </Link>
          </p>
          <p className="ui-chip px-3.5 py-1.5">Free · ages 8–16</p>
          <h1 className="ui-title ui-title-lg">Free youth pitching guides</h1>
          <p className="text-lg leading-relaxed text-ink-soft">
            Same cues I use in lessons — plus a parent checklist for choosing a coach.
          </p>
        </Reveal>

        <Reveal delayMs={40}>
          <LeadMagnetShelf />
        </Reveal>

        <Reveal delayMs={60} className="mt-12 space-y-4">
          <p className="text-base text-ink-soft">Want to hop on a field, not just read the sheet?</p>
          <Link href={ENROLL_HREF} className="btn">
            {ENROLL_LABEL}
          </Link>
        </Reveal>
      </article>
    </ParkSky>
  );
}
