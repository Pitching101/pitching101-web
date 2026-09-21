import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import ParkSky from "@/components/ParkSky";
import StartForm from "@/components/StartForm";
import StartSteps from "@/components/StartSteps";
import SessionBeats from "@/components/SessionBeats";
import WorkWith from "@/components/WorkWith";
import { INSTAGRAM_HANDLE, INSTAGRAM_URL, trainingOptions } from "@/data/siteCopy";

export const metadata: Metadata = {
  title: "Book youth pitching lessons in Naples, FL",
  description:
    "Fill in a short note or text 845-768-2211 to start Pitching101 youth pitching lessons in Naples, FL. Ages 8-14. Families, travel teams, coaches, and schools.",
  alternates: { canonical: "/contact/" },
};

export default function ContactPage() {
  return (
    <ParkSky tone="park">
      <article className="park-page park-page-start">
        <Reveal className="space-y-5">
          <p className="text-base font-semibold text-blue-dark">
            <Link href="/" className="hover:underline">
              ← Home
            </Link>
          </p>
          <h1 className="ui-title ui-title-lg">Get started</h1>
          <p className="text-lg leading-relaxed text-ink-soft">
            Kids 8–14. Tell me who you are. I&apos;ll text you back.
          </p>
          <ul className="bb-chip-row">
            <li className="bb-chip">Coach Nick</li>
            <li className="bb-chip">Ages 8–14</li>
            <li className="bb-chip">Naples, FL</li>
          </ul>
        </Reveal>

        <Reveal delayMs={20} className="mt-10 space-y-5">
          <h2 className="ui-title ui-title-sm">Who I work with</h2>
          <WorkWith />
        </Reveal>

        <Reveal delayMs={30} className="mt-10 space-y-5">
          <h2 className="ui-title ui-title-sm">How we train</h2>
          <ul className="dugout-row">
            {trainingOptions.map((item) => (
              <li key={item.label} className="dugout-sign">
                <h3 className="dugout-sign-title">{item.label}</h3>
                <p className="dugout-sign-note">{item.note}</p>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delayMs={40} className="mt-10 space-y-5">
          <h2 className="ui-title ui-title-sm">What happens</h2>
          <StartSteps />
        </Reveal>

        <Reveal delayMs={50} className="mt-10 space-y-5">
          <h2 className="ui-title ui-title-sm">First session</h2>
          <SessionBeats />
        </Reveal>

        <Reveal delayMs={60} className="mt-10 space-y-5">
          <h2 className="ui-title ui-title-sm">Send a note</h2>
          <StartForm />
        </Reveal>

        <Reveal delayMs={80} className="mt-10">
          <ul className="fence-links">
            <li>
              <a className="footer-link" href="tel:8457682211">
                Call 845-768-2211
              </a>
            </li>
            <li>
              <a className="footer-link" href="sms:8457682211">
                Text 845-768-2211
              </a>
            </li>
            <li>
              <a className="footer-link" href="mailto:nickdeisng@gmail.com">
                Email nickdeisng@gmail.com
              </a>
            </li>
            <li>
              <a
                className="footer-link"
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram @{INSTAGRAM_HANDLE}
              </a>
            </li>
          </ul>
        </Reveal>
      </article>
    </ParkSky>
  );
}
