import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import Logo from "@/components/Logo";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Pitching101 for youth pitching lessons in Naples, FL. Call or text 845-768-2211 or email nickdeisng@gmail.com.",
};

export default function ContactPage() {
  return (
    <article className="mx-auto max-w-2xl px-5 py-14 sm:px-8 sm:py-20">
      <Reveal className="space-y-6">
        <p className="text-base font-semibold text-blue-dark">
          <Link href="/" className="hover:underline">
            ← Home
          </Link>
        </p>
        <Logo variant="primary" height={44} />
        <h1 className="ui-title ui-title-lg">Contact</h1>
        <p className="text-lg leading-relaxed text-ink-soft">
          Want pitching help for your kid? Reach out. We’ll keep it simple.
        </p>
        <p className="text-base text-ink-soft">Naples, FL</p>

        <ul className="space-y-4 pt-2 text-lg">
          <li>
            <a href="tel:8457682211" className="btn w-full sm:w-auto">
              Call 845-768-2211
            </a>
          </li>
          <li>
            <a href="sms:8457682211" className="btn w-full sm:w-auto">
              Text 845-768-2211
            </a>
          </li>
          <li>
            <a
              href="mailto:nickdeisng@gmail.com"
              className="btn-ghost w-full sm:w-auto"
            >
              Email nickdeisng@gmail.com
            </a>
          </li>
        </ul>

        <p className="pt-4 text-sm text-ink-soft">
          No street address listed — text, call, or email first.
        </p>
      </Reveal>
    </article>
  );
}
