import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import Logo from "@/components/Logo";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet Coach Nick at Pitching101 — youth pitching lessons in Naples, FL. Clear coaching, arm care first.",
};

export default function AboutPage() {
  return (
    <article className="mx-auto max-w-3xl px-5 py-14 sm:px-8 sm:py-20">
      <Reveal className="space-y-6">
        <p className="text-base font-semibold text-blue-dark">
          <Link href="/" className="hover:underline">
            ← Home
          </Link>
        </p>
        <Logo height={64} />
        <h1 className="ui-title ui-title-lg">Hey, I'm Nick</h1>

        <div className="grid items-start gap-8 sm:grid-cols-[minmax(0,14rem)_1fr]">
          <Image
            src="/assets/nick-coach.png"
            alt="Coach Nick — youth pitching coach in Naples, FL"
            width={448}
            height={298}
            className="w-full rounded-2xl object-cover shadow-md"
            priority
          />
          <div className="space-y-4 text-base leading-relaxed text-ink-soft">
            <p className="text-lg leading-relaxed">
              I Help Young Pitchers (And Their Parents) Throw More Strikes Without
              The Jargon Or The Crazy Price Tag.
            </p>
            <p>
              In Plain English: Kids Ages 8–14 Need Clear Cues, Healthy Arm Habits,
              And A Plan They Can Actually Use Between Practices. That's What I
              Coach.
            </p>
            <p>
              I Work With Naples, FL Families — In Person When It Fits, Plus PDF
              And Virtual Options When Life Is Busy. Arm Care Comes First. Velocity
              And Command Follow When Mechanics Are Honest.
            </p>
            <p>
              If You're A Parent Who Wants Straight Talk And Affordable Help, You're
              In The Right Place.
            </p>
          </div>
        </div>

        <p className="text-base font-semibold text-blue-dark">Naples, FL</p>
        <div className="flex flex-wrap gap-3 pt-2">
          <Link href="/contact/" className="btn">
            Contact
          </Link>
          <Link href="/guides/" className="btn-ghost">
            Free Guides
          </Link>
        </div>
      </Reveal>
    </article>
  );
}
