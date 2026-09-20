import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PixelBall from "@/components/PixelBall";
import TrustStrip from "@/components/TrustStrip";
import Reveal from "@/components/Reveal";
import ArcadeHud from "@/components/ArcadeHud";

export const metadata: Metadata = {
  title: "Youth Pitching Lessons Naples FL",
  description:
    "Youth pitching lessons in Naples, Florida for ages 8–14 and parents across Collier County. Parent-friendly coaching from Pitching101 — text or call 845-768-2211 or email nickdeisng@gmail.com.",
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
    <>
      <section className="section-yellow">
        <div className="mx-auto max-w-3xl px-5 py-12 sm:px-8 sm:py-16">
          <Reveal>
            <p className="font-pixel-ui text-base font-semibold">
              <Link href="/" className="text-accent-ink hover:underline">
                ← Back to Pitching101 home
              </Link>
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-4">
              <span className="pixel-icon-frame p-1" aria-hidden="true">
                <PixelBall size={36} />
              </span>
              <div className="pixel-gif-frame !p-1">
                <Image
                  src="/assets/pixel-runner.gif"
                  alt="Pixel runner on yellow field"
                  width={96}
                  height={72}
                  className="pixel-gif !max-w-[96px] !border-0 !shadow-none"
                  unoptimized
                />
              </div>
            </div>

            <p className="pixel-chip mt-5 px-3 py-1.5">Naples · Collier County</p>

            <h1 className="pixel-title pixel-title-lg mt-5">
              Youth pitching lessons Naples FL — game on
            </h1>

            <p className="mt-6 text-lg leading-relaxed">
              Looking for{" "}
              <strong>
                youth pitching lessons in Naples, Florida
              </strong>
              ? Pitching101 works with local families who want straightforward
              coaching — the kind you can explain at the dinner table. We help young
              pitchers build healthy habits, cleaner mechanics, and real confidence
              on the mound. Fun for the kid. Clear for the parent.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-navy">
        <div className="mx-auto max-w-3xl px-5 py-10 sm:px-8">
          <Reveal delayMs={80}>
            <ArcadeHud />
          </Reveal>
          <Reveal className="mt-10" delayMs={100}>
            <TrustStrip />
          </Reveal>
        </div>
      </section>

      <section className="section-navy border-t-0">
        <div className="mx-auto max-w-3xl space-y-12 px-5 pb-12 sm:px-8 sm:pb-16">
          <Reveal className="space-y-4">
            <h2 className="pixel-title pixel-title-sm text-yellow">
              Who’s on the roster
            </h2>
            <p className="leading-relaxed text-navy-ink-soft">
              Built for{" "}
              <strong className="text-navy-ink">youth pitchers ages 8–14</strong>, their
              parents, and families across{" "}
              <strong className="text-navy-ink">Collier County</strong> and the wider
              Naples, FL area. Whether your kid is brand-new on the mound or already
              throwing travel ball, we keep the feedback plain and the arm-care
              habits front and center.
            </p>
            <ul className="space-y-3 text-navy-ink-soft">
              <li className="flex gap-3">
                <span className="mt-1 text-ball-lime" aria-hidden="true">■</span>
                <span>
                  <strong className="text-navy-ink">Ages 8–14</strong> — age-right
                  progress, not one-size-fits-all drills.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 text-ball-lime" aria-hidden="true">■</span>
                <span>
                  <strong className="text-navy-ink">Parents</strong> — you’ll always know
                  what your pitcher is working on and why.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 text-ball-lime" aria-hidden="true">■</span>
                <span>
                  <strong className="text-navy-ink">Collier County / Naples FL</strong> —
                  local focus plus Stan video, PDF charts, and virtual check-ins
                  when schedules get busy.
                </span>
              </li>
            </ul>
          </Reveal>

          <Reveal className="space-y-4">
            <h2 className="pixel-title pixel-title-sm text-yellow">
              Why Naples parents press start with Pitching101
            </h2>
            <ul className="space-y-3 text-navy-ink-soft">
              <li className="flex gap-3">
                <span className="mt-1 text-red" aria-hidden="true">■</span>
                <span>
                  <strong className="text-navy-ink">Local Naples focus</strong> —
                  instruction built around Southwest Florida schedules, seasons, and
                  travel ball realities.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 text-red" aria-hidden="true">■</span>
                <span>
                  <strong className="text-navy-ink">Parent-friendly language</strong> —
                  you always know what your pitcher is working on and why.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 text-red" aria-hidden="true">■</span>
                <span>
                  <strong className="text-navy-ink">Flexible formats</strong> — in-area
                  lessons plus Stan video feedback, PDF charts, and virtual
                  check-ins when life gets busy.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 text-red" aria-hidden="true">■</span>
                <span>
                  <strong className="text-navy-ink">Camps &amp; clinics energy</strong> —
                  serious about pitching, still welcoming for kids and teens.
                </span>
              </li>
            </ul>
          </Reveal>

          <Reveal className="space-y-4">
            <h2 className="pixel-title pixel-title-sm text-yellow">
              What a solid session looks like here
            </h2>
            <p className="leading-relaxed text-navy-ink-soft">
              A strong session in Naples isn’t about throwing harder for five
              minutes and calling it a day. We watch how your pitcher moves, explain
              the fix in plain English, and leave a simple practice plan. For youth
              arms ages 8–14, the goal is safer throws, clearer command, and
              confidence on the mound.
            </p>
            <p className="leading-relaxed text-navy-ink-soft">
              Searching for <em>youth pitching lessons Naples FL</em>,{" "}
              <em>Naples FL pitching coach</em>, or{" "}
              <em>Collier County baseball pitching</em>? You’re in the right place.
              Pitching101 is building its Naples home base for families across
              Collier County and nearby communities.
            </p>
            <div className="pixel-gif-frame mt-4 !bg-transparent">
              <Image
                src="/assets/pixel-pitcher.gif"
                alt="Pixel pitcher on green field with red stadium flags"
                width={220}
                height={165}
                className="pixel-gif !max-w-[220px]"
                unoptimized
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-yellow">
        <div className="mx-auto max-w-3xl px-5 py-12 sm:px-8 sm:py-16">
          <Reveal>
            <section className="pixel-card !border-accent-ink !bg-navy p-7 text-navy-ink sm:p-9">
              <h2 className="pixel-title pixel-title-sm text-yellow">
                Ready to load in? Book a Naples chat
              </h2>
              <p className="mt-3 leading-relaxed text-navy-ink-soft">
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
                  className="font-pixel-ui px-2 py-2.5 text-base font-semibold text-yellow underline-offset-4 hover:underline"
                >
                  See program paths →
                </Link>
              </div>
            </section>
          </Reveal>
          <p className="mt-12 font-pixel-ui text-sm text-accent-ink">
            Serving Naples &amp; Collier County, FL · Pitching101
          </p>
        </div>
      </section>
    </>
  );
}
