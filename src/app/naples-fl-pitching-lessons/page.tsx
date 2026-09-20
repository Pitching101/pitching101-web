import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import TrustStrip from "@/components/TrustStrip";

export const metadata: Metadata = {
  title: "Youth Pitching Lessons Naples FL",
  description:
    "Youth pitching lessons in Naples, Florida for ages 8–14 and Collier County parents. Text or call 845-768-2211 or email nickdeisng@gmail.com.",
  keywords: [
    "youth pitching lessons Naples FL",
    "Naples FL pitching lessons",
    "pitching coach Naples Florida",
    "youth baseball pitching Collier County",
    "Pitching101 Naples",
  ],
  openGraph: {
    title: "Youth Pitching Lessons Naples FL | Pitching101",
    description:
      "Youth pitching lessons for Naples, FL ages 8–14 — clear feedback, local focus.",
    type: "website",
  },
};

export default function NaplesPitchingLessonsPage() {
  return (
    <article className="mx-auto max-w-3xl px-5 py-12 sm:px-8 sm:py-16">
      <Reveal className="space-y-5">
        <p className="text-base font-semibold text-blue-dark">
          <Link href="/" className="hover:underline">
            ← Home
          </Link>
        </p>
        <div className="media-frame media-frame-white inline-flex overflow-hidden">
          <Image
            src="/assets/pixel-batter.jpg"
            alt="Pixel art baseball batter"
            width={72}
            height={72}
            className="h-[72px] w-[72px]"
            style={{ imageRendering: "pixelated" }}
          />
        </div>
        <p className="ui-chip px-3.5 py-1.5">Naples · Collier County</p>
        <h1 className="ui-title ui-title-lg">
          Youth pitching lessons Naples FL
        </h1>
        <p className="text-lg leading-relaxed text-ink-soft">
          Clear coaching for ages 8–14. Parents leave knowing what to practice.
          No jargon.
        </p>
      </Reveal>

      <Reveal className="mt-8" delayMs={60}>
        <TrustStrip />
      </Reveal>

      <Reveal className="mt-10 space-y-3">
        <h2 className="ui-title ui-title-sm text-blue-dark">Who it’s for</h2>
        <ul className="space-y-2 text-ink-soft">
          <li>
            <strong className="text-ink">Ages 8–14</strong> — age-right progress.
          </li>
          <li>
            <strong className="text-ink">Parents</strong> — plain-English feedback.
          </li>
          <li>
            <strong className="text-ink">Collier County &amp; Naples</strong> — local
            plus virtual when needed.
          </li>
        </ul>
      </Reveal>

      <Reveal className="mt-10 space-y-3">
        <h2 className="ui-title ui-title-sm text-blue-dark">Options</h2>
        <p className="text-ink-soft">
          Stan video notes, PDF chart, virtual lessons, or in-area Naples sessions.
        </p>
      </Reveal>

      <Reveal>
        <section className="ui-card mt-10 p-6 sm:p-8">
          <h2 className="ui-title ui-title-sm text-blue-dark">Book a chat</h2>
          <p className="mt-2 text-ink-soft">
            No street address listed. Text, call, or email first.
          </p>
          <p className="mt-3 text-sm font-semibold text-blue-dark">
            Text or Call 845-768-2211
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <a href="tel:8457682211" className="btn">
              Call 845-768-2211
            </a>
            <a href="sms:8457682211" className="btn-ghost">
              Text 845-768-2211
            </a>
            <a
              href="mailto:nickdeisng@gmail.com?subject=Youth%20pitching%20lessons%20Naples%20FL"
              className="btn-ghost"
            >
              Email nickdeisng@gmail.com
            </a>
          </div>
        </section>
      </Reveal>

      <p className="mt-10 text-sm text-ink-soft">
        Serving Naples &amp; Collier County, FL · Pitching101
      </p>
    </article>
  );
}
