import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import ParkSky from "@/components/ParkSky";
import {
  ENROLL_HREF,
  ENROLL_LABEL,
  RESPONSE_PROMISE,
  trainingOptions,
} from "@/data/siteCopy";

export const metadata: Metadata = {
  title: "Packages after an evaluation",
  description:
    "After an evaluation, Pitching101 uses a Monthly Strikes Pack or a Busy-Week Check-In. Book an evaluation first — no price menu on this page.",
  alternates: { canonical: "/packages/" },
};

export default function PackagesPage() {
  return (
    <ParkSky tone="park">
      <article className="park-page">
        <Reveal className="space-y-5">
          <p className="text-base font-semibold text-blue-dark">
            <Link href="/" className="hover:underline">
              ← Home
            </Link>
          </p>
          <p className="ui-chip px-3.5 py-1.5">After the evaluation</p>
          <h1 className="ui-title ui-title-lg">Packages</h1>
          <p className="text-lg leading-relaxed text-ink-soft">
            We don&apos;t hang a giant menu on the door. Book an evaluation.
            We meet once, talk plain English, then pick a pack that fits.
          </p>
          <Link href={ENROLL_HREF} className="btn">
            {ENROLL_LABEL}
          </Link>
        </Reveal>

        <Reveal className="mt-12 space-y-5">
          <ul className="dugout-row">
            {trainingOptions.map((item) => (
              <li key={item.label} className="dugout-sign">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.icon}
                  alt=""
                  width={64}
                  height={64}
                  className="card-icon"
                />
                <h2 className="dugout-sign-title">{item.label}</h2>
                <p className="dugout-sign-note">{item.note}</p>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="mt-12 space-y-4">
          <p className="text-lg leading-relaxed text-ink-soft">
            Monthly Strikes Pack is the main plan. Busy-Week Check-In is
            the add-on. Exact dollars come after we talk — not here.
          </p>
          <p className="text-ink-soft">{RESPONSE_PROMISE}</p>
          <Link href={ENROLL_HREF} className="btn">
            {ENROLL_LABEL}
          </Link>
        </Reveal>
      </article>
    </ParkSky>
  );
}
