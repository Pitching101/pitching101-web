import type { Metadata } from "next";
import Link from "next/link";

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
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <p className="text-sm font-medium text-blue">
        <Link href="/" className="hover:underline">
          ← Back to Pitching101 home
        </Link>
      </p>

      <h1 className="mt-4 text-4xl font-bold tracking-tight text-blue-dark">
        Naples FL pitching lessons for youth &amp; elite arms
      </h1>

      <p className="mt-6 text-lg leading-relaxed text-blue-dark/80">
        Looking for{" "}
        <strong>pitching lessons in Naples, Florida</strong>? Pitching101 works
        with local families who want straightforward coaching — the kind you can
        explain at the dinner table. We help youth pitchers build healthy habits
        and support elite arms that need sharper command and cleaner mechanics.
      </p>

      <section className="mt-10 space-y-4">
        <h2 className="text-2xl font-semibold text-blue-dark">
          Why Naples parents choose Pitching101
        </h2>
        <ul className="list-disc space-y-2 pl-5 text-blue-dark/80">
          <li>
            <strong>Local Naples focus</strong> — instruction built around
            Southwest Florida schedules, seasons, and travel ball realities.
          </li>
          <li>
            <strong>Parent-friendly language</strong> — you always know what
            your pitcher is working on and why.
          </li>
          <li>
            <strong>Flexible formats</strong> — in-area lessons plus Stan video
            feedback, PDF plans, and virtual check-ins when life gets busy.
          </li>
          <li>
            <strong>Camps &amp; clinics energy</strong> — serious about
            pitching, still welcoming for kids and teens.
          </li>
        </ul>
      </section>

      <section className="mt-10 space-y-4">
        <h2 className="text-2xl font-semibold text-blue-dark">
          What “good pitching lessons” look like here
        </h2>
        <p className="leading-relaxed text-blue-dark/80">
          A strong session in Naples isn’t about throwing harder for five
          minutes and calling it a day. We watch how your pitcher moves, explain
          the fix in plain English, and leave a simple practice plan. Whether
          it’s a first-year youth arm or a high-level high school pitcher, the
          goal is the same: safer throws, clearer command, and confidence on
          the mound.
        </p>
        <p className="leading-relaxed text-blue-dark/80">
          Searching for{" "}
          <em>Naples FL pitching coach</em>,{" "}
          <em>youth pitching lessons Naples</em>, or{" "}
          <em>elite pitching instruction Naples Florida</em>? You’re in the
          right place. Pitching101 is building its Naples home base for families
          across Collier County and nearby communities.
        </p>
      </section>

      <section className="mt-10 rounded-2xl bg-blue-soft p-6 ring-1 ring-blue-light sm:p-8">
        <h2 className="text-xl font-semibold text-blue-dark">
          Book a Naples pitching conversation
        </h2>
        <p className="mt-2 text-blue-dark/80">
          No public street address yet — reach out and we’ll help you choose
          Stan video feedback, a PDF plan, a virtual lesson, or an in-area
          session.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <a
            href="tel:8457682211"
            className="rounded-full bg-blue px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-dark"
          >
            Call 845-768-2211
          </a>
          <a
            href="mailto:nickdeisng@gmail.com?subject=Naples%20FL%20pitching%20lessons"
            className="rounded-full border border-blue bg-white px-5 py-2.5 text-sm font-semibold text-blue hover:bg-white/80"
          >
            Email nickdeisng@gmail.com
          </a>
          <Link
            href="/#programs"
            className="rounded-full px-5 py-2.5 text-sm font-semibold text-blue-dark underline-offset-4 hover:underline"
          >
            See program paths →
          </Link>
        </div>
      </section>

      <p className="mt-10 text-sm text-blue-dark/60">
        Serving the Naples, FL area · Pitching101
      </p>
    </article>
  );
}
