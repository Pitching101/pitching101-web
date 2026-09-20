import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import Logo from "@/components/Logo";
import ReviewsCarousel from "@/components/ReviewsCarousel";

const familiar = [
  "How do I help my child throw harder and more accurately?",
  "What’s the right way to train without risking an injury?",
  "Why does every lesson or travel team have to cost a fortune?",
];

const ageGoals = [
  "Build skills that last beyond baseball",
  "Improve the physical and mental game",
  "Use routines they can do anywhere — no fancy gear required",
];

const journeyAreas = [
  { title: "Affordable Training", note: "Real help without the crazy price tag." },
  { title: "Lifelong Routines", note: "Simple habits kids can keep." },
  { title: "Safe Techniques", note: "Arm care first. Stay on the mound." },
  { title: "Flexible Options", note: "Local, DIY, or hybrid — your call." },
];

const trainingOptions = [
  { label: "Private", note: "In-person, Naples-area focus." },
  { label: "DIY", note: "Guide + video — train at home with a clear plan." },
  { label: "Hybrid", note: "Mix DIY with live check-ins." },
];

const stanOffers = [
  {
    title: "Pitching PDF",
    note: "A simple plan and chart you can use at home.",
    href: "mailto:nickdeisng@gmail.com?subject=Pitching%20PDF",
    cta: "Email For PDF",
  },
  {
    title: "Virtual Lessons",
    note: "Live online coaching when you can’t make it in person.",
    href: "mailto:nickdeisng@gmail.com?subject=Virtual%20Lessons",
    cta: "Email To Book",
  },
  {
    title: "Free Lead Magnet",
    note: "Starter checklist and email tips (Stan store link soon).",
    href: "/guides/",
    cta: "See Free Guides",
  },
];

const freeGuides = [
  {
    title: "Arm-Care Checklist",
    note: "Simple warm-up and cool-down steps so young arms stay healthy.",
    href: "mailto:nickdeisng@gmail.com?subject=Arm-Care%20Checklist",
    cta: "Get The Checklist",
  },
  {
    title: "Strike % Tips",
    note: "Parent-friendly cues that help kids throw more strikes.",
    href: "mailto:nickdeisng@gmail.com?subject=Strike%20Percent%20Tips",
    cta: "Get The Tips",
  },
  {
    title: "Pre-Catch Warmup",
    note: "A short routine before catch so practice starts right.",
    href: "mailto:nickdeisng@gmail.com?subject=Pre-Catch%20Warmup",
    cta: "Get The Warmup",
  },
];

export default function HomePage() {
  return (
    <>
      {/* 1. Hero — pitcher GIF as background overlay + dark scrim */}
      <section className="hero-overlay" aria-label="Youth Pitching Lessons In Naples, FL">
        <div className="hero-overlay-media" aria-hidden="true">
          <Image
            src="/assets/pixel-pitcher.gif"
            alt=""
            fill
            className="hero-overlay-gif"
            unoptimized
            priority
            sizes="100vw"
          />
          <div className="hero-overlay-scrim" />
        </div>
        <div className="hero-overlay-inner">
          <Reveal from="left" className="hero-overlay-copy">
            <p className="ui-chip px-3.5 py-1.5">Naples, FL</p>
            <h1 className="ui-title ui-title-hero hero-overlay-title">
              Youth Pitching Lessons In Naples, FL
            </h1>
            <p className="text-lg leading-relaxed text-white/90 sm:text-xl">
              Clear Coaching For Kids And Parents. No Jargon.
            </p>
            <div className="flex flex-wrap gap-3 pt-1">
              <Link href="/contact/" className="btn">
                Contact
              </Link>
              <Link href="/guides/" className="btn-secondary !border-white/70 !bg-transparent !text-white hover:!bg-white/15 hover:!text-white">
                Free Guides
              </Link>
            </div>
            <p className="text-sm text-white/80">
              Arm Care First · Reach Out Before You Drive
            </p>
          </Reveal>
        </div>
      </section>

      {/* 2. #BBD6F1 — bold-blue card logo + I’m Your Guy */}
      <section className="band-soft" aria-label="I'm Your Guy">
        <div className="mx-auto max-w-3xl space-y-8 px-5 py-14 sm:px-8 sm:py-16">
          <Reveal>
            <Logo height={88} className="logo-overlay-mark" />
          </Reveal>
          <Reveal delayMs={40} className="space-y-5">
            <h2 className="ui-title ui-title-md">
              I’m Your Guy If You’re Looking To Throw Strikes, Build A Strong
              Foundation, Train Healthy Patterns, And Get Affordable Lessons.
            </h2>
            <ul className="space-y-3 text-lg leading-relaxed text-ink-soft">
              {familiar.map((q) => (
                <li key={q} className="pl-1">
                  “{q}”
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* 3. WHITE — Client Reviews carousel (real Trustpilot) */}
      <section className="text-band" id="reviews" aria-label="Client Reviews">
        <div className="mx-auto max-w-3xl space-y-6 px-5 py-14 sm:px-8 sm:py-16">
          <Reveal className="space-y-6">
            <h2 className="ui-title ui-title-md">Client Reviews</h2>
            <ReviewsCarousel />
          </Reveal>
        </div>
      </section>

      {/* 4. #BBD6F1 — ages 8–14 goals (+ runner, flush) */}
      <section id="who" className="band-soft scroll-mt-24" aria-label="Ages 8 To 14">
        <div className="content-row">
          <Reveal from="left" className="content-row-copy content-row-copy-wide">
            <h2 className="ui-title ui-title-md">
              To Help Young Pitchers Ages 8–14
            </h2>
            <ul className="space-y-3 text-lg leading-relaxed text-ink-soft">
              {ageGoals.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Reveal>
          <Reveal from="right" delayMs={80} className="content-row-media">
            <Image
              src="/assets/pixel-runner.gif"
              alt="Pixel art baseball runner"
              width={800}
              height={600}
              className="row-gif"
              unoptimized
            />
          </Reveal>
        </div>
      </section>

      {/* 5. WHITE — child’s journey / four key areas */}
      <section className="text-band" aria-label="Journey">
        <div className="mx-auto max-w-3xl space-y-8 px-5 py-14 sm:px-8 sm:py-16">
          <Reveal className="space-y-4">
            <h2 className="ui-title ui-title-md">
              Your Child’s Journey Starts Here
            </h2>
            <p className="text-base text-ink-soft">
              Four Simple Focus Areas — Confident, Injury-Free Pitching.
            </p>
          </Reveal>
          <Reveal delayMs={40}>
            <ul className="grid gap-5 sm:grid-cols-2">
              {journeyAreas.map((item) => (
                <li key={item.title} className="space-y-1">
                  <p className="font-semibold text-blue-dark">{item.title}</p>
                  <p className="text-base text-ink-soft">{item.note}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* 6. #BBD6F1 — Free Guides lead magnets */}
      <section id="guides" className="band-soft scroll-mt-24" aria-label="Free Guides">
        <div className="mx-auto max-w-3xl space-y-8 px-5 py-14 sm:px-8 sm:py-16">
          <Reveal className="space-y-3">
            <h2 className="ui-title ui-title-md">Free Guides</h2>
            <p className="text-base text-ink-soft">
              Quick Parent-Friendly PDFs. Stan Store Capture Links Coming — Email Works Now.
            </p>
          </Reveal>
          <Reveal delayMs={40}>
            <ul className="grid gap-4 sm:grid-cols-3">
              {freeGuides.map((g) => (
                <li key={g.title} className="card flex flex-col gap-3 p-5">
                  <p className="font-semibold text-blue-dark">{g.title}</p>
                  <p className="flex-1 text-sm leading-relaxed text-ink-soft">{g.note}</p>
                  <a href={g.href} className="btn-ghost !min-h-9 !px-3 !py-1.5 !text-sm">
                    {g.cta}
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delayMs={60}>
            <Link href="/guides/" className="nav-link font-semibold text-blue-dark underline underline-offset-4">
              See All Free Guides
            </Link>
          </Reveal>
        </div>
      </section>

      {/* 7. WHITE — Stan Store Offers */}
      <section id="offers" className="text-band scroll-mt-24" aria-label="Stan Store Offers">
        <div className="mx-auto max-w-3xl space-y-8 px-5 py-14 sm:px-8 sm:py-16">
          <Reveal className="space-y-3">
            <h2 className="ui-title ui-title-md">Stan Store Offers</h2>
            <p className="text-base text-ink-soft">
              PDF, Virtual, And Lead-Magnet Options — Stan Store Links Update When
              Ready. Email Works Now.
            </p>
          </Reveal>
          <Reveal delayMs={40}>
            <ul className="grid gap-4 sm:grid-cols-3">
              {stanOffers.map((offer) => (
                <li key={offer.title} className="card flex flex-col gap-3 p-5">
                  <p className="font-semibold text-blue-dark">{offer.title}</p>
                  <p className="flex-1 text-sm leading-relaxed text-ink-soft">
                    {offer.note}
                  </p>
                  {offer.href.startsWith("/") ? (
                    <Link href={offer.href} className="btn-ghost !min-h-9 !px-3 !py-1.5 !text-sm">
                      {offer.cta}
                    </Link>
                  ) : (
                    <a href={offer.href} className="btn-ghost !min-h-9 !px-3 !py-1.5 !text-sm">
                      {offer.cta}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* 8. #BBD6F1 — how it works */}
      <section
        id="how-it-works"
        className="band-soft scroll-mt-24"
        aria-label="How It Works"
      >
        <div className="mx-auto max-w-3xl space-y-10 px-5 py-14 sm:px-8 sm:py-16">
          <Reveal className="space-y-4">
            <h2 className="ui-title ui-title-md">How It Works</h2>
            <p className="text-base text-ink-soft">Easy To Start Today.</p>
          </Reveal>

          <Reveal delayMs={40} className="space-y-6">
            <div className="space-y-3">
              <p className="font-semibold text-blue-dark">
                Step 1: Choose Your Training Option
              </p>
              <ul className="grid gap-4 sm:grid-cols-3">
                {trainingOptions.map((opt) => (
                  <li key={opt.label} className="space-y-1">
                    <p className="font-semibold text-ink">{opt.label}</p>
                    <p className="text-sm text-ink-soft">{opt.note}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-2">
              <p className="font-semibold text-blue-dark">Step 2: Start Training</p>
              <ul className="space-y-1.5 text-base text-ink-soft">
                <li>A pitching plan that fits your child</li>
                <li>Video demos for drills and routines</li>
                <li>Ongoing tips so they keep improving</li>
              </ul>
            </div>
            <div className="space-y-2">
              <p className="font-semibold text-blue-dark">Step 3: Watch Them Thrive</p>
              <p className="text-base text-ink-soft">
                Strength, confidence, and mound skills — and you’ll know you
                helped them get there.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 9. WHITE — single Contact CTA → /contact/ */}
      <section id="contact" className="text-band scroll-mt-24" aria-label="Contact">
        <div className="mx-auto max-w-3xl space-y-6 px-5 py-14 text-center sm:px-8 sm:py-16 sm:text-left">
          <Reveal className="space-y-5">
            <h2 className="ui-title ui-title-md">Ready To Talk?</h2>
            <p className="text-lg text-ink-soft">
              Text, Call, Or Email — Naples, FL Families Welcome.
            </p>
            <div className="flex justify-center sm:justify-start">
              <Link href="/contact/" className="btn">
                Contact
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
