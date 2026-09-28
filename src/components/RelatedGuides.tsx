import Link from "next/link";
import LeadMagnetCard from "@/components/LeadMagnetCard";
import Reveal from "@/components/Reveal";
import { relatedGuides } from "@/data/leadMagnets";

/** Related guides at the end of a post. */
export default function RelatedGuides({ slug }: { slug: string }) {
  const guides = relatedGuides(slug);
  if (guides.length === 0) return null;

  return (
    <section className="guide-related" aria-labelledby="related-guides">
      <Reveal>
        <h2 id="related-guides" className="ui-title ui-title-sm">
          Related guides
        </h2>
      </Reveal>
      <ul className="magnet-shelf">
        {guides.map((magnet, index) => (
          <li key={magnet.slug} className="magnet-slot">
            <Reveal delayMs={(index % 2) * 60}>
              <LeadMagnetCard magnet={magnet} />
            </Reveal>
          </li>
        ))}
      </ul>
      <Reveal>
        <p className="guide-related-more">
          <Link href="/guides/" className="footer-link">
            All free guides
          </Link>
        </p>
      </Reveal>
    </section>
  );
}
