import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import Logo from "@/components/Logo";

export default function HomePage() {
  return (
    <>
      {/* Hero: text LEFT, pitcher RIGHT — single Contact CTA */}
      <section className="text-band">
        <div className="content-row content-row-hero">
          <Reveal from="left" className="content-row-copy content-row-copy-wide">
            <p className="ui-chip px-3.5 py-1.5">Naples, FL</p>
            <h1 className="ui-title ui-title-hero">
              Youth pitching lessons in Naples, FL
            </h1>
            <p className="text-lg leading-relaxed text-ink-soft sm:text-xl">
              Clear coaching for kids and parents. No jargon.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact/" className="btn">
                Contact
              </Link>
            </div>
            <p className="text-sm text-ink-soft">
              Arm care first · Reach out before you drive
            </p>
          </Reveal>
          <Reveal from="right" delayMs={80} className="content-row-media">
            <Image
              src="/assets/pixel-pitcher.gif"
              alt="Pixel art pitcher delivery"
              width={800}
              height={600}
              className="row-gif"
              unoptimized
              priority
            />
          </Reveal>
        </div>
      </section>

      {/* Who this is for */}
      <section id="who" className="band-soft scroll-mt-24" aria-label="Who this is for">
        <div className="mx-auto max-w-3xl space-y-8 px-5 py-16 sm:px-8 sm:py-20">
          <Reveal className="flex justify-center sm:justify-start">
            <Logo variant="on-white" height={48} />
          </Reveal>
          <Reveal delayMs={40} className="space-y-6">
            <h2 className="ui-title ui-title-md">Who this is for</h2>
            <div className="space-y-3 text-lg leading-relaxed text-ink-soft">
              <p>Parents who want plain English — you know what to watch for.</p>
              <p>Youth pitchers ages 8–14 who need simple next reps.</p>
              <p>Naples / SWFL families — local lessons or virtual.</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Quiet ways to start */}
      <section id="programs" className="text-band scroll-mt-24">
        <div className="mx-auto max-w-3xl space-y-8 px-5 py-16 text-center sm:px-8 sm:py-20 sm:text-left">
          <Reveal className="space-y-5">
            <h2 className="ui-title ui-title-md">Ways to start</h2>
            <p className="text-base text-ink-soft">
              Pick what fits. We’ll point you to the right next step.
            </p>
            <p className="flex flex-col gap-3 text-lg sm:flex-row sm:flex-wrap sm:items-baseline sm:gap-x-2">
              <a
                href="mailto:nickdeisng@gmail.com?subject=Naples%20pitching%20lessons"
                className="font-semibold text-blue-dark underline-offset-4 hover:underline"
              >
                In-person Naples
              </a>
              <span className="hidden text-ink-soft/50 sm:inline" aria-hidden>
                ·
              </span>
              <a
                href="mailto:nickdeisng@gmail.com?subject=PDF%20pitching%20chart"
                className="font-semibold text-blue-dark underline-offset-4 hover:underline"
              >
                Pitching PDF
              </a>
              <span className="hidden text-ink-soft/50 sm:inline" aria-hidden>
                ·
              </span>
              <a
                href="mailto:nickdeisng@gmail.com?subject=Virtual%20pitching%20lesson"
                className="font-semibold text-blue-dark underline-offset-4 hover:underline"
              >
                Virtual lessons
              </a>
            </p>
          </Reveal>
          <Reveal delayMs={60}>
            <Link href="/contact/" className="btn">
              Contact
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
