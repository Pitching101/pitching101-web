import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import ParkSky from "@/components/ParkSky";
import FaqList from "@/components/FaqList";
import JsonLd, { faqJsonLd } from "@/components/JsonLd";
import { faqs, trainingOptions } from "@/data/siteCopy";

export const metadata: Metadata = {
  title: "Pitching coach for kids in Naples, FL",
  description:
    "Looking for a youth pitching coach in Naples, FL? Pitching101 is Coach Nick — lessons for ages 8-14, arm care first. Text 845-768-2211.",
  keywords: [
    "youth pitching lessons in Naples FL",
    "Naples FL pitching lessons",
    "pitching coach Naples Florida",
    "youth baseball pitching Collier County",
    "Pitching101 Naples",
  ],
  alternates: { canonical: "/naples-fl-pitching-lessons/" },
  openGraph: {
    title: "Youth pitching lessons in Naples, FL | Pitching101",
    description:
      "Coach Nick helps kids ages 8-14 throw more strikes in Naples and SWFL.",
    type: "website",
  },
};

const whoFor = [
  "Parents who want plain-English pitching help",
  "Youth pitchers ages 8–14",
  "Naples, Collier County, and SWFL families",
];

export default function NaplesPitchingLessonsPage() {
  return (
    <ParkSky tone="park">
      <JsonLd data={faqJsonLd(faqs)} />
      <article className="park-page">
        <Reveal className="space-y-5">
          <p className="text-base font-semibold text-blue-dark">
            <Link href="/" className="hover:underline">
              ← Home
            </Link>
          </p>
          <p className="ui-chip px-3.5 py-1.5">Naples · SWFL · ages 8–14</p>
          <h1 className="ui-title ui-title-lg">
            Youth pitching lessons in Naples, FL
          </h1>
          <p className="text-lg leading-relaxed text-ink-soft">
            Pitching101 is Coach Nick. I help kids ages 8–14 throw more strikes —
            in person around Naples, or with a plan you can run at home.
          </p>
          <Link href="/contact/" className="btn">
            Get your child started
          </Link>
        </Reveal>

        <Reveal className="mt-12 space-y-5">
          <h2 className="ui-title ui-title-sm">Who youth pitching lessons are for</h2>
          <ul className="mx-auto max-w-md space-y-3 text-left text-lg leading-relaxed text-ink-soft">
            {whoFor.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="mt-12 space-y-5">
          <h2 className="ui-title ui-title-sm">How to start pitching lessons here</h2>
          <ul className="dugout-row">
            {trainingOptions.map((item) => (
              <li key={item.label} className="dugout-sign">
                <h3 className="dugout-sign-title">{item.label}</h3>
                <p className="dugout-sign-note">{item.note}</p>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="mt-12 space-y-5">
          <h2 className="ui-title ui-title-sm">Questions about pitching lessons in Naples</h2>
          <FaqList items={faqs} />
        </Reveal>

        <Reveal className="mt-12 space-y-4">
          <p className="text-ink-soft">
            No street address listed. Text, call, or email first and I&apos;ll
            tell you where to meet.
          </p>
          <Link href="/contact/" className="btn">
            Get your child started
          </Link>
        </Reveal>

        <p className="mt-10 text-sm text-ink-soft">
          Serving Naples &amp; SWFL · Pitching101
        </p>
      </article>
    </ParkSky>
  );
}
