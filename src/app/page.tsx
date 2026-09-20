import Link from "next/link";
import Image from "next/image";
import PixelIcon from "@/components/PixelIcon";
import Reveal from "@/components/Reveal";
import TrustStrip from "@/components/TrustStrip";
import ContactCtas from "@/components/ContactCtas";

const programs = [
  {
    heading: "Stan video feedback for busy Naples weeks",
    blurb:
      "Send a throwing clip. Get clear, coach-level notes back — easy for kids, easy for parents.",
    cta: "Queue Stan feedback",
    href: "mailto:nickdeisng@gmail.com?subject=Stan%20video%20feedback",
    icon: "video" as const,
  },
  {
    heading: "PDF pitching chart you can follow at home",
    blurb:
      "A simple written chart your pitcher can follow between sessions — quality innings and throw-volume cues, no jargon.",
    cta: "Grab the PDF chart",
    href: "mailto:nickdeisng@gmail.com?subject=PDF%20pitching%20chart",
    icon: "plan" as const,
  },
  {
    heading: "Virtual pitching lessons when travel hits",
    blurb:
      "Live online coaching when you can’t make it in person. Great for travel weeks, rainouts, or quick check-ins.",
    cta: "Book a virtual chat",
    href: "mailto:nickdeisng@gmail.com?subject=Virtual%20pitching%20lesson",
    icon: "virtual" as const,
  },
];

export default function HomePage() {
  return (
    <>
      {/* 1–2. H1 / offer + Text/Call CTAs — dark readable band */}
      <section className="text-band">
        <div className="mx-auto max-w-5xl px-5 py-14 sm:px-8 sm:py-20">
          <Reveal className="mx-auto max-w-3xl space-y-6 text-center sm:text-left">
            <p className="pixel-chip px-3 py-1.5">Naples, Florida area</p>
            <h1 className="pixel-title pixel-title-lg">
              Pitching lessons parents actually get
            </h1>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-ink-soft sm:mx-0">
              Pitching101 helps youth and elite pitchers in Naples build clean
              mechanics, stronger arms, and real confidence — without the
              confusing coach-speak. Camps and clinics when you want them;
              clear paths when you need them.
            </p>
            <ContactCtas className="justify-center pt-1 sm:justify-start" />
            <p className="font-pixel text-sm text-yellow">
              Text or Call 845-768-2211
            </p>
            <Link
              href="/naples-fl-pitching-lessons/"
              className="font-pixel-ui inline-block min-h-11 px-1 py-2 text-base font-semibold text-blue-light underline-offset-4 hover:text-yellow hover:underline"
            >
              Youth pitching lessons Naples FL →
            </Link>
          </Reveal>
        </div>
      </section>

      {/* 3. Trust strip */}
      <section className="text-band border-t-4 border-blue">
        <div className="mx-auto max-w-5xl px-5 py-10 sm:px-8 sm:py-12">
          <Reveal>
            <TrustStrip />
          </Reveal>
        </div>
      </section>

      {/* 4. Stan / PDF / virtual programs */}
      <section
        id="programs"
        className="text-band scroll-mt-24 border-t-4 border-blue"
      >
        <div className="mx-auto max-w-5xl px-5 py-14 sm:px-8 sm:py-18">
          <Reveal className="mx-auto max-w-2xl space-y-4 text-center sm:mx-0 sm:text-left">
            <p className="pixel-chip px-3 py-1.5">Programs</p>
            <h2 className="pixel-title pixel-title-md">Pick your path</h2>
            <p className="leading-relaxed text-ink-soft">
              Start with Stan video notes, a written PDF chart, or a virtual
              lesson. In-person Naples options are the heart of what we do —
              these are the easy on-ramps.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-3 sm:gap-7">
            {programs.map((item, i) => (
              <Reveal key={item.heading} delayMs={i * 80}>
                <article className="pixel-card flex h-full flex-col p-6 sm:p-7">
                  <PixelIcon name={item.icon} />
                  <h3 className="mt-4 font-pixel text-base font-semibold leading-snug text-blue-light">
                    {item.heading}
                  </h3>
                  <p className="mt-2.5 flex-1 text-sm leading-relaxed text-ink-soft">
                    {item.blurb}
                  </p>
                  <a
                    href={item.href}
                    className="pixel-btn-ghost mt-6 min-h-11 !px-3.5 !py-2.5"
                  >
                    {item.cta}
                  </a>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* How it works — still content, before decorative slabs */}
      <section
        id="how-it-works"
        className="text-band scroll-mt-24 border-t-4 border-blue bg-surface"
      >
        <div className="mx-auto max-w-5xl px-5 py-14 sm:px-8 sm:py-18">
          <Reveal>
            <h2 className="pixel-title pixel-title-md">How it works</h2>
          </Reveal>
          <ol className="mt-10 grid gap-6 sm:grid-cols-3 sm:gap-7">
            {[
              {
                step: "1",
                title: "Reach out",
                body: "Text, call, or email. Tell us your pitcher’s age, goals, and schedule.",
              },
              {
                step: "2",
                title: "Choose your mode",
                body: "Stan video, PDF chart, virtual lesson, or local Naples session.",
              },
              {
                step: "3",
                title: "Clear next reps",
                body: "You’ll leave knowing what to practice — not guessing.",
              },
            ].map((s, i) => (
              <Reveal key={s.step} delayMs={i * 90}>
                <li className="pixel-card-alt list-none p-6 sm:p-7">
                  <span className="pixel-step">{s.step}</span>
                  <h3 className="mt-4 font-pixel text-base font-semibold text-yellow">
                    {s.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-ink-soft">
                    {s.body}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* 5. GIF color slabs as SUPPORT — art-forward, no competing copy */}
      <section
        className="asset-band-yellow asset-band-full"
        aria-label="Pixel runner"
      >
        <div className="band-inner">
          <Image
            src="/assets/pixel-runner.gif"
            alt="Pixel art baseball runner sprinting"
            width={960}
            height={720}
            className="band-gif"
            unoptimized
          />
        </div>
      </section>

      <section
        className="asset-band-white asset-band-full"
        aria-label="Pixel batter"
      >
        <div className="band-inner">
          <Image
            src="/assets/pixel-batter.jpg"
            alt="Pixel art baseball batter on white"
            width={640}
            height={640}
            className="band-still"
            style={{ imageRendering: "pixelated" }}
          />
        </div>
      </section>

      <section
        className="asset-band-teal asset-band-full"
        aria-label="Pixel swing"
      >
        <div className="band-inner">
          <Image
            src="/assets/pixel-swing-teal.gif"
            alt="Pixel art batter swinging on teal"
            width={960}
            height={720}
            className="band-gif"
            unoptimized
          />
        </div>
      </section>

      {/* Full-width scenic pitcher — pure visual slab, no text */}
      <section
        className="asset-band-stadium asset-band-bleed"
        aria-label="Pixel pitcher scenic"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/pixel-pitcher.gif"
          alt="Pixel art pitcher delivery in a stadium"
          className="bleed-gif"
          width={1280}
          height={720}
          decoding="async"
        />
      </section>

      {/* Closing CTA — dark readable band */}
      <section className="text-band border-t-4 border-blue">
        <div className="mx-auto max-w-5xl px-5 py-14 text-center sm:px-8 sm:py-20">
          <Reveal>
            <h2 className="pixel-title pixel-title-md">Ready when you are</h2>
            <p className="mx-auto mt-4 max-w-xl leading-relaxed text-ink-soft">
              Serving families across the Naples, FL area. No street address
              listed yet — text, call, or email and we’ll point you to the right
              next step.
            </p>
            <p className="mt-4 font-pixel text-base text-yellow">
              Text or Call 845-768-2211
            </p>
            <ContactCtas className="mt-8 justify-center" />
            <p className="mt-8">
              <Link
                href="/naples-fl-pitching-lessons/"
                className="font-pixel-ui inline-block min-h-11 py-2 text-base font-semibold text-blue-light underline-offset-4 hover:text-yellow hover:underline"
              >
                Youth pitching lessons Naples FL →
              </Link>
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
