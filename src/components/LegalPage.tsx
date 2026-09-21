import type { ReactNode } from "react";
import Link from "next/link";
import ParkSky from "@/components/ParkSky";

export type LegalSection = {
  heading: string;
  body: ReactNode;
};

/** Plain policy page. Body type stays in the readable font, not the headline face. */
export default function LegalPage({
  title,
  updated,
  intro,
  sections,
}: {
  title: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
}) {
  return (
    <ParkSky tone="park">
      <article className="park-page legal-page">
        <p className="text-base font-semibold text-blue-dark">
          <Link href="/" className="hover:underline">
            ← Home
          </Link>
        </p>
        <h1 className="ui-title ui-title-lg">{title}</h1>
        <p className="legal-updated">Updated {updated}</p>
        <p>{intro}</p>
        {sections.map((section) => (
          <section key={section.heading}>
            <h2>{section.heading}</h2>
            {section.body}
          </section>
        ))}
        <p className="legal-switch">
          <Link href="/privacy/">Privacy policy</Link>
          <span aria-hidden="true"> · </span>
          <Link href="/terms/">Terms of service</Link>
        </p>
      </article>
    </ParkSky>
  );
}
