import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import ParkSky from "@/components/ParkSky";
import StartForm from "@/components/StartForm";
import { GOOGLE_REVIEW_URL, INSTAGRAM_HANDLE, INSTAGRAM_URL, RESPONSE_PROMISE } from "@/data/siteCopy";

export const metadata: Metadata = {
  title: "Get started with youth pitching lessons",
  description:
    "Tell Coach Deising who you are. We'll respond within 24 business hours. Ages 8-16 in Naples, FL.",
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
            Kids 8–16. {RESPONSE_PROMISE}
          </p>
        </Reveal>

        <Reveal delayMs={20} className="mt-8">
          <StartForm />
        </Reveal>

        <Reveal delayMs={40} className="mt-10">
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
                href={GOOGLE_REVIEW_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Leave a Google review
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
