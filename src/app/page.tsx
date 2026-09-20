import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import ReviewsCarousel from "@/components/ReviewsCarousel";
import TrainingClipsStrip from "@/components/TrainingClipsStrip";
import ParkSky from "@/components/ParkSky";
import FaqList from "@/components/FaqList";
import JsonLd, { businessJsonLd, faqJsonLd } from "@/components/JsonLd";
import { faqs, guyBullets, trainingOptions } from "@/data/siteCopy";

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
              I&apos;m Nick. Kids throw more strikes. Parents leave with a plan they
              can actually say out loud.
            </p>
            <div className="home-cta-row pt-1">
              <Link href="#contact" className="btn">
                Get your child started
              </Link>
            </div>
            <p className="text-sm text-ink-soft">
              Arm care first. Text me before you drive.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="text-band" id="reviews" aria-label="What parents say">
        <div className="home-stack space-y-6 px-5 py-14 sm:px-8 sm:py-16">
          <Reveal className="space-y-6">
            <h2 className="ui-title ui-title-md">What parents say</h2>
            <p className="text-base leading-relaxed text-ink-soft">
              Real notes from families after we worked together. I didn&apos;t write
              these.
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
              Pitching101 is me — a pitching coach for kids ages 8–14 in Naples, FL.
              I help young pitchers throw more strikes without the jargon or the
              crazy price tag.
            </p>
            <p className="text-base leading-relaxed text-ink-soft">
              Kids this age need clear cues, healthy arm habits, and something they
              can try again on Tuesday. I work with Naples families in person when
              it fits, plus at-home and virtual options when the week gets loud.
            </p>
            <h3 id="your-guy" className="ui-title ui-title-sm">
              I&apos;m your guy if you want more strikes, a strong foundation,
              and lessons that don&apos;t cost a fortune.
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
        aria-label="How pitching lessons work"
      >
        <div className="home-stack how-clouds-content space-y-8 px-5 py-14 sm:px-8 sm:py-16">
          <Reveal className="space-y-3">
            <h2 className="ui-title ui-title-md">How pitching lessons work</h2>
            <p className="text-base text-ink-soft">
              Three doors. Same coach. Pick the one that fits your week.
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
        id="faq"
        className="text-band scroll-mt-24"
        aria-label="Questions about youth pitching lessons in Naples, FL"
      >
        <div className="home-stack space-y-8 px-5 py-14 sm:px-8 sm:py-16">
          <Reveal className="space-y-3">
            <h2 className="ui-title ui-title-md">
              Questions parents ask about pitching lessons
            </h2>
            <p className="text-base text-ink-soft">
              Short answers. The long version is a text.
            </p>
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
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-5 px-5 py-20 text-center sm:px-8 sm:py-28">
            <p className="ui-title ui-title-sm">That&apos;s the field. Let&apos;s get your kid on it.</p>
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
