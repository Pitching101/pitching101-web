import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import ParkSky from "@/components/ParkSky";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Pitching101 for youth pitching lessons in Naples, FL. Call or text 845-768-2211 or email nickdeisng@gmail.com.",
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
          <h1 className="ui-title ui-title-lg">Come find me</h1>
          <p className="text-lg leading-relaxed text-ink-soft">
            Want pitching help for your kid? Text or call. I&apos;ll keep it simple.
          </p>
          <p className="text-base text-ink-soft">Naples, FL</p>

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
          </ul>

          <p className="pt-2 text-sm text-ink-soft">
            No street address listed — text, call, or email first.
          </p>
        </Reveal>
      </article>
    </ParkSky>
  );
}
