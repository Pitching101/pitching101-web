import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import ReviewsCarousel from "@/components/ReviewsCarousel";
import TrainingClipsStrip from "@/components/TrainingClipsStrip";
import ParkSky from "@/components/ParkSky";
import HeroArcBalls from "@/components/HeroArcBalls";
import FaqList from "@/components/FaqList";
import BaseballCardFan from "@/components/BaseballCardFan";
import InstagramFollow from "@/components/InstagramFollow";
import JsonLd, { businessJsonLd, faqJsonLd } from "@/components/JsonLd";
import { faqs, guyChips, META_DESCRIPTION, RESPONSE_PROMISE, trainingOptions } from "@/data/siteCopy";

export const metadata: Metadata = {
  title: {
    absolute: "Youth pitching lessons in Naples, FL | Pitching101",
  },
  description: META_DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: {
    title: "Youth pitching lessons in Naples, FL | Pitching101",
    description:
      "Coach Deising helps kids ages 8-16 throw more strikes in Naples, FL. Parents, other coaches, travel teams, and schools.",
  },
};

export default function HomePage() {
  return (
    <ParkSky>
      <JsonLd data={businessJsonLd()} />
      <JsonLd data={faqJsonLd(faqs)} />

      <section className="hero-overlay" aria-label="Youth pitching lessons in Naples, FL">
        <div className="hero-overlay-inner">
          <Reveal className="hero-overlay-copy">
            <p className="ui-chip px-3.5 py-1.5">Naples, FL · ages 8–16</p>
            <HeroArcBalls />
            <p className="ui-script hero-script" aria-hidden="true">
              Athletics
            </p>
            <h1 className="ui-title ui-title-hero hero-overlay-title">
              Youth pitching lessons in Naples, FL
            </h1>
            <p className="text-lg leading-relaxed text-ink-soft sm:text-xl">
              More strikes. A healthy arm. A clear plan.
            </p>
            <div className="home-cta-row pt-1">
              <Link href="/contact/" className="btn">
                Get started
              </Link>
            </div>
            <p className="text-sm text-ink-soft">
              {RESPONSE_PROMISE}
            </p>
          </Reveal>
        </div>
        <div id="sky-start" aria-hidden="true" />
      </section>

      <section className="text-band scroll-mt-24" id="reviews" aria-label="What people say">
        <div className="home-stack space-y-6 px-5 py-14 sm:px-8 sm:py-16">
          <Reveal className="space-y-6">
            <h2 className="ui-title ui-title-md">What people say</h2>
            <ReviewsCarousel />
          </Reveal>
        </div>
      </section>

      <section
        id="about"
        className="text-band ages-band scroll-mt-24"
        aria-label="About Coach Deising — ages 8 to 16"
      >
        <div className="content-row ages-band-content">
          <div className="content-row-copy content-row-copy-wide who-copy space-y-6">
            <Reveal className="space-y-4">
              <h2 className="ui-title ui-title-md">About Coach Deising</h2>
              <p className="text-lg leading-relaxed text-ink">
                I coach kids ages 8–16 in Naples. I am the junior
                varsity head coach at Gulfshore High School. I work
                with parents, other coaches, travel teams, and schools.
              </p>
            </Reveal>
            <Reveal delayMs={40}>
              <BaseballCardFan />
            </Reveal>
            <Reveal delayMs={80} className="who-follow">
              <ul id="your-guy" className="bb-chip-row">
                {guyChips.map((chip) => (
                  <li key={chip} className="bb-chip">
                    {chip}
                  </li>
                ))}
              </ul>
              <InstagramFollow />
            </Reveal>
          </div>
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
            <p className="text-base text-ink-soft">Choose how you want to train.</p>
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
            <h2 className="ui-title ui-title-md">Questions</h2>
            <p className="text-base text-ink-soft">Common questions about lessons.</p>
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
          <Reveal className="mx-auto flex max-w-3xl flex-col items-center gap-5 px-4 pt-14 pb-24 text-center sm:px-8 sm:pt-28 sm:pb-44">
            <p className="ui-title ui-title-sm">See how we train</p>
            <TrainingClipsStrip />
            <Link href="/contact/" className="btn">
              Get started
            </Link>
          </Reveal>
        </div>
      </section>
    </ParkSky>
  );
}
