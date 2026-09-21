import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import ParkSky from "@/components/ParkSky";
import LeadMagnetShelf from "@/components/LeadMagnetShelf";
import { shareImage } from "@/data/siteCopy";

export const metadata: Metadata = {
  title: "Free youth pitching guides",
  description:
    "Free pitching guides for ages 8–16 in Naples, FL: arm-care checklist, strike tips, and a pre-catch warmup. From Coach Deising at Pitching101.",
  alternates: { canonical: "/guides/" },
  openGraph: {
    title: "Free youth pitching guides | Pitching101",
    description:
      "Free pitching guides for ages 8–16 in Naples, FL: arm-care checklist, strike tips, and a pre-catch warmup.",
    url: "/guides/",
    images: shareImage("/og/guides.png", "Free Pitching101 youth pitching guides"),
  },
  twitter: {
    card: "summary_large_image",
    title: "Free youth pitching guides | Pitching101",
    description:
      "Free pitching guides for ages 8–16 in Naples, FL: arm-care checklist, strike tips, and a pre-catch warmup.",
    images: ["/og/guides.png"],
  },
};

export default function GuidesPage() {
  return (
    <ParkSky tone="park">
      <article className="park-page park-page-magnets">
        <Reveal className="space-y-5">
          <p className="text-base font-semibold text-blue-dark">
            <Link href="/" className="hover:underline">
              ← Home
            </Link>
          </p>
          <p className="ui-chip px-3.5 py-1.5">Free · ages 8–16</p>
          <h1 className="ui-title ui-title-lg">Free youth pitching guides</h1>
          <p className="text-lg leading-relaxed text-ink-soft">
            The same cues used in lessons.
          </p>
        </Reveal>

        <Reveal delayMs={40}>
          <LeadMagnetShelf />
        </Reveal>

        <Reveal delayMs={60} className="mt-12 space-y-4">
          <p className="text-base text-ink-soft">Want lessons with the guide?</p>
          <Link href="/contact/" className="btn">
            Get started
          </Link>
        </Reveal>
      </article>
    </ParkSky>
  );
}
