import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import ParkSky from "@/components/ParkSky";
import StartForm from "@/components/StartForm";
import StartSteps from "@/components/StartSteps";
import { INSTAGRAM_HANDLE, INSTAGRAM_URL } from "@/data/siteCopy";

export const metadata: Metadata = {
  title: "Book youth pitching lessons in Naples, FL",
  description:
    "Fill in a short note or text 845-768-2211 to start Pitching101 youth pitching lessons in Naples, FL. Coach Nick. Ages 8-14.",
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
          <h1 className="ui-title ui-title-lg">Let&apos;s throw</h1>
          <p className="text-lg leading-relaxed text-ink-soft">
            Tell me the kid. I&apos;ll text you back.
          </p>
          <ul className="bb-chip-row">
            <li className="bb-chip">Coach Nick</li>
            <li className="bb-chip">Ages 8–14</li>
            <li className="bb-chip">Naples, FL</li>
          </ul>
        </Reveal>

        <Reveal delayMs={40} className="mt-10 space-y-5">
          <h2 className="ui-title ui-title-sm">What happens</h2>
          <StartSteps />
        </Reveal>

        <Reveal delayMs={60} className="mt-10 space-y-5">
          <h2 className="ui-title ui-title-sm">Get started</h2>
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
