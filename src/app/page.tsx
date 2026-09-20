import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import ReviewsCarousel from "@/components/ReviewsCarousel";

const guyBullets = [
  "Ages 8–14 — young pitchers learning the game.",
  "More strikes, strong basics, healthy arm habits.",
  "Simple routines kids can do anywhere — no fancy gear.",
  "Clear coaching parents get. Affordable. No jargon.",
];

const trainingOptions = [
  {
    label: "Private",
    note: "In-person, Naples-area focus.",
    icon: "/assets/icons/icon-strikes.png",
  },
  {
    label: "DIY",
    note: "Guide + video — train at home with a clear plan.",
    icon: "/assets/icons/icon-free-guide-v2.png",
  },
  {
    label: "Hybrid",
    note: "Mix DIY with live check-ins.",
    icon: "/assets/icons/icon-plan-checklist.png",
  },
];

const freeGuides = [
  {
    title: "Arm-Care Checklist",
    note: "Simple warm-up and cool-down steps so young arms stay healthy.",
    href: "mailto:nickdeisng@gmail.com?subject=Arm-Care%20Checklist",
    cta: "Get The Checklist",
    icon: "/assets/icons/icon-arm-care-v2.png",
  },
  {
    title: "Strike % Tips",
    note: "Parent-friendly cues that help kids throw more strikes.",
    href: "mailto:nickdeisng@gmail.com?subject=Strike%20Percent%20Tips",
    cta: "Get The Tips",
    icon: "/assets/icons/icon-strikes.png",
  },
  {
    title: "Pre-Catch Warmup",
    note: "A short routine before catch so practice starts right.",
    href: "mailto:nickdeisng@gmail.com?subject=Pre-Catch%20Warmup",
    cta: "Get The Warmup",
    icon: "/assets/icons/icon-plan-checklist.png",
  },
];

export default function HomePage() {
  return (
    <>
      {/* 1. Hero — solid white, dark navy copy */}
      <section className="hero-overlay" aria-label="Youth Pitching Lessons In Naples, FL">
        <div className="hero-overlay-inner">
          <Reveal from="left" className="hero-overlay-copy">
            <p className="ui-chip px-3.5 py-1.5">Naples, FL</p>
            <h1 className="ui-title ui-title-hero hero-overlay-title">
              Youth Pitching Lessons In Naples, FL
            </h1>
            <p className="text-lg leading-relaxed text-ink-soft sm:text-xl">
              Clear Coaching For Kids And Parents. No Jargon.
            </p>
            <div className="flex flex-wrap gap-3 pt-1">
              <Link href="/contact/" className="btn">
                Contact
              </Link>
              <Link href="/guides/" className="btn-ghost">
                Free Guides
              </Link>
            </div>
            <p className="text-sm text-ink-soft">
              Arm Care First · Reach Out Before You Drive
            </p>
          </Reveal>
        </div>
      </section>

      {/* 2. WHITE — From Trustpilot (keeps ball/glove scroll window before #who) */}
      <section className="text-band" id="reviews" aria-label="From Trustpilot">
        <div className="mx-auto max-w-3xl space-y-6 px-5 py-14 sm:px-8 sm:py-16">
          <Reveal className="space-y-6">
            <h2 className="ui-title ui-title-md">From Trustpilot</h2>
            <p className="text-base leading-relaxed text-ink-soft">
              Here&apos;s what parents say after working together.
            </p>
            <ReviewsCarousel />
          </Reveal>
        </div>
      </section>

      {/* 3. WHITE — I'm Your Guy + Ages 8–14 merged, bouncing peanuts @ 100% */}
      <section
        id="who"
        className="text-band ages-band scroll-mt-24"
        aria-label="I'm Your Guy — Ages 8 To 14"
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
          <Reveal from="left" className="content-row-copy content-row-copy-wide space-y-5">
            <h2 className="ui-title ui-title-md">
              I&apos;m Your Guy If You&apos;re Looking To Throw Strikes, Build A Strong
              Foundation, Train Healthy Patterns, And Get Affordable Lessons.
            </h2>
            <p className="peanut-eli5">
              ELI5: peanuts = younger pitchers (ages 8–14) — ballpark fun.
            </p>
            <ul className="space-y-3 text-lg leading-relaxed text-ink-soft">
              {guyBullets.map((item) => (
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

      {/* 4. How It Works — Private / DIY / Hybrid only */}
      <section
        id="how-it-works"
        className="band-soft scroll-mt-24"
        aria-label="How It Works"
      >
        <div className="mx-auto max-w-3xl space-y-8 px-5 py-14 sm:px-8 sm:py-16">
          <Reveal className="space-y-3">
            <h2 className="ui-title ui-title-md">How It Works</h2>
            <p className="text-base text-ink-soft">Pick What Fits. Easy To Start Today.</p>
          </Reveal>

          <Reveal delayMs={40}>
            <ul className="grid gap-5 sm:grid-cols-3">
              {trainingOptions.map((opt) => (
                <li key={opt.label} className="card flex flex-col gap-3 p-6">
                  <Image
                    src={opt.icon}
                    alt=""
                    width={64}
                    height={64}
                    className="card-icon"
                  />
                  <h3 className="font-semibold text-blue-dark">{opt.label}</h3>
                  <p className="text-sm leading-relaxed text-ink-soft">{opt.note}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* 5. Free Guides — just above stadium bottom band */}
      <section id="guides" className="text-band scroll-mt-24" aria-label="Free Guides">
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
                  <Image
                    src={g.icon}
                    alt=""
                    width={64}
                    height={64}
                    className="h-16 w-16 object-contain"
                  />
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

      {/* 6. Bottom — seamless white→stadium blend + Ready To Talk */}
      <section
        id="contact"
        className="home-stadium-band scroll-mt-24"
        aria-label="Contact"
      >
        <div className="home-stadium-media" aria-hidden="true">
          <Image
            src="/assets/pixel-stadium-bg-v2.png"
            alt=""
            fill
            className="home-stadium-bg"
            sizes="100vw"
            priority={false}
          />
        </div>
        <div className="home-stadium-inner">
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 px-5 py-16 text-center sm:flex-row sm:items-center sm:px-8 sm:py-20 sm:text-left">
            <Image
              src="/assets/photos/nick-coach.png"
              alt="Coach Nick — Pitching101 Naples FL"
              width={120}
              height={120}
              className="nick-coach-avatar"
            />
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
        </div>
      </section>
    </>
  );
}
