import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import ReviewsCarousel from "@/components/ReviewsCarousel";
import TrainingClipsStrip from "@/components/TrainingClipsStrip";
import ParkSky from "@/components/ParkSky";
import FaqList from "@/components/FaqList";
import BaseballCardFan from "@/components/BaseballCardFan";
import JsonLd, { businessJsonLd, faqJsonLd } from "@/components/JsonLd";
import { faqs, guyChips, INSTAGRAM_URL, trainingOptions } from "@/data/siteCopy";

export const metadata: Metadata = {
  title: {
    absolute: "Youth pitching lessons in Naples, FL | Pitching101",
  },
  description:
    "Pitching101 is Coach Nick's youth pitching lessons in Naples, FL for kids ages 8-14. More strikes, healthy arms, a plan parents get. Text 845-768-2211.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Youth pitching lessons in Naples, FL | Pitching101",
    description:
      "Coach Nick helps kids ages 8-14 throw more strikes. Clear cues. Arm care first. Naples, FL.",
  },
};

export default function HomePage() {
  return (
    <ParkSky>
      <JsonLd data={businessJsonLd()} />
      <JsonLd data={faqJsonLd(faqs)} />

      <section className="hero-overlay" aria-label="Youth pitching lessons in Naples, FL">
        <div className="hero-overlay-inner">
          <Reveal from="left" className="hero-overlay-copy">
            <p className="ui-chip px-3.5 py-1.5">Naples, FL · ages 8–14</p>
            <h1 className="ui-title ui-title-hero hero-overlay-title">
              Youth pitching lessons in Naples, FL
            </h1>
            <p className="text-lg leading-relaxed text-ink-soft sm:text-xl">
              More strikes. A healthy arm. A plan you can say in the car.
            </p>
            <div className="home-cta-row pt-1">
              <Link href="#contact" className="btn">
                Get your child started
              </Link>
            </div>
            <p className="text-sm text-ink-soft">Text first. Then we pick a field.</p>
          </Reveal>
        </div>
      </section>

      <section className="text-band" id="reviews" aria-label="What parents say">
        <div className="home-stack space-y-6 px-5 py-14 sm:px-8 sm:py-16">
          <Reveal className="space-y-6">
            <h2 className="ui-title ui-title-md">What parents say</h2>
            <div id="sky-start">
              <ReviewsCarousel />
            </div>
          </Reveal>
        </div>
      </section>

      <section
        id="about"
        className="text-band ages-band scroll-mt-24"
        aria-label="About Coach Nick — ages 8 to 14"
      >
        <div className="content-row ages-band-content">
          <Reveal className="content-row-copy content-row-copy-wide who-copy space-y-6">
            <h2 className="ui-title ui-title-md">Hey, I&apos;m Nick</h2>
            <p className="text-lg leading-relaxed text-ink">
              I coach kids 8–14 in Naples.
            </p>
            <BaseballCardFan />
            <ul id="your-guy" className="bb-chip-row">
              {guyChips.map((chip) => (
                <li key={chip} className="bb-chip">
                  {chip}
                </li>
              ))}
            </ul>
            <a
              className="footer-link"
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              See the work on Instagram
            </a>
          </Reveal>
        </div>
      </section>

      <section
        id="how-it-works"
        className="band-soft how-clouds-band scroll-mt-24"
        aria-label="How pitching lessons work"
      >
        <div className="home-stack how-clouds-content space-y-8 px-5 py-14 sm:px-8 sm:py-16">
          <Reveal className="space-y-3">
            <h2 className="ui-title ui-title-md">How we train</h2>
            <p className="text-base text-ink-soft">Pick what fits this week.</p>
          </Reveal>

          <Reveal delayMs={40}>
            <ul className="dugout-row">
              {trainingOptions.map((opt) => (
                <li key={opt.label} className="dugout-sign">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
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
        id="faq"
        className="text-band scroll-mt-24"
        aria-label="Questions about youth pitching lessons in Naples, FL"
      >
        <div className="home-stack space-y-8 px-5 py-14 sm:px-8 sm:py-16">
          <Reveal className="space-y-3">
            <h2 className="ui-title ui-title-md">Parents ask</h2>
            <p className="text-base text-ink-soft">Tap a question.</p>
          </Reveal>
          <Reveal delayMs={40}>
            <FaqList items={faqs} />
          </Reveal>
        </div>
      </section>

      <section
        id="contact"
        className="home-stadium-band scroll-mt-24"
        aria-label="Training clips and how to start pitching lessons"
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
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-5 px-4 pt-14 pb-24 text-center sm:px-8 sm:pt-28 sm:pb-44">
            <p className="ui-title ui-title-sm">That&apos;s the field. Let&apos;s get on it.</p>
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
