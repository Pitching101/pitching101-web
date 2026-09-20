import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import ReviewsCarousel from "@/components/ReviewsCarousel";
import TrainingClipsStrip from "@/components/TrainingClipsStrip";

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

export default function HomePage() {
  return (
    <>
      {/* 1. Hero — solid white, dark navy copy, centered */}
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
            <div className="home-cta-row pt-1">
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

      {/* 2. From Trustpilot (ball/glove scroll window before #who) */}
      <section className="text-band reviews-band" id="reviews" aria-label="From Trustpilot">
        <div className="home-stack space-y-6 px-5 py-14 sm:px-8 sm:py-16">
          <Reveal className="space-y-6">
            <h2 className="ui-title ui-title-md">From Trustpilot</h2>
            <p className="text-base leading-relaxed text-ink-soft">
              Here&apos;s what parents say after working together.
            </p>
            <ReviewsCarousel />
          </Reveal>
        </div>
      </section>

      {/* 3. I'm Your Guy + Ages 8–14 */}
      <section
        id="who"
        className="text-band ages-band scroll-mt-24"
        aria-label="I'm Your Guy — Ages 8 To 14"
      >
        <div className="content-row ages-band-content">
          <Reveal className="content-row-copy content-row-copy-wide who-copy space-y-5">
            <h2 className="ui-title ui-title-md">
              I&apos;m Your Guy If You&apos;re Looking To Throw Strikes, Build A Strong
              Foundation, Train Healthy Patterns, And Get Affordable Lessons.
            </h2>
            <ul className="mx-auto max-w-md space-y-3 text-left text-lg leading-relaxed text-ink-soft">
              {guyBullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* 4. How It Works — soft-blue band + floating clouds into stadium sky */}
      <section
        id="how-it-works"
        className="band-soft how-clouds-band scroll-mt-24"
        aria-label="How It Works"
      >
        <div className="cloud-decor" aria-hidden="true">
          {[
            { src: "/assets/pixel-cloud-1-transparent.png", w: 279, h: 145 },
            { src: "/assets/pixel-cloud-2-transparent.png", w: 210, h: 99 },
            { src: "/assets/pixel-cloud-3-transparent.png", w: 200, h: 96 },
            { src: "/assets/pixel-cloud-4-transparent.png", w: 223, h: 99 },
            { src: "/assets/pixel-cloud-2-transparent.png", w: 210, h: 99 },
            { src: "/assets/pixel-cloud-1-transparent.png", w: 279, h: 145 },
            { src: "/assets/pixel-cloud-3-transparent.png", w: 200, h: 96 },
          ].map((cloud, index) => (
            <Image
              key={`${cloud.src}-${index}`}
              src={cloud.src}
              alt=""
              width={cloud.w}
              height={cloud.h}
              className={`float-cloud float-cloud-${index + 1}`}
              style={{ background: "transparent" }}
            />
          ))}
        </div>
        <div className="home-stack how-clouds-content space-y-8 px-5 py-14 sm:px-8 sm:py-16">
          <Reveal className="space-y-3">
            <h2 className="ui-title ui-title-md">How It Works</h2>
            <p className="text-base text-ink-soft">Pick What Fits. Easy To Start Today.</p>
          </Reveal>

          <Reveal delayMs={40}>
            <ul className="grid gap-5 text-left sm:grid-cols-3">
              {trainingOptions.map((opt) => (
                <li key={opt.label} className="card flex flex-col items-center gap-3 p-6 text-center">
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

      {/* 5. Stadium / mound — Real Training Clips only (contact lives in footer) */}
      <section
        id="training-clips"
        className="home-stadium-band scroll-mt-24"
        aria-label="Real Training Clips"
      >
        <div className="home-stadium-media" aria-hidden="true">
          <Image
            src="/assets/pixel-stadium-seamless.png"
            alt=""
            fill
            className="home-stadium-bg"
            sizes="100vw"
            priority={false}
          />
        </div>
        <div className="home-stadium-inner">
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-8 px-5 py-16 text-center sm:px-8 sm:py-20">
            <Image
              src="/assets/nick-coach-circle.png"
              alt="Coach Nick — Pitching101 Naples FL"
              width={120}
              height={120}
              className="nick-coach-avatar"
            />
            <Reveal>
              <TrainingClipsStrip />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
