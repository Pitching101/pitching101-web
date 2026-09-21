import Link from "next/link";
import LeadMagnetCard from "@/components/LeadMagnetCard";
import { relatedGuides } from "@/data/leadMagnets";

/** Related guides at the end of a post. */
export default function RelatedGuides({ slug }: { slug: string }) {
  const guides = relatedGuides(slug);
  if (guides.length === 0) return null;

  return (
    <section className="guide-related" aria-labelledby="related-guides">
      <h2 id="related-guides" className="ui-title ui-title-sm">
        Related guides
      </h2>
      <ul className="magnet-shelf">
        {guides.map((magnet) => (
          <li key={magnet.slug} className="magnet-slot">
            <LeadMagnetCard magnet={magnet} />
          </li>
        ))}
      </ul>
      <p className="guide-related-more">
        <Link href="/guides/" className="footer-link">
          All free guides
        </Link>
      </p>
    </section>
  );
}
