import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import ReviewsCarousel from "@/components/ReviewsCarousel";

const familiar = [
  "How do I help my child throw harder and more accurately?",
  "What’s the right way to train without risking an injury?",
  "Why does every lesson or travel team have to cost a fortune?",
];

const ageGoals = [
  "Build skills that last beyond baseball",
  "Improve the physical and mental game",
  "Use routines they can do anywhere — no fancy gear required",
];

const journeyAreas = [
  { title: "Affordable Training", note: "Real help without the crazy price tag." },
  { title: "Lifelong Routines", note: "Simple habits kids can keep." },
  { title: "Safe Techniques", note: "Arm care first. Stay on the mound." },
  { title: "Flexible Options", note: "Local, DIY, or hybrid — your call." },
];

const trainingOptions = [
  { label: "Private", note: "In-person, Naples-area focus." },
  { label: "DIY", note: "Guide + video — train at home with a clear plan." },
  { label: "Hybrid", note: "Mix DIY with live check-ins." },
];

const freeGuides = [
  {
    title: "Arm-Care Checklist",
    note: "Simple warm-up and cool-down steps so young arms stay healthy.",
    href: "mailto:nickdeisng@gmail.com?subject=Arm-Care%20Checklist",
    cta: "Get The Checklist",
  },
  {
    title: "Strike % Tips",
    note: "Parent-friendly cues that help kids throw more strikes.",
    href: "mailto:nickdeisng@gmail.com?subject=Strike%20Percent%20Tips",
    cta: "Get The Tips",
  },
  {
    title: "Pre-Catch Warmup",
    note: "A short routine before catch so practice starts right.",
    href: "mailto:nickdeisng@gmail.com?subject=Pre-Catch%20Warmup",
    cta: "Get The Warmup",
  },
];

export default function HomePage() {
  return (
    <>
      {/* 1. Hero — pitcher GIF as background overlay + dark scrim */}
      <section className="hero-overlay" aria-label="Youth Pitching Lessons In Naples, FL">
        <div className="hero-overlay-media" aria-hidden="true">
          <Image
            src="/assets/pixel-pitcher.gif"
            alt=""
            fill
            className="hero-overlay-gif"
            unoptimized
            priority
            sizes="100vw"
          />
          <div className="hero-overlay-scrim" />
        </div>
        <div className="hero-overlay-inner">
          <Reveal from="left" className="hero-overlay-copy">
            <p className="ui-chip px-3.5 py-1.5">Naples, FL</p>
            <h1 className="ui-title ui-title-hero hero-overlay-title">
              Youth Pitching Lessons In Naples, FL
            </h1>
            <p className="text-lg leading-relaxed text-white/90 sm:text-xl">
              Clear Coaching For Kids And Parents. No Jargon.
            </p>
            <div className="flex flex-wrap gap-3 pt-1">
              <Link href="/contact/" className="btn">
                Contact
              </Link>
              <Link href="/guides/" className="btn-secondary !border-white/70 !bg-transparent !text-white hover:!bg-white/15 hover:!text-white">
                Free Guides
              </Link>
            </div>
            <p className="text-sm text-white/80">
              Arm Care First · Reach Out Before You Drive
            </p>
          </Reveal>
        </div>
      </section>

      {/* 2. WHITE — I’m Your Guy */}
      <section className="text-band" aria-label="I'm Your Guy">
        <div className="mx-auto max-w-3xl space-y-8 px-5 py-14 sm:px-8 sm:py-16">
          <Reveal delayMs={40} className="space-y-5">
            <h2 className="ui-title ui-title-md">
              I’m Your Guy If You’re Looking To Throw Strikes, Build A Strong
              Foundation, Train Healthy Patterns, And Get Affordable Lessons.
            </h2>
            <ul className="space-y-3 text-lg leading-relaxed text-ink-soft">
              {familiar.map((q) => (
                <li key={q} className="pl-1">
                  “{q}”
                </li>
              ))}
            </ul>
            <p className="text-base text-ink-soft">
              ELI5: parents ask this — here’s what they say on Trustpilot.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 3. WHITE — From Trustpilot carousel */}
      <section className="text-band" id="reviews" aria-label="From Trustpilot">
        <div className="mx-auto max-w-3xl space-y-6 px-5 py-14 sm:px-8 sm:py-16">
          <Reveal className="space-y-6">
            <h2 className="ui-title ui-title-md">From Trustpilot</h2>
            <p className="text-base leading-relaxed text-ink-soft">
              Parents ask those questions — here’s what they say after working together.
            </p>
            <ReviewsCarousel />
          </Reveal>
        </div>
      </section>

      {/* 4. #BBD6F1 — ages 8–14 goals (+ runner, flush) */}
      <section
        id="who"
        className="band-soft ages-band scroll-mt-24"
        aria-label="Ages 8 To 14"
      >
        <div className="peanut-decor" aria-hidden="true">
          {Array.from({ length: 28 }, (_, index) => (
            <Image
              key={index}
              src="/assets/pixel-peanut.png"
              alt=""
              width={48}
              height={48}
              className={`peanut peanut-${index + 1}`}
            />
          ))}
        </div>
        <div className="content-row ages-band-content">
          <Reveal from="left" className="content-row-copy content-row-copy-wide">
            <h2 className="ui-title ui-title-md">
              To Help Young Pitchers Ages 8–14
            </h2>
            <p className="peanut-eli5">
              ELI5: peanuts = younger pitchers — ballpark fun.
            </p>
            <ul className="space-y-3 text-lg leading-relaxed text-ink-soft">
              {ageGoals.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Reveal>
          <Reveal from="right" delayMs={80} className="content-row-media">
            <Image
              src="/assets/pixel-runner.gif"
              alt="Pixel art baseball runner"
              width={800}
              height={600}
              className="row-gif"
              unoptimized
            />
          </Reveal>
        </div>
      </section>

      {/* 5. WHITE — child’s journey / four key areas */}
      <section className="text-band" aria-label="Journey">
        <div className="mx-auto max-w-3xl space-y-8 px-5 py-14 sm:px-8 sm:py-16">
          <Reveal className="space-y-4">
            <h2 className="ui-title ui-title-md">
              Your Child’s Journey Starts Here
            </h2>
            <p className="text-base text-ink-soft">
              Four Simple Focus Areas — Confident, Injury-Free Pitching.
            </p>
          </Reveal>
          <Reveal delayMs={40}>
            <ul className="grid gap-5 sm:grid-cols-2">
              {journeyAreas.map((item) => (
                <li key={item.title} className="space-y-1">
                  <p className="font-semibold text-blue-dark">{item.title}</p>
                  <p className="text-base text-ink-soft">{item.note}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* 6. #BBD6F1 — Free Guides lead magnets */}
      <section id="guides" className="band-soft scroll-mt-24" aria-label="Free Guides">
        <div className="mx-auto max-w-3xl space-y-8 px-5 py-14 sm:px-8 sm:py-16">
          <Reveal className="space-y-3">
            <h2 className="ui-title ui-title-md">Free Guides</h2>
            <p className="text-base text-ink-soft">
              Quick Parent-Friendly PDFs. Stan Store Capture Links Coming — Email Works Now.
            </p>
          </Reveal>
          <Reveal delayMs={40}>
            <ul className="grid gap-4 sm:grid-cols-3">
              {freeGuides.map((g) => (
                <li key={g.title} className="card flex flex-col gap-3 p-5">
                  <p className="font-semibold text-blue-dark">{g.title}</p>
                  <p className="flex-1 text-sm leading-relaxed text-ink-soft">{g.note}</p>
                  <a href={g.href} className="btn-ghost !min-h-9 !px-3 !py-1.5 !text-sm">
                    {g.cta}
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delayMs={60}>
            <Link href="/guides/" className="nav-link font-semibold text-blue-dark underline underline-offset-4">
              See All Free Guides
            </Link>
          </Reveal>
        </div>
      </section>

      {/* 7. #BBD6F1 — how it works (card layout) */}
      <section
        id="how-it-works"
        className="band-soft scroll-mt-24"
        aria-label="How It Works"
      >
        <div className="mx-auto max-w-3xl space-y-8 px-5 py-14 sm:px-8 sm:py-16">
          <Reveal className="space-y-3">
            <h2 className="ui-title ui-title-md">How It Works</h2>
            <p className="text-base text-ink-soft">Easy To Start Today.</p>
          </Reveal>

          <div className="grid gap-5">
            <Reveal delayMs={40}>
              <article className="card space-y-4 p-6">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="ui-chip px-3 py-1">Step 1</span>
                  <h3 className="font-semibold text-blue-dark">
                    Choose Your Training Option
                  </h3>
                </div>
                <ul className="grid gap-3 sm:grid-cols-3">
                  {trainingOptions.map((opt) => (
                    <li key={opt.label} className="option-chip">
                      <p className="text-sm font-semibold text-blue-dark">
                        {opt.label}
                      </p>
                      <p className="mt-1 text-xs leading-relaxed text-ink-soft">
                        {opt.note}
                      </p>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>

            <Reveal delayMs={80}>
              <article className="card space-y-3 p-6">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="ui-chip px-3 py-1">Step 2</span>
                  <h3 className="font-semibold text-blue-dark">Start Training</h3>
                </div>
                <ul className="grid gap-2 text-sm leading-relaxed text-ink-soft sm:grid-cols-3">
                  <li className="option-chip !py-2.5">
                    A pitching plan that fits your child
                  </li>
                  <li className="option-chip !py-2.5">
                    Video demos for drills and routines
                  </li>
                  <li className="option-chip !py-2.5">
                    Ongoing tips so they keep improving
                  </li>
                </ul>
              </article>
            </Reveal>

            <Reveal delayMs={120}>
              <article className="card space-y-3 p-6">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="ui-chip px-3 py-1">Step 3</span>
                  <h3 className="font-semibold text-blue-dark">Watch Them Thrive</h3>
                </div>
                <p className="text-sm leading-relaxed text-ink-soft sm:text-base">
                  Strength, confidence, and mound skills — and you’ll know you
                  helped them get there.
                </p>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 8. WHITE — single Contact CTA → /contact/ */}
      <section id="contact" className="text-band scroll-mt-24" aria-label="Contact">
        <div className="mx-auto max-w-3xl space-y-6 px-5 py-14 text-center sm:px-8 sm:py-16 sm:text-left">
          <Reveal className="space-y-5">
            <h2 className="ui-title ui-title-md">Ready To Talk?</h2>
            <p className="text-lg text-ink-soft">
              Text, Call, Or Email — Naples, FL Families Welcome.
            </p>
            <div className="flex justify-center sm:justify-start">
              <Link href="/contact/" className="btn">
                Contact
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
