import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import ParkSky from "@/components/ParkSky";
import StartThanksActions from "@/components/StartThanksActions";
import StartSteps from "@/components/StartSteps";
import SessionBeats from "@/components/SessionBeats";
import { ENROLL_LABEL, RESPONSE_PROMISE, trainingOptions } from "@/data/siteCopy";

export const metadata: Metadata = {
  title: "Thanks — we'll respond within 24 business hours",
  description:
    "Thanks for booking an evaluation with Pitching101. We'll respond within 24 business hours. Ages 8-16 in Naples, FL.",
  alternates: { canonical: "/contact/thanks/" },
  robots: { index: false, follow: false },
};

export default function StartThanksPage() {
  return (
    <ParkSky tone="park">
      <article className="park-page park-page-start">
        <Reveal className="space-y-5">
          <p className="text-base font-semibold text-blue-dark">
            <Link href="/contact/" className="hover:underline">
              ← {ENROLL_LABEL}
            </Link>
          </p>
          <h1 className="ui-title ui-title-lg">Thanks.</h1>
          <p className="text-lg leading-relaxed text-ink-soft">
            {RESPONSE_PROMISE}
          </p>
          <StartThanksActions />
        </Reveal>

        <Reveal delayMs={30} className="mt-12 space-y-5">
          <h2 className="ui-title ui-title-sm">What happens next</h2>
          <StartSteps />
        </Reveal>

        <Reveal delayMs={50} className="mt-12 space-y-5">
          <h2 className="ui-title ui-title-sm">The evaluation</h2>
          <SessionBeats />
        </Reveal>

        <Reveal delayMs={70} className="mt-12 space-y-5">
          <h2 className="ui-title ui-title-sm">Packs after</h2>
          <ul className="dugout-row">
            {trainingOptions.map((item) => (
              <li key={item.label} className="dugout-sign">
                <h3 className="dugout-sign-title">{item.label}</h3>
                <p className="dugout-sign-note">{item.note}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </article>
    </ParkSky>
  );
}
