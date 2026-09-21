import Link from "next/link";
import GuideClip from "@/components/GuideClip";
import GuideSteps from "@/components/GuideSteps";
import GuideToc from "@/components/GuideToc";
import GuideVideoLock from "@/components/GuideVideoLock";
import RelatedGuides from "@/components/RelatedGuides";
import Reveal from "@/components/Reveal";
import ParkSky from "@/components/ParkSky";
import {
  guideOutline,
  leadMagnetCtaHref,
  type LeadMagnet,
  type LeadMagnetLink,
  type LeadMagnetSection,
} from "@/data/leadMagnets";
import { stripGuideVideos } from "@/data/guideVideoMap";
import { ENROLL_HREF, ENROLL_LABEL } from "@/data/siteCopy";

function groupSections<T extends LeadMagnetSection>(sections: T[]) {
  const groups: Array<
    | { type: "section"; item: T }
    | { type: "flags"; items: T[] }
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

function GuideLink({ link }: { link: LeadMagnetLink }) {
  const className = link.href === "/contact/" ? "btn" : "footer-link";
  const isFile = /\.pdf$/i.test(link.href);

  if (isFile) {
    return (
      <a href={link.href} className={className} download>
        {link.label}
      </a>
    );
  }

  return (
    <Link href={link.href} className={className}>
      {link.label}
    </Link>
  );
}

function GuideSection({ section }: { section: LeadMagnetSection & { id?: string } }) {
  const listClass = section.tone
    ? "guide-list guide-flag-list"
    : section.bullets
      ? "guide-list guide-list-cards"
      : "guide-list";

  return (
    <section
      className={`guide-section${section.tone ? ` guide-flag guide-flag-${section.tone}` : ""}`}
    >
      <h2 id={section.id} className="ui-title ui-title-sm guide-toc-target">
        {section.heading}
      </h2>
      {section.paragraphs?.map((paragraph) => (
        <p key={paragraph} className="guide-copy">
          {paragraph}
        </p>
      ))}
      {section.bullets ? (
        <ul className={listClass}>
          {section.bullets.map((item, index) => (
            <li key={`${item}-${index}`}>{item}</li>
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
              <GuideLink link={link} />
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
  const outline = guideOutline(magnet);
  const groups = groupSections(outline.sections);
  const showToc = outline.toc.length > 0;

  return (
    <ParkSky tone="park">
      <article className={`park-page magnet-page${showToc ? " has-toc" : ""}`}>
        <Reveal className="guide-hero">
          <p className="text-base font-semibold text-blue-dark">
            <Link href="/guides/" className="hover:underline">
              ← Free guides
            </Link>
          </p>
          <div className="magnet-page-card">
            <div className={`magnet-card-art${magnet.art ? " is-photo" : ""}`}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={magnet.art ?? magnet.icon}
                alt={magnet.artAlt ?? ""}
                width={magnet.art ? 900 : 88}
                height={magnet.art ? 1200 : 88}
              />
            </div>
            <p className="magnet-card-kicker">{magnet.kicker}</p>
          </div>
          <h1 className="ui-title ui-title-lg">{magnet.title}</h1>
          <p className="text-lg leading-relaxed text-ink-soft">{magnet.note}</p>
          {magnet.introVideo ? (
            <GuideClip src={magnet.introVideo} label="Welcome to the band routine" />
          ) : null}
          <ul className="bb-chip-row">
            <li className="bb-chip">{magnet.topic}</li>
            <li className="bb-chip">Ages 8–16</li>
            <li className="bb-chip">{magnet.videoGate ? "Sign in for clips" : "Free"}</li>
          </ul>
          <div className="home-cta-row">
            <MagnetCta magnet={magnet} />
          </div>
        </Reveal>

        {showToc ? <GuideToc items={outline.toc} /> : null}

        <div className="guide-body">
        {magnet.steps?.length ? (
          <Reveal delayMs={30}>
            <GuideSteps steps={magnet.steps} />
          </Reveal>
        ) : null}

        {magnet.routines?.length ? (
          magnet.videoGate ? (
            <GuideVideoLock slug={magnet.slug} routines={stripGuideVideos(outline.routines)} />
          ) : (
            outline.routines.map((routine, index) => (
              <Reveal key={routine.heading} delayMs={40 + index * 20} className="guide-routine">
                <h2 id={routine.id} className="ui-title ui-title-sm guide-toc-target">
                  {routine.heading}
                </h2>
                {routine.note ? <p className="guide-copy">{routine.note}</p> : null}
                <GuideSteps steps={routine.steps} titleTag="h3" />
              </Reveal>
            ))
          )
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
            <Link href={ENROLL_HREF} className="btn">
              {ENROLL_LABEL}
            </Link>
          </Reveal>
        )}

        <Reveal delayMs={60}>
          <RelatedGuides slug={magnet.slug} />
        </Reveal>
        </div>
      </article>
    </ParkSky>
  );
}
