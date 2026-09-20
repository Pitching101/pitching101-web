import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import ParkSky from "@/components/ParkSky";

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
          <h1 className="ui-title ui-title-lg">Let&apos;s get your kid on the mound</h1>
          <p className="text-lg leading-relaxed text-ink-soft">
            Want youth pitching lessons in Naples, FL? Text or call. I&apos;ll tell
            you if we&apos;re a fit before you drive.
          </p>
          <p className="text-base text-ink-soft">Coach Nick · ages 8–14 · Naples, FL</p>

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
            No street address listed — text, call, or email first and I&apos;ll
            point you to the field.
          </p>
        </Reveal>
      </article>
    </ParkSky>
  );
}
