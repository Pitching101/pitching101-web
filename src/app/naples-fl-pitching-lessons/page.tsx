import type { Metadata } from "next";
import Link from "next/link";
import PixelBall from "@/components/PixelBall";
import TrustStrip from "@/components/TrustStrip";

export const metadata: Metadata = {
  title: "Youth Pitching Lessons Naples FL",
  description:
    "Youth pitching lessons in Naples, Florida for ages 8–14 and parents across Collier County. Parent-friendly coaching from Pitching101 — call 845-768-2211 or email nickdeisng@gmail.com.",
  keywords: [
    "youth pitching lessons Naples FL",
    "Naples FL pitching lessons",
    "pitching coach Naples Florida",
    "youth baseball pitching Collier County",
    "Pitching101 Naples",
  ],
  openGraph: {
    title: "Youth Pitching Lessons Naples FL | Pitching101",
    description:
      "Youth pitching lessons for Naples, FL ages 8–14 and Collier County parents — clear feedback, local focus.",
    type: "website",
  },
};

export default function NaplesPitchingLessonsPage() {
  return (
    <article className="mx-auto max-w-3xl px-5 py-12 sm:px-8 sm:py-16">
      <p className="font-pixel-ui text-base font-semibold text-blue-light">
        <Link href="/" className="hover:text-accent hover:underline">
          ← Back to Pitching101 home
        </Link>
      </p>

      <div className="mt-6 inline-flex">
        <span className="pixel-icon-frame p-1" aria-hidden="true">
          <PixelBall size={36} />
        </span>
      </div>

      <p className="pixel-chip mt-5 px-3 py-1.5">Naples · Collier County</p>

      <h1 className="pixel-title pixel-title-lg mt-5">
        Youth pitching lessons Naples FL — game on
      </h1>

      <p className="mt-6 text-lg leading-relaxed text-ink-soft">
        Looking for{" "}
        <strong className="text-ink">
          youth pitching lessons in Naples, Florida
        </strong>
        ? Pitching101 works with local families who want straightforward
        coaching — the kind you can explain at the dinner table. We help young
        pitchers build healthy habits, cleaner mechanics, and real confidence
        on the mound. Fun for the kid. Clear for the parent.
      </p>

      <div className="mt-10">
        <TrustStrip />
      </div>

      <section className="mt-12 space-y-4">
        <h2 className="pixel-title pixel-title-sm text-blue-light">
          Who’s on the roster
        </h2>
        <p className="leading-relaxed text-ink-soft">
          Built for{" "}
          <strong className="text-ink">youth pitchers ages 8–14</strong>, their
          parents, and families across{" "}
          <strong className="text-ink">Collier County</strong> and the wider
          Naples, FL area. Whether your kid is brand-new on the mound or already
          throwing travel ball, we keep the feedback plain and the arm-care
          habits front and center.
        </p>
        <ul className="space-y-3 text-ink-soft">
          <li className="flex gap-3">
            <span className="mt-1 text-accent" aria-hidden="true">
              ■
            </span>
            <span>
              <strong className="text-ink">Ages 8–14</strong> — age-right
              progress, not one-size-fits-all drills.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="mt-1 text-accent" aria-hidden="true">
              ■
            </span>
            <span>
              <strong className="text-ink">Parents</strong> — you’ll always know
              what your pitcher is working on and why.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="mt-1 text-accent" aria-hidden="true">
              ■
            </span>
            <span>
              <strong className="text-ink">Collier County / Naples FL</strong> —
              local focus plus Stan video, PDF charts, and virtual check-ins
              when schedules get busy.
            </span>
          </li>
        </ul>
      </section>

      <section className="mt-12 space-y-4">
        <h2 className="pixel-title pixel-title-sm text-blue-light">
          Why Naples parents press start with Pitching101
        </h2>
        <ul className="space-y-3 text-ink-soft">
          <li className="flex gap-3">
            <span className="mt-1 text-accent" aria-hidden="true">
              ■
            </span>
            <span>
              <strong className="text-ink">Local Naples focus</strong> —
              instruction built around Southwest Florida schedules, seasons, and
              travel ball realities.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="mt-1 text-accent" aria-hidden="true">
              ■
            </span>
            <span>
              <strong className="text-ink">Parent-friendly language</strong> —
              you always know what your pitcher is working on and why.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="mt-1 text-accent" aria-hidden="true">
              ■
            </span>
            <span>
              <strong className="text-ink">Flexible formats</strong> — in-area
              lessons plus Stan video feedback, PDF charts, and virtual
              check-ins when life gets busy.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="mt-1 text-accent" aria-hidden="true">
              ■
            </span>
            <span>
              <strong className="text-ink">Camps &amp; clinics energy</strong> —
              serious about pitching, still welcoming for kids and teens.
            </span>
          </li>
        </ul>
      </section>

      <section className="mt-12 space-y-4">
        <h2 className="pixel-title pixel-title-sm text-blue-light">
          What a solid session looks like here
        </h2>
        <p className="leading-relaxed text-ink-soft">
          A strong session in Naples isn’t about throwing harder for five
          minutes and calling it a day. We watch how your pitcher moves, explain
          the fix in plain English, and leave a simple practice plan. For youth
          arms ages 8–14, the goal is safer throws, clearer command, and
          confidence on the mound.
        </p>
        <p className="leading-relaxed text-ink-soft">
          Searching for <em>youth pitching lessons Naples FL</em>,{" "}
          <em>Naples FL pitching coach</em>, or{" "}
          <em>Collier County baseball pitching</em>? You’re in the right place.
          Pitching101 is building its Naples home base for families across
          Collier County and nearby communities.
        </p>
      </section>

      <section className="pixel-card mt-12 p-7 sm:p-9">
        <h2 className="pixel-title pixel-title-sm text-accent">
          Ready to load in? Book a Naples chat
        </h2>
        <p className="mt-3 leading-relaxed text-ink-soft">
          No public street address — call or email first and we’ll help you
          choose Stan video feedback, a PDF chart, a virtual lesson, or an
          in-area session.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a href="tel:8457682211" className="pixel-btn">
            Call coach 845-768-2211
          </a>
          <a
            href="mailto:nickdeisng@gmail.com?subject=Youth%20pitching%20lessons%20Naples%20FL"
            className="pixel-btn-ghost"
          >
            Email nickdeisng@gmail.com
          </a>
          <Link
            href="/#programs"
            className="font-pixel-ui px-2 py-2.5 text-base font-semibold text-accent underline-offset-4 hover:underline"
          >
            See program paths →
          </Link>
        </div>
      </section>

      <p className="mt-12 font-pixel-ui text-sm text-ink-soft">
        Serving Naples &amp; Collier County, FL · Pitching101
      </p>
    </article>
  );
}
