import type { Metadata } from "next";
import Link from "next/link";
import PixelBall from "@/components/PixelBall";

export const metadata: Metadata = {
  title: "Naples FL Pitching Lessons",
  description:
    "Local pitching lessons in Naples, Florida for youth and elite players. Parent-friendly coaching from Pitching101 — call 845-768-2211 or email nickdeisng@gmail.com.",
  keywords: [
    "Naples FL pitching lessons",
    "pitching coach Naples Florida",
    "youth baseball pitching Naples",
    "elite pitching lessons Naples FL",
    "Pitching101 Naples",
  ],
  openGraph: {
    title: "Naples FL Pitching Lessons | Pitching101",
    description:
      "Youth and elite pitching instruction for Naples, Florida families — clear feedback, local focus.",
    type: "website",
  },
};

export default function NaplesPitchingLessonsPage() {
  return (
    <article className="mx-auto max-w-3xl px-5 py-14 sm:px-8 sm:py-20">
      <p className="text-sm font-medium text-blue">
        <Link href="/" className="hover:underline">
          ← Back to Pitching101 home
        </Link>
      </p>

      <div className="mt-6 inline-flex">
        <span className="pixel-icon-frame p-1" aria-hidden="true">
          <PixelBall size={36} />
        </span>
      </div>

      <h1 className="mt-5 text-4xl font-bold tracking-tight text-ink sm:leading-[1.15]">
        Naples FL pitching lessons for youth &amp; elite arms
      </h1>

      <p className="mt-7 text-lg leading-relaxed text-ink-soft">
        Looking for <strong className="text-ink">pitching lessons in Naples, Florida</strong>?
        Pitching101 works with local families who want straightforward coaching
        — the kind you can explain at the dinner table. We help youth pitchers
        build healthy habits and support elite arms that need sharper command
        and cleaner mechanics.
      </p>

      <section className="mt-12 space-y-4">
        <h2 className="text-2xl font-semibold text-ink">
          Why Naples parents choose Pitching101
        </h2>
        <ul className="space-y-3 text-ink-soft">
          <li className="flex gap-3">
            <span className="mt-1 text-blue" aria-hidden="true">
              ▢
            </span>
            <span>
              <strong className="text-ink">Local Naples focus</strong> —
              instruction built around Southwest Florida schedules, seasons, and
              travel ball realities.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="mt-1 text-blue" aria-hidden="true">
              ▢
            </span>
            <span>
              <strong className="text-ink">Parent-friendly language</strong> —
              you always know what your pitcher is working on and why.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="mt-1 text-blue" aria-hidden="true">
              ▢
            </span>
            <span>
              <strong className="text-ink">Flexible formats</strong> — in-area
              lessons plus Stan video feedback, PDF plans, and virtual check-ins
              when life gets busy.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="mt-1 text-blue" aria-hidden="true">
              ▢
            </span>
            <span>
              <strong className="text-ink">Camps &amp; clinics energy</strong> —
              serious about pitching, still welcoming for kids and teens.
            </span>
          </li>
        </ul>
      </section>

      <section className="mt-12 space-y-4">
        <h2 className="text-2xl font-semibold text-ink">
          What “good pitching lessons” look like here
        </h2>
        <p className="leading-relaxed text-ink-soft">
          A strong session in Naples isn’t about throwing harder for five
          minutes and calling it a day. We watch how your pitcher moves, explain
          the fix in plain English, and leave a simple practice plan. Whether
          it’s a first-year youth arm or a high-level high school pitcher, the
          goal is the same: safer throws, clearer command, and confidence on the
          mound.
        </p>
        <p className="leading-relaxed text-ink-soft">
          Searching for <em>Naples FL pitching coach</em>,{" "}
          <em>youth pitching lessons Naples</em>, or{" "}
          <em>elite pitching instruction Naples Florida</em>? You’re in the
          right place. Pitching101 is building its Naples home base for families
          across Collier County and nearby communities.
        </p>
      </section>

      <section className="wabi-card mt-12 p-7 sm:p-9">
        <h2 className="text-xl font-semibold text-ink">
          Book a Naples pitching conversation
        </h2>
        <p className="mt-3 leading-relaxed text-ink-soft">
          No public street address yet — reach out and we’ll help you choose
          Stan video feedback, a PDF plan, a virtual lesson, or an in-area
          session.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a href="tel:8457682211" className="pixel-btn">
            Call 845-768-2211
          </a>
          <a
            href="mailto:nickdeisng@gmail.com?subject=Naples%20FL%20pitching%20lessons"
            className="pixel-btn-ghost"
          >
            Email nickdeisng@gmail.com
          </a>
          <Link
            href="/#programs"
            className="px-2 py-2.5 text-sm font-semibold text-blue-dark underline-offset-4 hover:underline"
          >
            See program paths →
          </Link>
        </div>
      </section>

      <p className="mt-12 text-sm text-ink-soft/80">
        Serving the Naples, FL area · Pitching101
      </p>
    </article>
  );
}
