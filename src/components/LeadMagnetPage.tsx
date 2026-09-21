import Link from "next/link";
import Reveal from "@/components/Reveal";
import ParkSky from "@/components/ParkSky";
import { leadMagnetMailto, type LeadMagnet } from "@/data/leadMagnets";

/** One landing page shape for every free lead magnet. */
export default function LeadMagnetPage({ magnet }: { magnet: LeadMagnet }) {
  return (
    <ParkSky tone="park">
      <article className="park-page magnet-page">
        <Reveal className="magnet-page-intro">
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
        </Reveal>

        <Reveal delayMs={30}>
          <ol className="magnet-template">
            {magnet.steps.map((step, index) => (
              <li key={step.label} className="magnet-step">
                <span className="magnet-step-num" aria-hidden="true">
                  {index + 1}
                </span>
                <div>
                  <h2 className="magnet-step-title">{step.label}</h2>
                  <p className="magnet-step-note">{step.note}</p>
                </div>
              </li>
            ))}
          </ol>
        </Reveal>

        <Reveal delayMs={50} className="magnet-page-cta">
          <a href={leadMagnetMailto(magnet)} className="btn">
            {magnet.cta}
          </a>
          <p className="text-base text-ink-soft">Want lessons with the guide?</p>
          <Link href="/contact/" className="btn">
            Get started
          </Link>
        </Reveal>
      </article>
    </ParkSky>
  );
}
