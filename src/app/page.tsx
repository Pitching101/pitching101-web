import Link from "next/link";
import Image from "next/image";
import PixelIcon from "@/components/PixelIcon";
import Reveal from "@/components/Reveal";
import TrustStrip from "@/components/TrustStrip";
import HudBar from "@/components/HudBar";

const programs = [
  {
    heading: "Stan video feedback for busy Naples weeks",
    blurb:
      "Send a throwing clip. Get clear, coach-level notes back — easy for kids, easy for parents. Like a save file for the mound.",
    cta: "Queue Stan feedback",
    href: "mailto:nickdeisng@gmail.com?subject=Stan%20video%20feedback",
    icon: "video" as const,
  },
  {
    heading: "PDF pitching chart you can follow at home",
    blurb:
      "A simple written chart your pitcher can follow between sessions — quality innings and throw-volume cues, no jargon boss fights.",
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
      {/* Dark navy hero + gifted HUD art */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-5xl gap-12 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-2 lg:items-center lg:gap-16">
          <Reveal className="space-y-7">
            <p className="pixel-chip px-3 py-1.5">Naples, Florida area</p>
            <h1 className="pixel-title pixel-title-lg">
              Press start on pitching lessons parents actually get
            </h1>
            <p className="max-w-xl text-lg leading-relaxed text-ink-soft">
              Pitching101 helps youth and elite pitchers in Naples build clean
              mechanics, stronger arms, and real confidence — without the
              confusing coach-speak. Camps and clinics when you want them;
              clear paths when you need them. Game on for the kid. Peace of
              mind for the parent.
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a href="tel:8457682211" className="pixel-btn">
                Call 845-768-2211
              </a>
              <a href="sms:8457682211" className="pixel-btn-ghost">
                Text 845-768-2211
              </a>
              <a href="mailto:nickdeisng@gmail.com" className="pixel-btn-ghost">
                Email Nick
              </a>
            </div>
            <p className="font-pixel text-sm text-yellow">
              Text or Call 845-768-2211
            </p>
            <Link
              href="/naples-fl-pitching-lessons/"
              className="font-pixel-ui inline-block px-1 text-base font-semibold text-blue-light underline-offset-4 hover:text-yellow hover:underline"
            >
              Youth pitching lessons Naples FL →
            </Link>
          </Reveal>

          <Reveal delayMs={80}>
            <div className="space-y-4">
              <div className="gift-frame overflow-hidden">
                <Image
                  src="/assets/arcade-baseball-hud.jpg"
                  alt="Pixel arcade baseball HUD art"
                  width={600}
                  height={600}
                  className="h-auto w-full"
                  priority
                />
              </div>
              <div className="pixel-panel p-4">
                <HudBar />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Runner GIF — solid #FFC600 */}
      <section className="asset-band-yellow" aria-label="Pixel runner highlight">
        <div className="mx-auto grid max-w-5xl items-center gap-10 px-5 py-14 sm:px-8 sm:py-16 lg:grid-cols-2">
          <Reveal>
            <div className="gift-frame-yellow mx-auto overflow-hidden lg:mx-0">
              <Image
                src="/assets/pixel-runner.gif"
                alt="Pixel art baseball runner sprinting"
                width={800}
                height={600}
                className="gift-gif gift-gif-lg"
                unoptimized
              />
            </div>
          </Reveal>
          <Reveal delayMs={80} className="space-y-4">
            <p className="font-pixel text-sm font-semibold uppercase tracking-wide">
              Power-up · base path
            </p>
            <h2 className="pixel-title pixel-title-md">Run the bases with clear next reps</h2>
            <p className="max-w-md text-base leading-relaxed">
              No jargon boss fights — just plain-English feedback your pitcher
              can use between sessions. Parents stay in the loop the whole run.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <a href="sms:8457682211" className="pixel-btn-on-light">
                Text 845-768-2211
              </a>
              <a href="tel:8457682211" className="pixel-btn-ghost-on-light">
                Call 845-768-2211
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-t-4 border-blue">
        <div className="mx-auto max-w-5xl px-5 py-10 sm:px-8">
          <Reveal>
            <TrustStrip />
          </Reveal>
        </div>
      </section>

      {/* Swing teal GIF — solid #009999 */}
      <section className="asset-band-teal" aria-label="Pixel swing highlight">
        <div className="mx-auto grid max-w-5xl items-center gap-10 px-5 py-14 sm:px-8 sm:py-16 lg:grid-cols-2">
          <Reveal className="space-y-4 order-2 lg:order-1">
            <p className="font-pixel text-sm font-semibold uppercase tracking-wide">
              Swing mode · teal lane
            </p>
            <h2 className="pixel-title pixel-title-md">Mechanics that click — without the noise</h2>
            <p className="max-w-md text-base leading-relaxed">
              Youth and elite arms get age-right progress. You get a coach who
              talks like a human, not a scouting report printer.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <a href="tel:8457682211" className="pixel-btn-on-light">
                Call 845-768-2211
              </a>
              <a href="mailto:nickdeisng@gmail.com" className="pixel-btn-ghost-on-light">
                Email nickdeisng@gmail.com
              </a>
            </div>
          </Reveal>
          <Reveal delayMs={80} className="order-1 lg:order-2">
            <div className="gift-frame-teal mx-auto overflow-hidden lg:ml-auto lg:mr-0">
              <Image
                src="/assets/pixel-swing-teal.gif"
                alt="Pixel art batter swinging on teal"
                width={800}
                height={600}
                className="gift-gif gift-gif-lg"
                unoptimized
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section id="programs" className="scroll-mt-24 border-t-4 border-blue">
        <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-20">
          <Reveal className="max-w-2xl space-y-4">
            <p className="pixel-chip px-3 py-1.5">Programs</p>
            <p className="pixel-title pixel-title-md">Pick your power-up path</p>
            <p className="leading-relaxed text-ink-soft">
              Start with Stan video notes, a written PDF chart, or a virtual
              lesson. In-person Naples options are the heart of what we do —
              these are the easy on-ramps. No side quests required.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-7 sm:grid-cols-3">
            {programs.map((item, i) => (
              <Reveal key={item.heading} delayMs={i * 80}>
                <article className="pixel-card flex h-full flex-col p-7">
                  <PixelIcon name={item.icon} />
                  <h2 className="mt-4 font-pixel text-base font-semibold leading-snug text-blue-light">
                    {item.heading}
                  </h2>
                  <p className="mt-2.5 flex-1 text-sm leading-relaxed text-ink-soft">
                    {item.blurb}
                  </p>
                  <a
                    href={item.href}
                    className="pixel-btn-ghost mt-6 !px-3.5 !py-2"
                  >
                    {item.cta}
                  </a>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pitcher GIF — stadium backdrop match #DBCEBD */}
      <section className="asset-band-stadium" aria-label="Pixel pitcher highlight">
        <div className="mx-auto grid max-w-5xl items-center gap-10 px-5 py-14 sm:px-8 sm:py-16 lg:grid-cols-2">
          <Reveal>
            <div className="gift-frame-stadium mx-auto overflow-hidden lg:mx-0">
              <Image
                src="/assets/pixel-pitcher.gif"
                alt="Pixel art pitcher delivery in stadium"
                width={800}
                height={600}
                className="gift-gif gift-gif-lg"
                unoptimized
              />
            </div>
          </Reveal>
          <Reveal delayMs={80} className="space-y-4">
            <p className="font-pixel text-sm font-semibold uppercase tracking-wide">
              Mound mode · stadium cam
            </p>
            <h2 className="pixel-title pixel-title-md">From the stretch to game day</h2>
            <p className="max-w-md text-base leading-relaxed">
              Local Naples focus with flexible remote options when travel or
              weather hits. Text or call — we’ll point you to the right next
              step.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <a href="sms:8457682211" className="pixel-btn-on-light">
                Text or Call 845-768-2211
              </a>
              <a href="tel:8457682211" className="pixel-btn-ghost-on-light">
                Call now
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section
        id="how-it-works"
        className="scroll-mt-24 border-t-4 border-blue bg-surface"
      >
        <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-20">
          <Reveal>
            <h2 className="pixel-title pixel-title-md">How the run works</h2>
          </Reveal>
          <ol className="mt-10 grid gap-7 sm:grid-cols-3">
            {[
              {
                step: "1",
                title: "Hit start",
                body: "Text, call, or email. Tell us your pitcher’s age, goals, and schedule.",
              },
              {
                step: "2",
                title: "Choose your mode",
                body: "Stan video, PDF chart, virtual lesson, or local Naples session.",
              },
              {
                step: "3",
                title: "Unlock clear next reps",
                body: "You’ll leave knowing what to practice — not guessing.",
              },
            ].map((s, i) => (
              <Reveal key={s.step} delayMs={i * 90}>
                <li className="pixel-card-alt list-none p-7">
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

      {/* Batter accent on blue soft block */}
      <section className="asset-band-blue" aria-label="Pixel batter accent">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 px-5 py-14 sm:flex-row sm:justify-between sm:px-8 sm:py-16">
          <Reveal className="max-w-lg space-y-3">
            <p className="pixel-chip px-3 py-1.5">Bonus sprite</p>
            <h2 className="pixel-title pixel-title-md">Camps &amp; clinics energy — serious, still fun</h2>
            <p className="leading-relaxed text-ink-soft">
              Keep the pixel vibes. Keep the coaching clear. Serving families
              across the Naples, FL area.
            </p>
          </Reveal>
          <Reveal delayMs={80}>
            <div className="gift-frame overflow-hidden bg-white">
              <Image
                src="/assets/pixel-batter.jpg"
                alt="Pixel art baseball batter"
                width={280}
                height={280}
                className="h-auto w-[200px] sm:w-[240px]"
                style={{ imageRendering: "pixelated" }}
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-t-4 border-blue">
        <div className="mx-auto max-w-5xl px-5 py-16 text-center sm:px-8 sm:py-20">
          <Reveal>
            <h2 className="pixel-title pixel-title-md">
              Continue? We’re ready when you are
            </h2>
            <p className="mx-auto mt-4 max-w-xl leading-relaxed text-ink-soft">
              Serving families across the Naples, FL area. No street address
              listed yet — text, call, or email and we’ll point you to the right
              next step.
            </p>
            <p className="mt-4 font-pixel text-base text-yellow">
              Text or Call 845-768-2211
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a href="tel:8457682211" className="pixel-btn">
                Call 845-768-2211
              </a>
              <a href="sms:8457682211" className="pixel-btn-ghost">
                Text 845-768-2211
              </a>
              <a href="mailto:nickdeisng@gmail.com" className="pixel-btn-ghost">
                nickdeisng@gmail.com
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
