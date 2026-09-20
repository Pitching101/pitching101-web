import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import TrustStrip from "@/components/TrustStrip";
import ContactCtas from "@/components/ContactCtas";
import Logo from "@/components/Logo";

export default function HomePage() {
  return (
    <>
      {/* 1. WHITE — hero: oversized text LEFT, pitcher RIGHT */}
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
            <ContactCtas className="justify-start" />
            <p className="text-sm text-ink-soft">
              Arm care first · Text or call before you drive
            </p>
          </Reveal>
          <Reveal from="right" delayMs={80} className="content-row-media">
            <div className="media-frame media-frame-stadium">
              <Image
                src="/assets/pixel-pitcher.gif"
                alt="Pixel art pitcher delivery"
                width={800}
                height={600}
                className="row-gif"
                unoptimized
                priority
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* 2. COLORED — who this is for: one spacious text block (not cards) */}
      <section id="who" className="band-soft scroll-mt-24" aria-label="Who this is for">
        <div className="mx-auto max-w-3xl space-y-8 px-5 py-16 sm:px-8 sm:py-20">
          <Reveal className="flex justify-center sm:justify-start">
            <Logo variant="on-blue" height={48} />
          </Reveal>
          <Reveal delayMs={40} className="space-y-6">
            <h2 className="ui-title ui-title-md">Who this is for</h2>
            <div className="space-y-3 text-lg leading-relaxed text-ink-soft">
              <p>Parents who want plain English — you know what to watch for.</p>
              <p>Youth pitchers ages 8–14 who need simple next reps.</p>
              <p>Naples / SWFL families — local lessons or virtual.</p>
            </div>
          </Reveal>
          <Reveal delayMs={80}>
            <TrustStrip />
          </Reveal>
        </div>
      </section>

      {/* 3. WHITE — one clean offers + CTA band (no card grid) */}
      <section id="programs" className="text-band scroll-mt-24">
        <div className="mx-auto max-w-3xl space-y-8 px-5 py-16 text-center sm:px-8 sm:py-20 sm:text-left">
          <Reveal className="space-y-4">
            <h2 className="ui-title ui-title-md">Ways to start</h2>
            <p className="text-lg leading-relaxed text-ink-soft">
              Naples lessons · pitching PDF · virtual lessons
            </p>
            <p className="text-base text-ink-soft">
              Pick what fits. We’ll point you to the right next step.
            </p>
          </Reveal>
          <Reveal delayMs={60}>
            <ContactCtas className="justify-center sm:justify-start" />
          </Reveal>
        </div>
      </section>

      {/* 4. COLORED yellow — runner RIGHT */}
      <section className="asset-band-yellow" aria-label="Clear next reps">
        <div className="content-row">
          <Reveal from="left" className="content-row-copy">
            <h2 className="ui-title ui-title-md">Know what to practice next</h2>
            <p className="text-base leading-relaxed">
              Plain-English notes. Kid gets it. Parent gets it.
            </p>
            <div className="flex flex-wrap gap-3 pt-1">
              <a href="sms:8457682211" className="btn-on-color">
                Text 845-768-2211
              </a>
              <a href="tel:8457682211" className="btn-ghost-on-color">
                Call
              </a>
            </div>
          </Reveal>
          <Reveal from="right" delayMs={80} className="content-row-media">
            <div className="media-frame media-frame-yellow">
              <Image
                src="/assets/pixel-runner.gif"
                alt="Pixel art baseball runner"
                width={800}
                height={600}
                className="row-gif"
                unoptimized
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* 5. WHITE Naples — pitcher LEFT (alternate) */}
      <section className="asset-band-white" aria-label="Naples families">
        <div className="content-row content-row-flip">
          <Reveal from="right" className="content-row-copy">
            <h2 className="ui-title ui-title-md">Naples families welcome</h2>
            <p className="text-base leading-relaxed">
              Local focus. Flexible options. Text first — no street address listed.
            </p>
            <div className="flex flex-wrap gap-3 pt-1">
              <a href="sms:8457682211" className="btn">
                Text 845-768-2211
              </a>
              <Link href="/naples-fl-pitching-lessons/" className="btn-ghost">
                Naples FL page →
              </Link>
            </div>
          </Reveal>
          <Reveal from="left" delayMs={80} className="content-row-media">
            <div className="media-frame media-frame-stadium">
              <Image
                src="/assets/pixel-pitcher.gif"
                alt="Pixel art pitcher delivery"
                width={800}
                height={600}
                className="row-gif"
                unoptimized
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* 6. COLORED teal — runner RIGHT */}
      <section className="asset-band-teal" aria-label="Mechanics">
        <div className="content-row">
          <Reveal from="left" className="content-row-copy">
            <h2 className="ui-title ui-title-md">Mechanics that click</h2>
            <p className="text-base leading-relaxed">
              Age-right coaching. You leave knowing what to watch for.
            </p>
            <div className="flex flex-wrap gap-3 pt-1">
              <a href="tel:8457682211" className="btn-on-color">
                Call 845-768-2211
              </a>
              <a href="sms:8457682211" className="btn-ghost-on-color">
                Text
              </a>
            </div>
          </Reveal>
          <Reveal from="right" delayMs={80} className="content-row-media">
            <div className="media-frame media-frame-teal">
              <Image
                src="/assets/pixel-runner.gif"
                alt="Pixel art baseball runner"
                width={800}
                height={600}
                className="row-gif"
                unoptimized
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* 7. WHITE how-it-works — runner LEFT + closing CTAs */}
      <section id="how-it-works" className="text-band scroll-mt-24">
        <div className="content-row content-row-flip">
          <Reveal from="right" className="content-row-copy">
            <h2 className="ui-title ui-title-md">How it works</h2>
            <ol className="space-y-2 text-base leading-relaxed">
              <li><strong className="text-blue-dark">1.</strong> Text or call.</li>
              <li><strong className="text-blue-dark">2.</strong> Pick Naples, PDF, or virtual.</li>
              <li><strong className="text-blue-dark">3.</strong> Know your next reps.</li>
            </ol>
            <ContactCtas className="justify-start pt-1" />
            <Link
              href="/naples-fl-pitching-lessons/"
              className="inline-block text-base font-semibold text-blue-dark underline-offset-4 hover:underline"
            >
              Youth pitching lessons in Naples, FL →
            </Link>
          </Reveal>
          <Reveal from="left" delayMs={80} className="content-row-media">
            <div className="media-frame media-frame-white">
              <Image
                src="/assets/pixel-runner.gif"
                alt="Pixel art baseball runner"
                width={800}
                height={600}
                className="row-gif"
                unoptimized
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
