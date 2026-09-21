import Link from "next/link";
import Reveal from "@/components/Reveal";
import ParkSky from "@/components/ParkSky";
import { leadMagnetMailto, type LeadMagnet } from "@/data/leadMagnets";

/** One landing page shape for every free lead magnet. */
export default function LeadMagnetPage({ magnet }: { magnet: LeadMagnet }) {
  return (
    <ParkSky tone="park">
      <article className="park-page magnet-page">
        <Reveal className="space-y-5">
          <p className="text-base font-semibold text-blue-dark">
            <Link href="/guides/" className="hover:underline">
              ← Free guides
            </Link>
          </p>
          {magnet.art ? (
            <figure className="magnet-zone">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={magnet.art}
                alt={magnet.artAlt ?? ""}
                width={900}
                height={670}
              />
            </figure>
          ) : (
            <div className="magnet-page-card" aria-hidden="true">
              <div className="magnet-card-art">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={magnet.icon} alt="" width={88} height={88} />
              </div>
              <p className="magnet-card-kicker">{magnet.kicker}</p>
            </div>
          )}
          <h1 className="ui-title ui-title-lg">{magnet.title}</h1>
          <p className="text-lg leading-relaxed text-ink-soft">{magnet.note}</p>
          <ul className="bb-chip-row">
            <li className="bb-chip">{magnet.topic}</li>
            <li className="bb-chip">Ages 8–16</li>
            <li className="bb-chip">Free</li>
          </ul>
          <div className="home-cta-row pt-2">
            <a href={leadMagnetMailto(magnet)} className="btn">
              {magnet.cta}
            </a>
          </div>
        </Reveal>

        <Reveal delayMs={40} className="mt-12 space-y-4">
          <p className="text-base text-ink-soft">Want to hop on a field, not just read the sheet?</p>
          <Link href="/contact/" className="btn">
            Get started
          </Link>
        </Reveal>
      </article>
    </ParkSky>
  );
}
