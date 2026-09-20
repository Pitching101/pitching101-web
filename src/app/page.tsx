import Link from "next/link";

const programs = [
  {
    title: "Stan video feedback",
    blurb:
      "Send a throwing video. Get clear, coach-level notes back — easy for kids, easy for parents.",
    cta: "Ask about Stan",
    href: "mailto:nickdeisng@gmail.com?subject=Stan%20video%20feedback",
  },
  {
    title: "PDF pitching plans",
    blurb:
      "Simple written plans your pitcher can follow between sessions. No jargon — just next steps.",
    cta: "Request a PDF plan",
    href: "mailto:nickdeisng@gmail.com?subject=PDF%20pitching%20plan",
  },
  {
    title: "Virtual lessons",
    blurb:
      "Live online coaching when you can’t make it in person. Great for travel weeks or check-ins.",
    cta: "Book a virtual chat",
    href: "mailto:nickdeisng@gmail.com?subject=Virtual%20pitching%20lesson",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="bg-gradient-to-b from-blue-soft to-white">
        <div className="mx-auto grid max-w-5xl gap-10 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-2 lg:items-center">
          <div className="space-y-6">
            <p className="inline-flex rounded-full bg-white px-3 py-1 text-sm font-medium text-blue shadow-sm ring-1 ring-blue-light">
              Naples, Florida area
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-blue-dark sm:text-5xl">
              Pitching lessons parents actually understand
            </h1>
            <p className="text-lg leading-relaxed text-blue-dark/80">
              Pitching101 helps youth and elite pitchers in Naples build clean
              mechanics, stronger arms, and real confidence — without the
              confusing coach-speak. Camps and clinics when you want them;
              clear paths when you need them.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="tel:8457682211"
                className="rounded-full bg-blue px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-dark"
              >
                Call 845-768-2211
              </a>
              <a
                href="mailto:nickdeisng@gmail.com"
                className="rounded-full border border-blue bg-white px-5 py-3 text-sm font-semibold text-blue hover:bg-blue-soft"
              >
                Email Nick
              </a>
              <Link
                href="/naples-fl-pitching-lessons"
                className="rounded-full px-5 py-3 text-sm font-semibold text-blue-dark underline-offset-4 hover:underline"
              >
                Naples FL pitching lessons →
              </Link>
            </div>
          </div>
          <div className="rounded-3xl bg-blue p-8 text-white shadow-lg sm:p-10">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-white/15 text-3xl">
              ⚾
            </div>
            <h2 className="text-2xl font-bold">What families get</h2>
            <ul className="mt-4 space-y-3 text-blue-light">
              <li>✓ Plain-English feedback after every look</li>
              <li>✓ Age-right progress for youth &amp; elite arms</li>
              <li>✓ Local Naples focus + flexible remote options</li>
              <li>✓ Camps &amp; clinics tone — serious, still fun</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="programs" className="scroll-mt-20 border-t border-blue-light/60">
        <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 sm:py-16">
          <div className="max-w-2xl space-y-3">
            <h2 className="text-3xl font-bold text-blue-dark">
              Pick a path that fits your week
            </h2>
            <p className="text-blue-dark/75">
              Start with Stan video notes, a written PDF plan, or a virtual
              lesson. In-person Naples options are the heart of what we do —
              these are the easy on-ramps.
            </p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {programs.map((item) => (
              <article
                key={item.title}
                className="flex flex-col rounded-2xl border border-blue-light bg-white p-6 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-blue-dark">
                  {item.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-blue-dark/75">
                  {item.blurb}
                </p>
                <a
                  href={item.href}
                  className="mt-5 inline-flex rounded-full bg-blue-soft px-4 py-2 text-sm font-semibold text-blue hover:bg-blue-light"
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
        className="scroll-mt-20 bg-blue-soft/60 border-t border-blue-light/60"
      >
        <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 sm:py-16">
          <h2 className="text-3xl font-bold text-blue-dark">How it works</h2>
          <ol className="mt-8 grid gap-6 sm:grid-cols-3">
            {[
              {
                step: "1",
                title: "Say hello",
                body: "Call or email. Tell us your pitcher’s age, goals, and schedule.",
              },
              {
                step: "2",
                title: "Pick a format",
                body: "Stan video, PDF plan, virtual lesson, or local Naples session.",
              },
              {
                step: "3",
                title: "Get clear next steps",
                body: "You’ll leave knowing what to practice — not guessing.",
              },
            ].map((s) => (
              <li
                key={s.step}
                className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-blue-light"
              >
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-blue text-sm font-bold text-white">
                  {s.step}
                </span>
                <h3 className="mt-3 font-semibold text-blue-dark">{s.title}</h3>
                <p className="mt-2 text-sm text-blue-dark/75">{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-t border-blue-light/60">
        <div className="mx-auto max-w-5xl px-4 py-14 text-center sm:px-6 sm:py-16">
          <h2 className="text-3xl font-bold text-blue-dark">
            Ready when you are
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-blue-dark/75">
            Serving families across the Naples, FL area. No street address
            listed yet — call or email and we’ll point you to the right next
            step.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="tel:8457682211"
              className="rounded-full bg-blue px-6 py-3 text-sm font-semibold text-white hover:bg-blue-dark"
            >
              845-768-2211
            </a>
            <a
              href="mailto:nickdeisng@gmail.com"
              className="rounded-full border border-blue px-6 py-3 text-sm font-semibold text-blue hover:bg-blue-soft"
            >
              nickdeisng@gmail.com
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
