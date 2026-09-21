import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import ParkSky from "@/components/ParkSky";
import FaqList from "@/components/FaqList";
import JsonLd, { faqJsonLd } from "@/components/JsonLd";
import { ABOUT_INTRO, ABOUT_MORE, ENROLL_HREF, ENROLL_LABEL, faqs, HOW_WE_TRAIN_LINE, OG_DESCRIPTION, OG_TITLE, RESPONSE_PROMISE, shareImage, trainingOptions } from "@/data/siteCopy";

export const metadata: Metadata = {
  title: "Pitching coach for kids in Naples, FL",
  description:
    "Looking for a youth pitching coach in Naples, FL? I'm Coach Deising — book an evaluation, then a simple pack. Ages 8-16, arm care first.",
  keywords: [
    "youth pitching lessons in Naples FL",
    "Naples FL pitching lessons",
    "pitching coach Naples Florida",
    "youth baseball pitching Collier County",
    "Pitching101 Naples",
  ],
  alternates: { canonical: "/naples-fl-pitching-lessons/" },
  openGraph: {
    title: OG_TITLE,
    description: OG_DESCRIPTION,
    url: "/naples-fl-pitching-lessons/",
    type: "website",
    images: shareImage(),
  },
  twitter: {
    card: "summary_large_image",
    title: OG_TITLE,
    description: OG_DESCRIPTION,
    images: shareImage()[0].url,
  },
};

const whoFor = [
  "Youth pitchers ages 8–16",
  "Parents, coaches, travel teams, and schools",
  "Naples, Collier County, and SWFL",
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
          <p className="ui-chip px-3.5 py-1.5">Naples · SWFL · ages 8–16</p>
          <h1 className="ui-title ui-title-lg">
            Youth pitching lessons in Naples, FL
          </h1>
          <p className="text-lg leading-relaxed text-ink-soft">
            {ABOUT_INTRO} {ABOUT_MORE}
          </p>
          <Link href={ENROLL_HREF} className="btn">
            {ENROLL_LABEL}
          </Link>
        </Reveal>

        <Reveal className="mt-12 space-y-5">
          <h2 className="ui-title ui-title-sm">Who it&apos;s for</h2>
          <ul className="bb-chip-row">
            {whoFor.map((item) => (
              <li key={item} className="bb-chip">
                {item}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="mt-12 space-y-5">
          <h2 className="ui-title ui-title-sm">How we train</h2>
          <p className="text-ink-soft">{HOW_WE_TRAIN_LINE}</p>
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
          <h2 className="ui-title ui-title-sm">Questions</h2>
          <FaqList items={faqs} />
        </Reveal>

        <Reveal className="mt-12 space-y-4">
          <p className="text-ink-soft">{RESPONSE_PROMISE}</p>
          <Link href={ENROLL_HREF} className="btn">
            {ENROLL_LABEL}
          </Link>
        </Reveal>

        <p className="mt-10 text-sm text-ink-soft">
          Serving Naples &amp; SWFL · Pitching101
        </p>
      </article>
    </ParkSky>
  );
}
