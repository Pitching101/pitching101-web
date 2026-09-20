import Link from "next/link";
import PixelBall from "@/components/PixelBall";
import PixelIcon from "@/components/PixelIcon";
import TrustStrip from "@/components/TrustStrip";

const programs = [
  {
    heading: "Stan video feedback for busy Naples weeks",
    blurb:
      "Send a throwing video. Get clear, coach-level notes back — easy for kids, easy for parents.",
    cta: "Ask about Stan",
    href: "mailto:nickdeisng@gmail.com?subject=Stan%20video%20feedback",
    icon: "video" as const,
  },
  {
    heading: "PDF pitching chart you can follow at home",
    blurb:
      "A simple written chart your pitcher can follow between sessions — quality innings and throw-volume cues, no jargon.",
    cta: "Request the PDF chart",
    href: "mailto:nickdeisng@gmail.com?subject=PDF%20pitching%20chart",
    icon: "plan" as const,
  },
  {
    heading: "Virtual pitching lessons when travel hits",
    blurb:
      "Live online coaching when you can’t make it in person. Great for travel weeks or check-ins.",
    cta: "Book a virtual chat",
    href: "mailto:nickdeisng@gmail.com?subject=Virtual%20pitching%20lesson",
    icon: "virtual" as const,
  },
];

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-5xl gap-12 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div className="space-y-7">
            <p className="pixel-chip px-3 py-1.5">Naples, Florida area</p>
            <h1 className="text-4xl font-bold tracking-tight text-ink sm:text-5xl sm:leading-[1.12]">
              Pitching lessons parents actually understand
            </h1>
            <p className="max-w-xl text-lg leading-relaxed text-ink-soft">
              Pitching101 helps youth and elite pitchers in Naples build clean
              mechanics, stronger arms, and real confidence — without the
              confusing coach-speak. Camps and clinics when you want them;
              clear paths when you need them.
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a href="tel:8457682211" className="pixel-btn">
                Call 845-768-2211
              </a>
              <a href="mailto:nickdeisng@gmail.com" className="pixel-btn-ghost">
                Email Nick
              </a>
              <Link
                href="/naples-fl-pitching-lessons/"
                className="px-2 py-3 text-sm font-semibold text-blue-dark underline-offset-4 hover:underline"
              >
                Youth pitching lessons Naples FL →
              </Link>
            </div>
          </div>

          <div className="pixel-panel pixel-scanlines relative p-8 text-ink sm:p-10">
            <div className="relative z-10">
              <div className="mb-6 inline-flex">
                <span className="pixel-icon-frame p-1.5" aria-hidden="true">
                  <PixelBall size={48} />
                </span>
              </div>
              <p className="font-pixel text-[0.7rem] leading-relaxed text-blue-dark sm:text-[0.8rem]">
                What families get
              </p>
              <ul className="mt-5 space-y-3.5 text-[0.95rem] leading-relaxed text-ink-soft">
                <li className="flex gap-2.5">
                  <span className="mt-0.5 text-blue" aria-hidden="true">
                    ▢
                  </span>
                  <span>Plain-English feedback after every look</span>
                </li>
                <li className="flex gap-2.5">
                  <span className="mt-0.5 text-blue" aria-hidden="true">
                    ▢
                  </span>
                  <span>Age-right progress for youth &amp; elite arms</span>
                </li>
                <li className="flex gap-2.5">
                  <span className="mt-0.5 text-blue" aria-hidden="true">
                    ▢
                  </span>
                  <span>Local Naples focus + flexible remote options</span>
                </li>
                <li className="flex gap-2.5">
                  <span className="mt-0.5 text-blue" aria-hidden="true">
                    ▢
                  </span>
                  <span>Camps &amp; clinics tone — serious, still fun</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t-4 border-blue-dark bg-blue-soft/50">
        <div className="mx-auto max-w-5xl px-5 py-10 sm:px-8">
          <TrustStrip />
        </div>
      </section>

      <section id="programs" className="scroll-mt-24 border-t-4 border-blue-dark">
        <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-20">
          <div className="max-w-2xl space-y-4">
            <p className="pixel-chip px-3 py-1.5">Programs</p>
            <p className="text-3xl font-bold tracking-tight text-ink">
              Pick a path that fits your week
            </p>
            <p className="leading-relaxed text-ink-soft">
              Start with Stan video notes, a written PDF chart, or a virtual
              lesson. In-person Naples options are the heart of what we do —
              these are the easy on-ramps.
            </p>
          </div>
          <div className="mt-12 grid gap-7 sm:grid-cols-3">
            {programs.map((item) => (
              <article key={item.heading} className="pixel-card flex flex-col p-7">
                <PixelIcon name={item.icon} />
                <h2 className="mt-4 text-lg font-semibold leading-snug text-ink">
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
            ))}
          </div>
        </div>
      </section>

      <section
        id="how-it-works"
        className="scroll-mt-24 border-t-4 border-blue-dark bg-surface"
      >
        <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-20">
          <h2 className="text-3xl font-bold tracking-tight text-ink">
            How it works
          </h2>
          <ol className="mt-10 grid gap-7 sm:grid-cols-3">
            {[
              {
                step: "1",
                title: "Say hello",
                body: "Call or email. Tell us your pitcher’s age, goals, and schedule.",
              },
              {
                step: "2",
                title: "Pick a format",
                body: "Stan video, PDF chart, virtual lesson, or local Naples session.",
              },
              {
                step: "3",
                title: "Get clear next steps",
                body: "You’ll leave knowing what to practice — not guessing.",
              },
            ].map((s) => (
              <li key={s.step} className="pixel-card-alt p-7">
                <span className="pixel-step">{s.step}</span>
                <h3 className="mt-4 font-semibold text-ink">{s.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-ink-soft">
                  {s.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-t-4 border-blue-dark">
        <div className="mx-auto max-w-5xl px-5 py-16 text-center sm:px-8 sm:py-20">
          <h2 className="text-3xl font-bold tracking-tight text-ink">
            Ready when you are
          </h2>
          <p className="mx-auto mt-4 max-w-xl leading-relaxed text-ink-soft">
            Serving families across the Naples, FL area. No street address
            listed yet — call or email and we’ll point you to the right next
            step.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <a href="tel:8457682211" className="pixel-btn">
              845-768-2211
            </a>
            <a href="mailto:nickdeisng@gmail.com" className="pixel-btn-ghost">
              nickdeisng@gmail.com
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
