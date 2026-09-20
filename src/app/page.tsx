import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import Logo from "@/components/Logo";
import ReviewsCarousel from "@/components/ReviewsCarousel";

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
    title: "Free Lead Signup",
    note: "Grab the free checklist and email tips (Stan link soon).",
    href: "mailto:nickdeisng@gmail.com?subject=Free%20Lead%20Signup",
    cta: "Email To Join",
  },
];

export default function HomePage() {
  return (
    <>
      {/* 1. Hero — pitcher GIF as background overlay + scrim */}
      <section className="hero-overlay" aria-label="Hero">
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
              Clear coaching for kids and parents. No jargon.
            </p>
            <div className="flex flex-wrap gap-3 pt-1">
              <Link href="/contact/" className="btn">
                Contact
              </Link>
            </div>
            <p className="text-sm text-white/80">
              Arm care first · Reach out before you drive
            </p>
          </Reveal>
        </div>
      </section>

      {/* 2. #BBD6F1 — I’m Your Guy + larger logo on overlay */}
      <section className="band-soft" aria-label="I'm your guy">
        <div className="mx-auto max-w-3xl space-y-8 px-5 py-14 sm:px-8 sm:py-16">
          <Reveal>
            <div className="logo-overlay-badge">
              <Logo variant="on-blue" height={72} className="logo-overlay-mark" />
            </div>
          </Reveal>
          <Reveal delayMs={40} className="space-y-4">
            <h2 className="ui-title ui-title-md">
              I’m Your Guy If You’re Looking To Throw Strikes, Build A Strong
              Foundation, Train Healthy Patterns, And Affordable Lessons.
            </h2>
            <p className="text-base leading-relaxed text-ink-soft sm:text-lg">
              Clear cues. Healthy arms. Plans that fit real families.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 3. WHITE — Client Reviews carousel */}
      <section className="text-band" aria-label="Client Reviews">
        <div className="mx-auto max-w-3xl space-y-6 px-5 py-14 sm:px-8 sm:py-16">
          <Reveal className="space-y-6">
            <h2 className="ui-title ui-title-md">Client Reviews</h2>
            <ReviewsCarousel />
          </Reveal>
        </div>
      </section>

      {/* 4. #BBD6F1 — ages 8–14 goals (+ runner, flush) */}
      <section id="who" className="band-soft scroll-mt-24" aria-label="Ages 8 to 14">
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
              Four simple focus areas — confident, injury-free pitching.
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

      {/* 6. #BBD6F1 — Stan Store Offers (replaces “I’ve been where you are”) */}
      <section id="offers" className="band-soft scroll-mt-24" aria-label="Stan Store Offers">
        <div className="mx-auto max-w-3xl space-y-8 px-5 py-14 sm:px-8 sm:py-16">
          <Reveal className="space-y-3">
            <h2 className="ui-title ui-title-md">Stan Store Offers</h2>
            <p className="text-base text-ink-soft">
              Online options while the live Stan store URL is set up — email works now.
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
                  <a href={offer.href} className="btn-ghost !min-h-9 !px-3 !py-1.5 !text-sm">
                    {offer.cta}
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* 7. WHITE — how it works */}
      <section
        id="how-it-works"
        className="text-band scroll-mt-24"
        aria-label="How It Works"
      >
        <div className="mx-auto max-w-3xl space-y-10 px-5 py-14 sm:px-8 sm:py-16">
          <Reveal className="space-y-4">
            <h2 className="ui-title ui-title-md">How It Works</h2>
            <p className="text-base text-ink-soft">Easy to start today.</p>
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

      {/* 8. #BBD6F1 — single Contact CTA → /contact/ */}
      <section id="contact" className="band-soft scroll-mt-24" aria-label="Contact">
        <div className="mx-auto max-w-3xl space-y-6 px-5 py-14 text-center sm:px-8 sm:py-16 sm:text-left">
          <Reveal className="space-y-5">
            <h2 className="ui-title ui-title-md">Ready To Talk?</h2>
            <p className="text-lg text-ink-soft">
              Text, call, or email — Naples, FL families welcome.
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
