import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import Logo from "@/components/Logo";

export const metadata: Metadata = {
  title: "Free Guides",
  description:
    "Free youth pitching guides from Pitching101 — arm-care checklist, strike tips, and pre-catch warmup for Naples FL parents.",
};

const guides = [
  {
    title: "Arm-Care Checklist",
    note: "Warm-up and cool-down steps so young arms stay healthy through the season.",
    href: "mailto:nickdeisng@gmail.com?subject=Arm-Care%20Checklist%20Guide",
    cta: "Email Me The Checklist",
  },
  {
    title: "Strike % Tips",
    note: "Simple cues parents can repeat so kids throw more strikes without overthinking.",
    href: "mailto:nickdeisng@gmail.com?subject=Strike%20Percent%20Tips%20Guide",
    cta: "Email Me The Tips",
  },
  {
    title: "Pre-Catch Warmup",
    note: "A short routine before catch so practice starts sharp and safe.",
    href: "mailto:nickdeisng@gmail.com?subject=Pre-Catch%20Warmup%20Guide",
    cta: "Email Me The Warmup",
  },
];

export default function GuidesPage() {
  return (
    <article className="mx-auto max-w-3xl px-5 py-14 sm:px-8 sm:py-20">
      <Reveal className="space-y-6">
        <p className="text-base font-semibold text-blue-dark">
          <Link href="/" className="hover:underline">
            ← Home
          </Link>
        </p>
        <Logo height={56} />
        <h1 className="ui-title ui-title-lg">Free Guides</h1>
        <p className="text-lg leading-relaxed text-ink-soft">
          Lead Magnets For Parents — Grab A Guide, Try The Ideas, Then Reach Out
          If You Want Coaching. Stan Store Capture Links Will Replace Email When
          Ready.
        </p>
      </Reveal>

      <Reveal delayMs={40} className="mt-10">
        <ul className="grid gap-5 sm:grid-cols-3">
          {guides.map((g) => (
            <li key={g.title} className="card flex flex-col gap-3 p-5">
              <h2 className="ui-title text-lg text-blue-dark">{g.title}</h2>
              <p className="flex-1 text-sm leading-relaxed text-ink-soft">{g.note}</p>
              <a href={g.href} className="btn !min-h-9 !px-3 !py-1.5 !text-sm">
                {g.cta}
              </a>
            </li>
          ))}
        </ul>
      </Reveal>

      <Reveal delayMs={60} className="mt-12 space-y-4">
        <p className="text-base text-ink-soft">
          Want Lessons In Naples, FL? Let’s Talk.
        </p>
        <Link href="/contact/" className="btn">
          Contact
        </Link>
      </Reveal>
    </article>
  );
}
