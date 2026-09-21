import Link from "next/link";
import Reveal from "@/components/Reveal";
import ParkSky from "@/components/ParkSky";
import {
  leadMagnetCtaHref,
  type LeadMagnet,
  type LeadMagnetSection,
} from "@/data/leadMagnets";

function groupSections(sections: LeadMagnetSection[]) {
  const groups: Array<
    | { type: "section"; item: LeadMagnetSection }
    | { type: "flags"; items: LeadMagnetSection[] }
  > = [];

  for (let i = 0; i < sections.length; i += 1) {
    const current = sections[i];
    const next = sections[i + 1];
    if (current.tone === "green" && next?.tone === "red") {
      groups.push({ type: "flags", items: [current, next] });
      i += 1;
    } else {
      groups.push({ type: "section", item: current });
    }
  }

  return groups;
}

function GuideSection({ section }: { section: LeadMagnetSection }) {
  const listClass = section.tone
    ? "guide-list guide-flag-list"
    : section.bullets
      ? "guide-list guide-list-cards"
      : "guide-list";

  return (
    <section
      className={`guide-section${section.tone ? ` guide-flag guide-flag-${section.tone}` : ""}`}
    >
      <h2 className="ui-title ui-title-sm">{section.heading}</h2>
      {section.paragraphs?.map((paragraph) => (
        <p key={paragraph} className="guide-copy">
          {paragraph}
        </p>
      ))}
      {section.bullets ? (
        <ul className={listClass}>
          {section.bullets.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ) : null}
      {section.numbered ? (
        <ol className="guide-list guide-list-numbered">
          {section.numbered.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>
      ) : null}
      {section.links ? (
        <ul className="guide-links">
          {section.links.map((link) => (
            <li key={link.href}>
              {link.href === "/contact/" ? (
                <Link href={link.href} className="btn">
                  {link.label}
                </Link>
              ) : (
                <Link href={link.href} className="footer-link">
                  {link.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
      ) : null}
    </section>
  );
}

function MagnetCta({ magnet }: { magnet: LeadMagnet }) {
  const href = leadMagnetCtaHref(magnet);
  if (magnet.ctaHref) {
    return (
      <Link href={href} className="btn">
        {magnet.cta}
      </Link>
    );
  }
  return (
    <a href={href} className="btn">
      {magnet.cta}
    </a>
  );
}

/** One landing page shape for every free lead magnet. */
export default function LeadMagnetPage({ magnet }: { magnet: LeadMagnet }) {
  const isLongForm = Boolean(magnet.sections?.length);
  const groups = magnet.sections ? groupSections(magnet.sections) : [];

  return (
    <ParkSky tone="park">
      <article
        className={`park-page magnet-page${isLongForm ? " magnet-page-long" : ""}`}
      >
        <Reveal className={isLongForm ? "guide-hero" : "magnet-page-intro"}>
          <p className="text-base font-semibold text-blue-dark">
            <Link href="/guides/" className="hover:underline">
              ← Free guides
            </Link>
          </p>
          {magnet.art ? (
            <figure
              className={`magnet-zone${
                magnet.art === "/assets/og-green-red-flags.png"
                  ? " magnet-zone-wide"
                  : ""
              }`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={magnet.art}
                alt={magnet.artAlt ?? ""}
                width={magnet.art === "/assets/og-green-red-flags.png" ? 1280 : 900}
                height={magnet.art === "/assets/og-green-red-flags.png" ? 720 : 670}
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
          <div className="home-cta-row">
            <MagnetCta magnet={magnet} />
          </div>
        </Reveal>

        {magnet.steps?.length ? (
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
        ) : null}

        {groups.map((group, index) =>
          group.type === "flags" ? (
            <div key={group.items.map((item) => item.heading).join("-")} className="guide-flag-row">
              {group.items.map((item, flagIndex) => (
                <Reveal key={item.heading} delayMs={20 + (index + flagIndex) * 20}>
                  <GuideSection section={item} />
                </Reveal>
              ))}
            </div>
          ) : (
            <Reveal key={group.item.heading} delayMs={20 + index * 20}>
              <GuideSection section={group.item} />
            </Reveal>
          ),
        )}

        {isLongForm ? null : (
          <Reveal delayMs={50} className="magnet-page-cta">
            <p className="text-base text-ink-soft">Want to hop on a field, not just read the sheet?</p>
            <Link href="/contact/" className="btn">
              Book a First Look
            </Link>
          </Reveal>
        )}
      </article>
    </ParkSky>
  );
}
