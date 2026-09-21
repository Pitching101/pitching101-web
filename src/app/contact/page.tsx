import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import ParkSky from "@/components/ParkSky";
import StartForm from "@/components/StartForm";
import { ENROLL_LABEL, RESPONSE_PROMISE, pageTitle, shareImage } from "@/data/siteCopy";

export const metadata: Metadata = {
  title: ENROLL_LABEL,
  description:
    "Book an evaluation with Coach Deising. Send age, goals, and schedule. We'll respond within 24 business hours. Ages 8-16 in Naples, FL.",
  alternates: { canonical: "/contact/" },
  openGraph: {
    title: pageTitle(ENROLL_LABEL),
    description:
      "Book an evaluation with Coach Deising. Send age, goals, and schedule. We'll respond within 24 business hours. Ages 8-16 in Naples, FL.",
    url: "/contact/",
    images: shareImage("/og/contact.png", "Book an evaluation with Pitching101"),
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle(ENROLL_LABEL),
    description:
      "Book an evaluation with Coach Deising. Send age, goals, and schedule. We'll respond within 24 business hours. Ages 8-16 in Naples, FL.",
    images: ["/og/contact.png"],
  },
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
          <h1 className="ui-title ui-title-lg">{ENROLL_LABEL}</h1>
          <p className="text-lg leading-relaxed text-ink-soft">
            One visit. We talk about your kid, then I recommend a pack
            that fits. Kids 8–16. {RESPONSE_PROMISE}
          </p>
        </Reveal>

        <Reveal delayMs={20} className="mt-8">
          <StartForm />
        </Reveal>
      </article>
    </ParkSky>
  );
}
