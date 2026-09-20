import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import TrustStrip from "@/components/TrustStrip";
import ContactCtas from "@/components/ContactCtas";

export const metadata: Metadata = {
  title: "Youth Pitching Lessons in Naples, FL",
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
    title: "Youth Pitching Lessons in Naples, FL | Pitching101",
    description:
      "Youth pitching lessons in Naples, FL — clear feedback, local focus.",
    type: "website",
  },
};

const whoFor = [
  "Parents who want plain-English coaching",
  "Youth pitchers (ages 8–14)",
  "Naples & SWFL families",
];

const offers = [
  { label: "In-person Naples lessons", note: "Local sessions. Text first." },
  { label: "PDF product", note: "Simple plan at home. Coming soon." },
  { label: "Virtual lessons", note: "Live coaching online. Coming soon." },
];

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
            src="/assets/pixel-pitcher.gif"
            alt="Pixel art pitcher delivery"
            width={72}
            height={72}
            className="h-[72px] w-[72px]"
            style={{ imageRendering: "pixelated" }}
            unoptimized
          />
        </div>
        <p className="ui-chip px-3.5 py-1.5">Naples · SWFL</p>
        <h1 className="ui-title ui-title-lg">
          Youth pitching lessons in Naples, FL
        </h1>
        <p className="text-lg leading-relaxed text-ink-soft">
          Clear coaching for ages 8–14. No jargon.
        </p>
        <ContactCtas mailtoSubject="Youth pitching lessons in Naples, FL" />
      </Reveal>

      <Reveal className="mt-8" delayMs={60}>
        <TrustStrip />
      </Reveal>

      <Reveal className="mt-10 space-y-3">
        <h2 className="ui-title ui-title-sm text-blue-dark">Who this is for</h2>
        <ul className="space-y-2 text-ink-soft">
          {whoFor.map((item) => (
            <li key={item} className="flex gap-2">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue" aria-hidden />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </Reveal>

      <Reveal className="mt-10 space-y-3">
        <h2 className="ui-title ui-title-sm text-blue-dark">Offers</h2>
        <ul className="grid gap-3 sm:grid-cols-3">
          {offers.map((item) => (
            <li key={item.label} className="ui-card p-4">
              <p className="text-sm font-semibold text-blue-dark">{item.label}</p>
              <p className="mt-1 text-sm text-ink-soft">{item.note}</p>
            </li>
          ))}
        </ul>
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
          <div className="mt-5">
            <ContactCtas mailtoSubject="Youth pitching lessons in Naples, FL" />
          </div>
        </section>
      </Reveal>

      <p className="mt-10 text-sm text-ink-soft">
        Serving Naples &amp; SWFL · Pitching101
      </p>
    </article>
  );
}
