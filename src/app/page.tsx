import Link from "next/link";
import ArcadeHud from "@/components/ArcadeHud";
import PixelIcon from "@/components/PixelIcon";
import Reveal from "@/components/Reveal";
import ScrollBall from "@/components/ScrollBall";
import TrustStrip from "@/components/TrustStrip";

const programs = [
  {
    heading: "Stan video feedback for busy Naples weeks",
    blurb:
      "Send a throwing clip. Get clear, coach-level notes back — easy for kids, easy for parents. Like a save file for the mound.",
    cta: "Queue Stan feedback",
    href: "mailto:nickdeisng@gmail.com?subject=Stan%20video%20feedback",
    icon: "video" as const,
  },
  {
    heading: "PDF pitching chart you can follow at home",
    blurb:
      "A simple written chart your pitcher can follow between sessions — quality innings and throw-volume cues, no jargon boss fights.",
    cta: "Grab the PDF chart",
    href: "mailto:nickdeisng@gmail.com?subject=PDF%20pitching%20chart",
    icon: "plan" as const,
  },
  {
    heading: "Virtual pitching lessons when travel hits",
    blurb:
      "Live online coaching when you can’t make it in person. Great for travel weeks, rainouts, or quick check-ins.",
    cta: "Book a virtual chat",
    href: "mailto:nickdeisng@gmail.com?subject=Virtual%20pitching%20lesson",
    icon: "virtual" as const,
  },
];

export default function HomePage() {
  return (
    <>
      <ScrollBall />

      <section className="arcade-hero-band relative overflow-hidden">
        <div className="mx-auto grid max-w-5xl gap-12 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div className="space-y-7">
            <p className="pixel-chip px-3 py-1.5">Naples, Florida area</p>
            <h1 className="pixel-title pixel-title-lg">
              Level up pitching lessons parents actually get
            </h1>
            <p className="max-w-xl text-lg leading-relaxed text-ink-soft">
              Pitching101 helps youth and elite pitchers in Naples build clean
              mechanics, stronger arms, and real confidence — without the
              confusing coach-speak. Camps and clinics when you want them;
              clear paths when you need them. Game on for the kid. Peace of
              mind for the parent.
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a href="tel:8457682211" className="pixel-btn">
                Press start — call 845-768-2211
              </a>
              <a href="mailto:nickdeisng@gmail.com" className="pixel-btn-ghost">
                Email Nick
              </a>
              <Link
                href="/naples-fl-pitching-lessons/"
                className="font-pixel-ui px-2 py-3 text-lg font-semibold text-yellow underline-offset-4 hover:underline"
              >
                Youth pitching lessons Naples FL →
              </Link>
            </div>
          </div>

          <ArcadeHud />
        </div>
      </section>

      <section className="border-t-4 border-red bg-blue-soft/60">
        <div className="mx-auto max-w-5xl px-5 py-10 sm:px-8">
          <Reveal>
            <TrustStrip />
          </Reveal>
        </div>
      </section>

      <section id="programs" className="scroll-mt-24 border-t-4 border-teal">
        <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-20">
          <Reveal>
            <div className="max-w-2xl space-y-4">
              <p className="pixel-chip px-3 py-1.5">Programs</p>
              <p className="pixel-title pixel-title-md">
                Pick your power-up path
              </p>
              <p className="leading-relaxed text-ink-soft">
                Start with Stan video notes, a written PDF chart, or a virtual
                lesson. In-person Naples options are the heart of what we do —
                these are the easy on-ramps. No side quests required.
              </p>
            </div>
          </Reveal>
          <div className="mt-12 grid gap-7 sm:grid-cols-3">
            {programs.map((item, i) => (
              <Reveal key={item.heading} delayMs={i * 80}>
                <article className="pixel-card flex h-full flex-col p-7">
                  <PixelIcon name={item.icon} />
                  <h2 className="mt-4 font-pixel text-base font-semibold leading-snug text-blue-light">
                    {item.heading}
                  </h2>
                  <p className="mt-2.5 flex-1 text-sm leading-relaxed text-ink-soft">
                    {item.blurb}
                  </p>
                  <a
                    href={item.href}
                    className="pixel-btn-ghost mt-6 !px-3.5 !py-2"
                  >
                    {item.cta}
                  </a>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section
        id="how-it-works"
        className="scroll-mt-24 border-t-4 border-yellow bg-surface"
      >
        <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-20">
          <Reveal>
            <h2 className="pixel-title pixel-title-md">How the run works</h2>
          </Reveal>
          <ol className="mt-10 grid gap-7 sm:grid-cols-3">
            {[
              {
                step: "1",
                title: "Hit start",
                body: "Call or email. Tell us your pitcher’s age, goals, and schedule.",
              },
              {
                step: "2",
                title: "Choose your mode",
                body: "Stan video, PDF chart, virtual lesson, or local Naples session.",
              },
              {
                step: "3",
                title: "Unlock clear next reps",
                body: "You’ll leave knowing what to practice — not guessing.",
              },
            ].map((s, i) => (
              <Reveal key={s.step} delayMs={i * 90}>
                <li className="pixel-card-alt list-none p-7">
                  <span className="pixel-step">{s.step}</span>
                  <h3 className="mt-4 font-pixel text-base font-semibold text-yellow">
                    {s.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-ink-soft">
                    {s.body}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-t-4 border-green">
        <div className="mx-auto max-w-5xl px-5 py-16 text-center sm:px-8 sm:py-20">
          <Reveal>
            <h2 className="pixel-title pixel-title-md">
              Continue? We’re ready when you are
            </h2>
            <p className="mx-auto mt-4 max-w-xl leading-relaxed text-ink-soft">
              Serving families across the Naples, FL area. No street address
              listed yet — call or email and we’ll point you to the right next
              step.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <a href="tel:8457682211" className="pixel-btn">
                Call 845-768-2211
              </a>
              <a href="mailto:nickdeisng@gmail.com" className="pixel-btn-ghost">
                nickdeisng@gmail.com
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
