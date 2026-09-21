import Link from "next/link";
import type { LeadMagnet } from "@/data/leadMagnets";

/** Baseball-card face for every free lead magnet. */
export default function LeadMagnetCard({ magnet }: { magnet: LeadMagnet }) {
  const isWideArt = magnet.art === "/assets/og-green-red-flags.png";

  return (
    <Link href={`/guides/${magnet.slug}/`} className="magnet-card">
      <div
        className={`magnet-card-art${magnet.art ? " magnet-card-art-zone" : ""}${
          isWideArt ? " magnet-card-art-wide" : ""
        }`}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={magnet.art ?? magnet.icon}
          alt={magnet.artAlt ?? ""}
          width={isWideArt ? 1280 : magnet.art ? 900 : 72}
          height={isWideArt ? 720 : magnet.art ? 670 : 72}
        />
      </div>
      <p className="magnet-card-kicker">{magnet.kicker}</p>
      <h2 className="magnet-card-title">{magnet.title}</h2>
      <p className="magnet-card-note">{magnet.note}</p>
      <p className="magnet-card-stamp">Open the card</p>
    </Link>
  );
}
