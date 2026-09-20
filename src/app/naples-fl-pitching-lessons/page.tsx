import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import ParkSky from "@/components/ParkSky";

export const metadata: Metadata = {
  title: "Youth pitching lessons in Naples, FL",
  description:
    "Youth pitching lessons in Naples, FL for ages 8–14 and SWFL parents. Text or call 845-768-2211 or email nickdeisng@gmail.com.",
  keywords: [
    "youth pitching lessons in Naples FL",
    "Naples FL pitching lessons",
    "pitching coach Naples Florida",
    "youth baseball pitching Collier County",
    "Pitching101 Naples",
  ],
  openGraph: {
    title: "Youth pitching lessons in Naples, FL | Pitching101",
    description:
      "Youth pitching lessons in Naples, FL — I help kids throw more strikes.",
    type: "website",
  },
};

const whoFor = [
  "Parents who want plain-English coaching",
  "Youth pitchers (ages 8–14)",
  "Naples & SWFL families",
];

const offers = [
  {
    label: "In-person Naples lessons",
    note: "Local sessions. Reach out first.",
  },
  {
    label: "Pitching PDF",
    note: "Simple plan at home.",
  },
  {
    label: "Virtual lessons",
    note: "Live coaching online.",
  },
];

export default function NaplesPitchingLessonsPage() {
  return (
    <ParkSky tone="park">
      <article className="park-page">
        <Reveal className="space-y-5">
          <p className="text-base font-semibold text-blue-dark">
            <Link href="/" className="hover:underline">
              ← Home
            </Link>
          </p>
          <p className="ui-chip px-3.5 py-1.5">Naples · SWFL</p>
          <h1 className="ui-title ui-title-lg">
            Youth pitching lessons in Naples, FL
          </h1>
          <p className="text-lg leading-relaxed text-ink-soft">
            I help kids throw more strikes. Parents get a plan they can actually use.
          </p>
          <Link href="/contact/" className="btn">
            Get your child started
          </Link>
        </Reveal>

        <Reveal className="mt-12 space-y-5">
          <h2 className="ui-title ui-title-sm">Who this is for</h2>
          <ul className="mx-auto max-w-md space-y-3 text-left text-lg leading-relaxed text-ink-soft">
            {whoFor.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="mt-12 space-y-5">
          <h2 className="ui-title ui-title-sm">Ways to start</h2>
          <ul className="dugout-row">
            {offers.map((item) => (
              <li key={item.label} className="dugout-sign">
                <h3 className="dugout-sign-title">{item.label}</h3>
                <p className="dugout-sign-note">{item.note}</p>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="mt-12 space-y-4">
          <p className="text-ink-soft">
            No street address listed. Text, call, or email first.
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
