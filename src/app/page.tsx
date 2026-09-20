import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import ReviewsCarousel from "@/components/ReviewsCarousel";
import TrainingClipsStrip from "@/components/TrainingClipsStrip";
import ParkSky from "@/components/ParkSky";

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
    <ParkSky>
      <section className="hero-overlay" aria-label="Youth pitching lessons in Naples, FL">
        <div className="hero-overlay-inner">
          <Reveal from="left" className="hero-overlay-copy">
            <p className="ui-chip px-3.5 py-1.5">Naples, FL</p>
            <h1 className="ui-title ui-title-hero hero-overlay-title">
              Youth pitching lessons in Naples, FL
            </h1>
            <p className="text-lg leading-relaxed text-ink-soft sm:text-xl">
              I help kids throw more strikes. Parents get a plan they can actually use.
            </p>
            <div className="home-cta-row pt-1">
              <Link href="#contact" className="btn">
                Get your child started
              </Link>
            </div>
            <p className="text-sm text-ink-soft">
              Arm care first. Reach out before you drive.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="text-band" id="reviews" aria-label="From Trustpilot">
        <div className="home-stack space-y-6 px-5 py-14 sm:px-8 sm:py-16">
          <Reveal className="space-y-6">
            <h2 className="ui-title ui-title-md">From Trustpilot</h2>
            <p className="text-base leading-relaxed text-ink-soft">
              Here&apos;s what parents say after we work together.
            </p>
            <ReviewsCarousel />
          </Reveal>
        </div>
      </section>

      <section
        id="about"
        className="text-band ages-band scroll-mt-24"
        aria-label="About Coach Nick — ages 8 to 14"
      >
        <div className="content-row ages-band-content">
          <Reveal className="content-row-copy content-row-copy-wide who-copy space-y-5">
            <h2 className="ui-title ui-title-md">Hey, I&apos;m Nick</h2>
            <p className="text-lg leading-relaxed text-ink">
              I help young pitchers — and their parents — throw more strikes without
              the jargon or the crazy price tag.
            </p>
            <p className="text-base leading-relaxed text-ink-soft">
              Kids ages 8–14 need clear cues, healthy arm habits, and a plan they
              can actually use between practices. I work with Naples, FL families —
              in person when it fits, plus PDF and virtual options when life is busy.
            </p>
            <h3 id="your-guy" className="ui-title ui-title-sm">
              I&apos;m your guy if you want more strikes, a strong foundation,
              healthy patterns, and lessons that don&apos;t cost a fortune.
            </h3>
            <ul className="mx-auto max-w-md space-y-3 text-left text-lg leading-relaxed text-ink-soft">
              {guyBullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section
        id="how-it-works"
        className="band-soft how-clouds-band scroll-mt-24"
        aria-label="How it works"
      >
        <div className="home-stack how-clouds-content space-y-8 px-5 py-14 sm:px-8 sm:py-16">
          <Reveal className="space-y-3">
            <h2 className="ui-title ui-title-md">How it works</h2>
            <p className="text-base text-ink-soft">
              Private, at home, or a mix. Pick what fits your kid.
            </p>
          </Reveal>

          <Reveal delayMs={40}>
            <ul className="dugout-row">
              {trainingOptions.map((opt) => (
                <li key={opt.label} className="dugout-sign">
                  <Image
                    src={opt.icon}
                    alt=""
                    width={64}
                    height={64}
                    className="card-icon"
                  />
                  <h3 className="dugout-sign-title">{opt.label}</h3>
                  <p className="dugout-sign-note">{opt.note}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section
        id="contact"
        className="home-stadium-band scroll-mt-24"
        aria-label="Real training clips and contact"
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
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-5 px-5 py-20 text-center sm:px-8 sm:py-28">
            <TrainingClipsStrip />
            <Link href="/contact/" className="btn">
              Get your child started
            </Link>
          </div>
        </div>
      </section>
    </ParkSky>
  );
}
