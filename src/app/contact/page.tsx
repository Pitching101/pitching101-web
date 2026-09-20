import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import ParkSky from "@/components/ParkSky";
import { INSTAGRAM_HANDLE, INSTAGRAM_URL } from "@/data/siteCopy";

export const metadata: Metadata = {
  title: "Book youth pitching lessons in Naples, FL",
  description:
    "Text or call 845-768-2211 to start Pitching101 youth pitching lessons in Naples, FL. Coach Nick. Ages 8-14. Email nickdeisng@gmail.com.",
  alternates: { canonical: "/contact/" },
};

export default function ContactPage() {
  return (
    <ParkSky tone="park">
      <article className="park-page park-page-fence">
        <Reveal className="space-y-5">
          <p className="text-base font-semibold text-blue-dark">
            <Link href="/" className="hover:underline">
              ← Home
            </Link>
          </p>
          <h1 className="ui-title ui-title-lg">Let&apos;s throw</h1>
          <p className="text-lg leading-relaxed text-ink-soft">
            Text me. I&apos;ll tell you if we&apos;re a fit.
          </p>
          <ul className="bb-chip-row">
            <li className="bb-chip">Coach Nick</li>
            <li className="bb-chip">Ages 8–14</li>
            <li className="bb-chip">Naples, FL</li>
          </ul>

          <div className="home-cta-row pt-2">
            <a href="sms:8457682211" className="btn">
              Get your child started
            </a>
          </div>
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
