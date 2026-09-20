import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import ContactCtas from "@/components/ContactCtas";
import Logo from "@/components/Logo";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Pitching101 for youth pitching lessons in Naples, FL. Text or call 845-768-2211 or email nickdeisng@gmail.com.",
};

export default function ContactPage() {
  return (
    <article className="mx-auto max-w-3xl px-5 py-12 sm:px-8 sm:py-16">
      <Reveal className="space-y-6">
        <p className="text-base font-semibold text-blue-dark">
          <Link href="/" className="hover:underline">
            ← Home
          </Link>
        </p>
        <Logo variant="on-white" height={44} />
        <p className="ui-chip px-3.5 py-1.5">Naples, FL</p>
        <h1 className="ui-title ui-title-lg">Contact</h1>
        <p className="text-lg leading-relaxed text-ink-soft">
          Text, call, or email. No street address listed — reach out before you drive.
        </p>
        <p className="text-sm font-semibold text-blue-dark">
          Text or Call 845-768-2211
        </p>
        <ContactCtas mailtoSubject="Pitching101 — Naples FL" />
        <div className="space-y-2 border-t border-blue/15 pt-8 text-base text-ink-soft">
          <p>
            <a className="font-semibold text-blue-dark hover:underline" href="tel:8457682211">
              Call 845-768-2211
            </a>
          </p>
          <p>
            <a className="font-semibold text-blue-dark hover:underline" href="sms:8457682211">
              Text 845-768-2211
            </a>
          </p>
          <p>
            <a
              className="font-semibold text-blue-dark hover:underline"
              href="mailto:nickdeisng@gmail.com"
            >
              nickdeisng@gmail.com
            </a>
          </p>
          <p className="pt-2">Naples, FL area · Pitching101</p>
        </div>
      </Reveal>
    </article>
  );
}
