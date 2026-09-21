import Link from "next/link";
import type { LeadMagnet } from "@/data/leadMagnets";

const THUMB_W = 900;
const THUMB_H = 1200;

/** Baseball-card face for every free lead magnet. Thumbnail is 3:4. */
export default function LeadMagnetCard({ magnet }: { magnet: LeadMagnet }) {
  const src = magnet.art ?? magnet.icon;

  return (
    <Link href={`/guides/${magnet.slug}/`} className="magnet-card">
      <div className={`magnet-card-art${magnet.art ? " is-photo" : ""}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={magnet.artAlt ?? ""}
          width={magnet.art ? THUMB_W : 72}
          height={magnet.art ? THUMB_H : 72}
        />
      </div>
      <p className="magnet-card-kicker">{magnet.kicker}</p>
      <h2 className="magnet-card-title">{magnet.title}</h2>
      <p className="magnet-card-note">{magnet.note}</p>
      <p className="magnet-card-stamp">Open the card</p>
    </Link>
  );
}
