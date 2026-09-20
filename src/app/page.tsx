import Link from "next/link";
import Image from "next/image";
import PixelIcon from "@/components/PixelIcon";
import Reveal from "@/components/Reveal";
import TrustStrip from "@/components/TrustStrip";
import ContactCtas from "@/components/ContactCtas";
import Logo from "@/components/Logo";

const whoFor = [
  {
    label: "Parents",
    blurb: "Plain English. You know what to watch for.",
  },
  {
    label: "Youth pitchers",
    blurb: "Ages 8–14. Simple next reps, not jargon.",
  },
  {
    label: "Naples / SWFL",
    blurb: "Local lessons plus virtual when you need it.",
  },
];

const programs = [
  {
    heading: "Naples lessons",
    blurb: "In-area youth pitching. Text first.",
    cta: "Ask about Naples",
    href: "mailto:nickdeisng@gmail.com?subject=Naples%20pitching%20lessons",
    icon: "naples" as const,
  },
  {
    heading: "Pitching PDF",
    blurb: "Simple plan to follow at home.",
    cta: "Get the PDF",
    href: "mailto:nickdeisng@gmail.com?subject=PDF%20pitching%20chart",
    icon: "plan" as const,
  },
  {
    heading: "Virtual lessons",
    blurb: "Live coaching when you can’t be there.",
    cta: "Book virtual",
    href: "mailto:nickdeisng@gmail.com?subject=Virtual%20pitching%20lesson",
    icon: "virtual" as const,
  },
];

export default function HomePage() {
  return (
    <>
      {/* 1. WHITE — hero: text LEFT, pitcher RIGHT */}
      <section className="text-band">
        <div className="content-row">
          <Reveal from="left" className="content-row-copy">
            <p className="ui-chip px-3.5 py-1.5">Naples, FL</p>
            <h1 className="ui-title ui-title-lg">
              Youth pitching lessons in Naples, FL
            </h1>
            <p className="text-lg leading-relaxed text-ink-soft">
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

      {/* 2. COLORED — who this is for (structure nod to local competitor) */}
      <section id="who" className="band-soft scroll-mt-24" aria-label="Who this is for">
        <div className="mx-auto max-w-5xl space-y-6 px-5 py-10 sm:px-8 sm:py-12">
          <Reveal className="flex justify-center sm:justify-start">
            <Logo variant="on-blue" height={48} />
          </Reveal>
          <Reveal delayMs={40} className="space-y-2 text-center sm:text-left">
            <h2 className="ui-title ui-title-md">Who this is for</h2>
            <p className="text-ink-soft">Three quick fits.</p>
          </Reveal>
          <ul className="grid gap-4 sm:grid-cols-3">
            {whoFor.map((item, i) => (
              <Reveal key={item.label} delayMs={60 + i * 50}>
                <li className="ui-card h-full p-5 sm:p-6">
                  <p className="text-base font-semibold text-blue-dark">
                    {item.label}
                  </p>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">
                    {item.blurb}
                  </p>
                </li>
              </Reveal>
            ))}
          </ul>
          <Reveal delayMs={120}>
            <TrustStrip />
          </Reveal>
          <Reveal delayMs={140}>
            <ContactCtas className="justify-center sm:justify-start" />
          </Reveal>
        </div>
      </section>

      {/* 3. WHITE — offers row */}
      <section id="programs" className="text-band scroll-mt-24">
        <div className="mx-auto max-w-5xl px-5 py-12 sm:px-8 sm:py-14">
          <Reveal className="space-y-2 text-center sm:text-left">
            <h2 className="ui-title ui-title-md">Three easy starts</h2>
            <p className="text-ink-soft">Pick one. We’ll help from there.</p>
          </Reveal>
          <div className="mt-8 grid gap-5 sm:grid-cols-3">
            {programs.map((item, i) => (
              <Reveal key={item.heading} delayMs={i * 70}>
                <article className="ui-card flex h-full flex-col p-5 sm:p-6">
                  <PixelIcon name={item.icon} />
                  <h3 className="mt-3 text-base font-semibold text-blue-dark">
                    {item.heading}
                  </h3>
                  <p className="mt-1.5 flex-1 text-sm text-ink-soft">
                    {item.blurb}
                  </p>
                  <a href={item.href} className="btn-ghost mt-5 !px-3 !py-2 text-sm">
                    {item.cta}
                  </a>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal delayMs={160} className="mt-8">
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
                Call 845-768-2211
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
              <a href="tel:8457682211" className="btn-ghost">
                Call 845-768-2211
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
                Text 845-768-2211
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

      {/* 7. WHITE how-it-works — runner LEFT (alternate) */}
      <section id="how-it-works" className="text-band scroll-mt-24">
        <div className="content-row content-row-flip">
          <Reveal from="right" className="content-row-copy">
            <h2 className="ui-title ui-title-md">How it works</h2>
            <ol className="space-y-2 text-base leading-relaxed">
              <li><strong className="text-blue-dark">1.</strong> Text or call.</li>
              <li><strong className="text-blue-dark">2.</strong> Pick Naples, PDF, or virtual.</li>
              <li><strong className="text-blue-dark">3.</strong> Know your next reps.</li>
            </ol>
            <div className="flex flex-wrap gap-3 pt-1">
              <a href="sms:8457682211" className="btn">
                Text 845-768-2211
              </a>
              <a href="tel:8457682211" className="btn-ghost">
                Call 845-768-2211
              </a>
            </div>
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

      {/* 8. WHITE — closing */}
      <section className="text-band">
        <div className="mx-auto max-w-5xl px-5 py-12 text-center sm:px-8 sm:py-16">
          <Reveal className="space-y-5">
            <h2 className="ui-title ui-title-md">Let’s get started</h2>
            <p className="mx-auto max-w-md text-ink-soft">
              Naples, FL area. Text, call, or email — we’ll point you to the right next step.
            </p>
            <ContactCtas className="justify-center" />
            <Link
              href="/naples-fl-pitching-lessons/"
              className="inline-block text-base font-semibold text-blue-dark underline-offset-4 hover:underline"
            >
              Youth pitching lessons in Naples, FL →
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
