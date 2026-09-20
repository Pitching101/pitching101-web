import Link from "next/link";
import Image from "next/image";
import PixelIcon from "@/components/PixelIcon";
import Reveal from "@/components/Reveal";
import TrustStrip from "@/components/TrustStrip";
import ContactCtas from "@/components/ContactCtas";

const programs = [
  {
    heading: "Stan video feedback for busy Naples weeks",
    blurb:
      "Send a throwing clip. Get clear, coach-level notes back — easy for kids, easy for parents.",
    cta: "Queue Stan feedback",
    href: "mailto:nickdeisng@gmail.com?subject=Stan%20video%20feedback",
    icon: "video" as const,
  },
  {
    heading: "PDF pitching chart you can follow at home",
    blurb:
      "A simple written chart your pitcher can follow between sessions — quality innings and throw-volume cues, no jargon.",
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
      {/* Hero — light shell */}
      <section className="text-band">
        <div className="mx-auto max-w-5xl px-5 py-14 sm:px-8 sm:py-20">
          <Reveal className="mx-auto max-w-3xl space-y-6 text-center sm:text-left">
            <p className="pixel-chip px-3 py-1.5">Naples, Florida area</p>
            <h1 className="pixel-title pixel-title-lg">
              Pitching lessons parents actually get
            </h1>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-ink-soft sm:mx-0">
              Pitching101 helps youth and elite pitchers in Naples build clean
              mechanics, stronger arms, and real confidence — without the
              confusing coach-speak. Camps and clinics when you want them;
              clear paths when you need them.
            </p>
            <ContactCtas className="justify-center pt-1 sm:justify-start" />
            <p className="font-pixel text-sm text-blue-dark">
              Text or Call 845-768-2211
            </p>
            <Link
              href="/naples-fl-pitching-lessons/"
              className="font-pixel-ui inline-block min-h-11 px-1 py-2 text-base font-semibold text-blue-dark underline-offset-4 hover:text-blue hover:underline"
            >
              Youth pitching lessons Naples FL →
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Trust */}
      <section className="text-band border-t-4 border-blue">
        <div className="mx-auto max-w-5xl px-5 py-10 sm:px-8 sm:py-12">
          <Reveal>
            <TrustStrip />
          </Reveal>
        </div>
      </section>

      {/* Yellow runner — text left / GIF right */}
      <section
        className="asset-band-yellow"
        aria-label="Clear next reps with pixel runner"
      >
        <div className="content-row">
          <Reveal className="content-row-copy">
            <p className="font-pixel text-sm font-semibold uppercase tracking-wide">
              Clear next reps
            </p>
            <h2 className="pixel-title pixel-title-md">
              Run the bases with feedback parents understand
            </h2>
            <p className="text-base leading-relaxed">
              No jargon — just plain-English notes your pitcher can use between
              sessions. Parents stay in the loop the whole run.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <a href="sms:8457682211" className="pixel-btn-on-light">
                Text 845-768-2211
              </a>
              <a href="tel:8457682211" className="pixel-btn-ghost-on-light">
                Call 845-768-2211
              </a>
            </div>
          </Reveal>
          <Reveal delayMs={90} className="content-row-media">
            <div className="gift-frame-yellow overflow-hidden">
              <Image
                src="/assets/pixel-runner.gif"
                alt="Pixel art baseball runner sprinting"
                width={800}
                height={600}
                className="row-gif"
                unoptimized
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Programs */}
      <section
        id="programs"
        className="text-band scroll-mt-24 border-t-4 border-blue"
      >
        <div className="mx-auto max-w-5xl px-5 py-14 sm:px-8 sm:py-18">
          <Reveal className="mx-auto max-w-2xl space-y-4 text-center sm:mx-0 sm:text-left">
            <p className="pixel-chip px-3 py-1.5">Programs</p>
            <h2 className="pixel-title pixel-title-md">Pick your path</h2>
            <p className="leading-relaxed text-ink-soft">
              Start with Stan video notes, a written PDF chart, or a virtual
              lesson. In-person Naples options are the heart of what we do —
              these are the easy on-ramps.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-3 sm:gap-7">
            {programs.map((item, i) => (
              <Reveal key={item.heading} delayMs={i * 80}>
                <article className="pixel-card flex h-full flex-col p-6 sm:p-7">
                  <PixelIcon name={item.icon} />
                  <h3 className="mt-4 font-pixel text-base font-semibold leading-snug text-blue-dark">
                    {item.heading}
                  </h3>
                  <p className="mt-2.5 flex-1 text-sm leading-relaxed text-ink-soft">
                    {item.blurb}
                  </p>
                  <a
                    href={item.href}
                    className="pixel-btn-ghost mt-6 min-h-11 !px-3.5 !py-2.5"
                  >
                    {item.cta}
                  </a>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Teal swing — text left / GIF right */}
      <section
        className="asset-band-teal"
        aria-label="Mechanics with pixel swing"
      >
        <div className="content-row">
          <Reveal className="content-row-copy">
            <p className="font-pixel text-sm font-semibold uppercase tracking-wide">
              Mechanics that click
            </p>
            <h2 className="pixel-title pixel-title-md">
              Age-right progress without the noise
            </h2>
            <p className="text-base leading-relaxed">
              Youth and elite arms get coaching that talks like a human — not a
              scouting-report printer. You leave knowing what to watch for.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <a href="tel:8457682211" className="pixel-btn-on-light">
                Call 845-768-2211
              </a>
              <a
                href="mailto:nickdeisng@gmail.com"
                className="pixel-btn-ghost-on-light"
              >
                Email nickdeisng@gmail.com
              </a>
            </div>
          </Reveal>
          <Reveal delayMs={90} className="content-row-media">
            <div className="gift-frame-teal overflow-hidden">
              <Image
                src="/assets/pixel-swing-teal.gif"
                alt="Pixel art batter swinging on teal"
                width={800}
                height={600}
                className="row-gif"
                unoptimized
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* How it works */}
      <section
        id="how-it-works"
        className="text-band scroll-mt-24 border-t-4 border-blue bg-surface"
      >
        <div className="mx-auto max-w-5xl px-5 py-14 sm:px-8 sm:py-18">
          <Reveal>
            <h2 className="pixel-title pixel-title-md">How it works</h2>
          </Reveal>
          <ol className="mt-10 grid gap-6 sm:grid-cols-3 sm:gap-7">
            {[
              {
                step: "1",
                title: "Reach out",
                body: "Text, call, or email. Tell us your pitcher’s age, goals, and schedule.",
              },
              {
                step: "2",
                title: "Choose your mode",
                body: "Stan video, PDF chart, virtual lesson, or local Naples session.",
              },
              {
                step: "3",
                title: "Clear next reps",
                body: "You’ll leave knowing what to practice — not guessing.",
              },
            ].map((s, i) => (
              <Reveal key={s.step} delayMs={i * 90}>
                <li className="pixel-card-alt list-none p-6 sm:p-7">
                  <span className="pixel-step">{s.step}</span>
                  <h3 className="mt-4 font-pixel text-base font-semibold text-blue-dark">
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

      {/* White batter — text left / still right */}
      <section
        className="asset-band-white"
        aria-label="Naples focus with pixel batter"
      >
        <div className="content-row">
          <Reveal className="content-row-copy">
            <p className="font-pixel text-sm font-semibold uppercase tracking-wide">
              Naples · Collier County
            </p>
            <h2 className="pixel-title pixel-title-md">
              Local families, flexible options
            </h2>
            <p className="text-base leading-relaxed">
              Built for youth pitchers and parents across the Naples, FL area.
              Text or call first — we’ll point you to Stan video, a PDF chart, a
              virtual lesson, or an in-area session.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <a href="sms:8457682211" className="pixel-btn-on-light">
                Text 845-768-2211
              </a>
              <a
                href="/naples-fl-pitching-lessons/"
                className="pixel-btn-ghost-on-light"
              >
                Naples FL lessons →
              </a>
            </div>
          </Reveal>
          <Reveal delayMs={90} className="content-row-media">
            <div className="gift-frame-white overflow-hidden">
              <Image
                src="/assets/pixel-batter.jpg"
                alt="Pixel art baseball batter on white"
                width={640}
                height={640}
                className="row-still"
                style={{ imageRendering: "pixelated" }}
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Full-bleed pitcher — pure visual, no text */}
      <section
        className="asset-band-stadium asset-band-bleed"
        aria-label="Pixel pitcher scenic"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/pixel-pitcher.gif"
          alt="Pixel art pitcher delivery in a stadium"
          className="bleed-gif"
          width={1280}
          height={720}
          decoding="async"
        />
      </section>

      {/* Closing CTA */}
      <section className="text-band border-t-4 border-blue">
        <div className="mx-auto max-w-5xl px-5 py-14 text-center sm:px-8 sm:py-20">
          <Reveal>
            <h2 className="pixel-title pixel-title-md">Ready when you are</h2>
            <p className="mx-auto mt-4 max-w-xl leading-relaxed text-ink-soft">
              Serving families across the Naples, FL area. No street address
              listed yet — text, call, or email and we’ll point you to the right
              next step.
            </p>
            <p className="mt-4 font-pixel text-base text-blue-dark">
              Text or Call 845-768-2211
            </p>
            <ContactCtas className="mt-8 justify-center" />
            <p className="mt-8">
              <Link
                href="/naples-fl-pitching-lessons/"
                className="font-pixel-ui inline-block min-h-11 py-2 text-base font-semibold text-blue-dark underline-offset-4 hover:text-blue hover:underline"
              >
                Youth pitching lessons Naples FL →
              </Link>
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
