import LeadMagnetCard from "@/components/LeadMagnetCard";
import { leadMagnets } from "@/data/leadMagnets";

/** Shelf of lead-magnet cards. New magnets appear here automatically. */
export default function LeadMagnetShelf() {
  return (
    <ul className="magnet-shelf" aria-label="Free pitching guides">
      {leadMagnets.map((magnet) => (
        <li key={magnet.slug} className="magnet-slot">
          <LeadMagnetCard magnet={magnet} />
        </li>
      ))}
    </ul>
  );
}
