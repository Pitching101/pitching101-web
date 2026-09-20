import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import TrustStrip from "@/components/TrustStrip";
import Logo from "@/components/Logo";

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
  { title: "Affordable training", note: "Real help without the crazy price tag." },
  { title: "Lifelong routines", note: "Simple habits kids can keep." },
  { title: "Safe techniques", note: "Arm care first. Stay on the mound." },
  { title: "Flexible options", note: "Local, DIY, or hybrid — your call." },
];

const together = [
  "Avoid injuries and build mound confidence",
  "Mechanics that play to their strengths",
  "Coaching that doesn’t cost a fortune",
];

const trainingOptions = [
  { label: "Private clinics", note: "In-person, Naples-area focus." },
  { label: "DIY guide + video", note: "Train at home with a clear plan." },
  { label: "Hybrid", note: "Mix DIY with live check-ins." },
];

export default function HomePage() {
  return (
    <>
      {/* 1. WHITE — hero: text LEFT, pitcher RIGHT (flush, no frame) */}
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
            <div className="flex flex-wrap gap-3 pt-1">
              <Link href="/contact/" className="btn">
                Contact
              </Link>
              <Link href="/naples-fl-pitching-lessons/" className="btn-ghost">
                Naples FL →
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

      {/* 2. LIGHT BLUE — parent pain / sounds familiar */}
      <section className="band-soft" aria-label="Sounds familiar">
        <div className="mx-auto max-w-3xl space-y-6 px-5 py-14 sm:px-8 sm:py-16">
          <Reveal>
            <Logo variant="on-blue" height={44} />
          </Reveal>
          <Reveal delayMs={40} className="space-y-5">
            <h2 className="ui-title ui-title-md">
              If you’re a parent of a young pitcher, this probably sounds familiar
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

      {/* 3. WHITE — you’re not alone */}
      <section className="text-band" aria-label="You’re not alone">
        <div className="mx-auto max-w-3xl space-y-5 px-5 py-14 sm:px-8 sm:py-16">
          <Reveal className="space-y-5">
            <h2 className="ui-title ui-title-md">You’re not alone.</h2>
            <p className="text-lg leading-relaxed text-ink-soft">
              Families like yours want kids to improve, build confidence, and stay
              healthy — without crazy costs or confusion about what to do next.
            </p>
            <TrustStrip />
          </Reveal>
        </div>
      </section>

      {/* 4. YELLOW (matches runner GIF bg) — ages 8–14 + runner flush, no frame */}
      <section id="who" className="asset-band-yellow scroll-mt-24" aria-label="Ages 8 to 14">
        <div className="content-row">
          <Reveal from="left" className="content-row-copy content-row-copy-wide">
            <h2 className="ui-title ui-title-md">
              For young pitchers ages 8–14
            </h2>
            <ul className="space-y-3 text-lg leading-relaxed">
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

      {/* 5. WHITE — four key areas / journey */}
      <section className="text-band" aria-label="Journey">
        <div className="mx-auto max-w-3xl space-y-8 px-5 py-14 sm:px-8 sm:py-16">
          <Reveal className="space-y-4">
            <h2 className="ui-title ui-title-md">
              Your child’s journey starts here
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

      {/* 6. LIGHT BLUE — I’ve been where you are */}
      <section className="band-soft" aria-label="Been where you are">
        <div className="mx-auto max-w-3xl space-y-6 px-5 py-14 sm:px-8 sm:py-16">
          <Reveal className="space-y-5">
            <h2 className="ui-title ui-title-md">I’ve been where you are.</h2>
            <p className="text-lg leading-relaxed text-ink-soft">
              Balancing cost, time, and what’s best for your kid is hard. This
              program stays simple, affordable, and built for real families.
            </p>
            <p className="font-semibold text-blue-dark">What we do together:</p>
            <ul className="space-y-2 text-lg leading-relaxed text-ink-soft">
              {together.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="text-lg font-semibold text-ink">
              Your child has what it takes. I’ll help you get them there.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 7. WHITE — how it works + training options */}
      <section id="how-it-works" className="text-band scroll-mt-24" aria-label="How it works">
        <div className="mx-auto max-w-3xl space-y-10 px-5 py-14 sm:px-8 sm:py-16">
          <Reveal className="space-y-4">
            <h2 className="ui-title ui-title-md">How it works</h2>
            <p className="text-base text-ink-soft">Easy to start today.</p>
          </Reveal>

          <Reveal delayMs={40} className="space-y-6">
            <div className="space-y-3">
              <p className="font-semibold text-blue-dark">
                1. Choose your training option
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
              <p className="font-semibold text-blue-dark">2. Start training</p>
              <ul className="space-y-1.5 text-base text-ink-soft">
                <li>A pitching plan that fits your child</li>
                <li>Video demos for drills and routines</li>
                <li>Ongoing tips so they keep improving</li>
              </ul>
            </div>
            <div className="space-y-2">
              <p className="font-semibold text-blue-dark">3. Watch them thrive</p>
              <p className="text-base text-ink-soft">
                Strength, confidence, and mound skills — and you’ll know you
                helped them get there.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 8. LIGHT BLUE — single Contact CTA */}
      <section id="contact" className="band-soft scroll-mt-24" aria-label="Contact">
        <div className="mx-auto max-w-3xl space-y-6 px-5 py-14 text-center sm:px-8 sm:py-16 sm:text-left">
          <Reveal className="space-y-5">
            <h2 className="ui-title ui-title-md">Ready to talk?</h2>
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
