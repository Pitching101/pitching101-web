import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import ParkSky from "@/components/ParkSky";
import LeadMagnetShelf from "@/components/LeadMagnetShelf";

export const metadata: Metadata = {
  title: "Free youth pitching guides",
  description:
    "Free pitching guides for kids 8–16 in Naples: arm care, strike tips, and a pre-catch warmup. Same stuff I use in lessons.",
  alternates: { canonical: "/guides/" },
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
            Same cues I use in lessons. Take them and try them this week.
          </p>
        </Reveal>

        <Reveal delayMs={40}>
          <LeadMagnetShelf />
        </Reveal>

        <Reveal delayMs={60} className="mt-12 space-y-4">
          <p className="text-base text-ink-soft">Want to hop on a field, not just read the sheet?</p>
          <Link href="/contact/" className="btn">
            Get started
          </Link>
        </Reveal>
      </article>
    </ParkSky>
  );
}
