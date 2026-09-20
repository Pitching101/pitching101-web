import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import ParkSky from "@/components/ParkSky";

export const metadata: Metadata = {
  title: "Free guides",
  description:
    "Free youth pitching guides from Pitching101 — arm-care checklist, strike tips, and pre-catch warmup for Naples FL parents.",
};

const guides = [
  {
    title: "Arm-care checklist",
    note: "Warm-up and cool-down steps so young arms stay healthy through the season.",
    href: "mailto:nickdeisng@gmail.com?subject=Arm-Care%20Checklist%20Guide",
    cta: "Email me the checklist",
    icon: "/assets/icon-arm-care-v2.png",
  },
  {
    title: "Strike % tips",
    note: "Simple cues parents can repeat so kids throw more strikes without overthinking.",
    href: "mailto:nickdeisng@gmail.com?subject=Strike%20Percent%20Tips%20Guide",
    cta: "Email me the tips",
    icon: "/assets/icon-strikes.png",
  },
  {
    title: "Pre-catch warmup",
    note: "A short routine before catch so practice starts sharp and safe.",
    href: "mailto:nickdeisng@gmail.com?subject=Pre-Catch%20Warmup%20Guide",
    cta: "Email me the warmup",
    icon: "/assets/icon-plan-checklist.png",
  },
];

export default function GuidesPage() {
  return (
    <ParkSky tone="park">
      <article className="park-page">
        <Reveal className="space-y-5">
          <p className="text-base font-semibold text-blue-dark">
            <Link href="/" className="hover:underline">
              ← Home
            </Link>
          </p>
          <h1 className="ui-title ui-title-lg">Free guides</h1>
          <p className="text-lg leading-relaxed text-ink-soft">
            Grab a guide, try the ideas, then reach out if you want coaching.
          </p>
        </Reveal>

        <Reveal delayMs={40} className="mt-10">
          <ul className="dugout-row">
            {guides.map((g) => (
              <li key={g.title} className="dugout-sign">
                <Image src={g.icon} alt="" width={64} height={64} className="card-icon" />
                <h2 className="dugout-sign-title">{g.title}</h2>
                <p className="dugout-sign-note">{g.note}</p>
                <a href={g.href} className="footer-link">
                  {g.cta}
                </a>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delayMs={60} className="mt-12 space-y-4">
          <p className="text-base text-ink-soft">Want lessons in Naples, FL? Let&apos;s talk.</p>
          <Link href="/contact/" className="btn">
            Get your child started
          </Link>
        </Reveal>
      </article>
    </ParkSky>
  );
}
