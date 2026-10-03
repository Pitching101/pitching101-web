import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import ParkSky from "@/components/ParkSky";
import FaqList from "@/components/FaqList";
import JsonLd, { faqJsonLd } from "@/components/JsonLd";
import {
  ENROLL_HREF,
  GOOGLE_MAPS_URL,
  INSTAGRAM_URL,
  OG_IMAGE,
  shareImage,
  SITE_URL,
} from "@/data/siteCopy";

const PAGE_PATH = "/pitching-lessons-north-naples/";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const CONTACT_LABEL = "Contact Coach Nick";
const FLEISCHMANN_MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Fleischmann+Park+Naples+FL";
const SHARE_ALT = "Pitching101 pixel-art pitcher, Naples FL youth pitching lessons";
const META_TITLE = "Pitching Lessons North Naples FL | Ages 8–16 | Pitching101";
const META_DESCRIPTION =
  "Private youth pitching lessons for North Naples kids ages 8–16 with Coach Nick. Arm care, command, and mechanics at Fleischmann Park or near you in Collier.";
const OG_TITLE = "Pitching Lessons in North Naples, FL";
const OG_DESCRIPTION =
  "Private pitching lessons for kids ages 8–16 with Coach Nick. Command first, arm care every time. Fleischmann Park or near you in Collier County.";
const TWITTER_DESCRIPTION =
  "Private pitching lessons for kids ages 8–16 with Coach Nick. Command first, arm care every time.";

const share = shareImage(OG_IMAGE, SHARE_ALT);

export const metadata: Metadata = {
  title: { absolute: META_TITLE },
  description: META_DESCRIPTION,
  keywords: [
    "pitching lessons north naples",
    "pitching lessons naples fl",
    "youth pitching coach north naples",
    "private pitching lessons for kids naples",
    "baseball pitching lessons collier county",
  ],
  authors: [{ name: "Coach Nick", url: SITE_URL }],
  creator: "Coach Nick",
  alternates: { canonical: PAGE_PATH },
  openGraph: {
    title: OG_TITLE,
    description: OG_DESCRIPTION,
    url: PAGE_PATH,
    type: "website",
    siteName: "Pitching101",
    locale: "en_US",
    images: share,
  },
  twitter: {
    card: "summary_large_image",
    title: OG_TITLE,
    description: TWITTER_DESCRIPTION,
    images: share,
  },
};

const ARM_CARE_HREF = "/guides/arm-care-checklist/";

const ageAnswer =
  "We work with kids ages 8–16. Eight is a good age to start learning a safe, simple motion before bad habits set in. Older players come to us to clean up mechanics and throw more strikes.";
const parkAnswer =
  "Fleischmann Park in Naples is our home base, but Coach Nick can also travel to you anywhere in Collier County, including North Naples. Let us know what's easiest when you reach out.";
const bringAnswer =
  "A glove, a ball, water, and baseball cleats or sneakers. Bring the resistance bands if you have them. If you don't, we'll show you what to get.";
const armCareAnswer =
  "Every lesson starts with stretching and a band routine, and we keep throwing volume sensible for your child's age. We teach command before velocity, so kids aren't overthrowing to chase speed. See our arm care checklist for what we do.";
const bookAnswer =
  "Reach out on the contact page and send a note with your child's age, goals, and schedule. Coach Nick will get back to you to set up a time.";

/** Visible answers. Phone stays in the footer and in JSON-LD, not here. */
const parentFaqs: { q: string; a: ReactNode; schema: string }[] = [
  {
    q: "What age should my child start pitching lessons?",
    a: ageAnswer,
    schema: ageAnswer,
  },
  {
    q: "Do you only teach at Fleischmann Park?",
    a: parkAnswer,
    schema: parkAnswer,
  },
  {
    q: "What should my child bring to a lesson?",
    a: bringAnswer,
    schema: bringAnswer,
  },
  {
    q: "How do you keep young arms healthy?",
    a: (
      <>
        Every lesson starts with stretching and a band routine, and we keep throwing volume sensible for your child&apos;s age. We teach command before velocity, so kids aren&apos;t overthrowing to chase speed. See our{" "}
        <Link href={ARM_CARE_HREF} className="footer-link">
          arm care checklist
        </Link>{" "}
        for what we do.
      </>
    ),
    schema: `${armCareAnswer.replace(
      "arm care checklist",
      `<a href="${SITE_URL}${ARM_CARE_HREF}">arm care checklist</a>`,
    )}`,
  },
  {
    q: "How do I book a lesson?",
    a: (
      <>
        Reach out on the{" "}
        <Link href={ENROLL_HREF} className="footer-link">
          contact page
        </Link>{" "}
        and send a note with your child&apos;s age, goals, and schedule. Coach Nick will get back to you to set up a time.
      </>
    ),
    schema: `${bookAnswer.replace(
      "contact page",
      `<a href="${SITE_URL}${ENROLL_HREF}">contact page</a>`,
    )}`,
  },
];

function northNaplesBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    additionalType: "https://schema.org/SportsActivityLocation",
    name: "Pitching101",
    url: PAGE_URL,
    description:
      "Private youth pitching lessons for ages 8–16 in North Naples and Collier County, FL.",
    areaServed: [
      { "@type": "Place", name: "North Naples, FL" },
      { "@type": "AdministrativeArea", name: "Collier County, FL" },
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Naples",
      addressRegion: "FL",
      addressCountry: "US",
    },
    telephone: "+1-845-768-2211",
    founder: { "@type": "Person", name: "Coach Nick" },
    employee: { "@type": "Person", name: "Coach Nick" },
    sameAs: [GOOGLE_MAPS_URL, INSTAGRAM_URL],
  };
}

function breadcrumbJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `${SITE_URL}/`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Naples FL Pitching Lessons",
        item: `${SITE_URL}/naples-fl-pitching-lessons/`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "North Naples",
        item: PAGE_URL,
      },
    ],
  };
}

function FleischmannParkLink() {
  return (
    <a
      href={FLEISCHMANN_MAPS_URL}
      className="footer-link"
      target="_blank"
      rel="noopener noreferrer"
    >
      Fleischmann Park
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}

export default function NorthNaplesPitchingLessonsPage() {
  return (
    <ParkSky tone="park">
      <JsonLd data={northNaplesBusinessJsonLd()} />
      <JsonLd
        data={faqJsonLd(parentFaqs.map(({ q, schema }) => ({ q, a: schema })))}
      />
      <JsonLd data={breadcrumbJsonLd()} />
      <article className="park-page">
        <Reveal className="space-y-5">
          <nav aria-label="Breadcrumb" className="text-base font-semibold text-blue-dark">
            <ol className="m-0 flex list-none flex-wrap items-center justify-center gap-x-2 gap-y-1 p-0">
              <li>
                <Link href="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li aria-hidden="true" className="text-ink-soft">
                /
              </li>
              <li>
                <Link href="/naples-fl-pitching-lessons/" className="hover:underline">
                  Naples FL Pitching Lessons
                </Link>
              </li>
              <li aria-hidden="true" className="text-ink-soft">
                /
              </li>
              <li className="text-ink-soft" aria-current="page">
                North Naples
              </li>
            </ol>
          </nav>
          <p className="ui-chip px-3.5 py-1.5">North Naples · ages 8–16</p>
          <h1 className="ui-title ui-title-lg">Pitching Lessons in North Naples, FL</h1>
          <p className="text-lg leading-relaxed text-ink-soft">
            <strong className="text-ink">
              Private youth pitching lessons for kids ages 8–16, with Coach Nick.
            </strong>{" "}
            North Naples families train with us at Fleischmann Park in Naples. If the park doesn&apos;t work for your schedule, Coach Nick can travel to you anywhere in Collier County.
          </p>
          <Link href={ENROLL_HREF} className="btn">
            {CONTACT_LABEL}
          </Link>
        </Reveal>

        <Reveal className="mt-12">
          <h2 className="ui-title ui-title-sm">Who these lessons are for</h2>
        </Reveal>
        <ul className="m-0 mt-5 grid list-none gap-4 p-0">
          <li>
            <Reveal className="dugout-sign">
              <p className="dugout-sign-note">
                Young pitchers <strong>ages 8–16</strong> who want to throw more strikes
              </p>
            </Reveal>
          </li>
          <li>
            <Reveal className="dugout-sign">
              <p className="dugout-sign-note">
                Kids who are new to pitching and need a safe, simple start
              </p>
            </Reveal>
          </li>
          <li>
            <Reveal className="dugout-sign">
              <p className="dugout-sign-note">
                Players on rec, travel, or school teams who want one-on-one help between practices
              </p>
            </Reveal>
          </li>
          <li>
            <Reveal className="dugout-sign">
              <p className="dugout-sign-note">
                Parents who want a coach who puts <strong>arm care first</strong>
              </p>
            </Reveal>
          </li>
        </ul>
        <Reveal className="mt-5">
          <p className="text-lg leading-relaxed text-ink-soft">
            Every lesson is private and one-on-one, so it&apos;s built around your child, not a group.
          </p>
        </Reveal>

        <Reveal className="mt-12 space-y-5">
          <h2 className="ui-title ui-title-sm">What a lesson looks like</h2>
          <p className="text-lg leading-relaxed text-ink-soft">
            Every session follows the same order, so kids know what to expect and the arm is ready before it works hard.
          </p>
        </Reveal>
        <ol className="m-0 mt-5 grid list-none gap-4 p-0">
          <li>
            <Reveal className="dugout-sign">
              <h3 className="dugout-sign-title">1. Stretching and band routine.</h3>
              <p className="dugout-sign-note">
                We warm up the body and the small shoulder muscles first. Our{" "}
                <Link href="/guides/band-routine-checklist/" className="footer-link">
                  band routine checklist
                </Link>{" "}
                is the one we use.
              </p>
            </Reveal>
          </li>
          <li>
            <Reveal className="dugout-sign">
              <h3 className="dugout-sign-title">2. Throwing drills.</h3>
              <p className="dugout-sign-note">
                Short, focused drills that build one movement at a time.
              </p>
            </Reveal>
          </li>
          <li>
            <Reveal className="dugout-sign">
              <h3 className="dugout-sign-title">3. Mechanics.</h3>
              <p className="dugout-sign-note">
                We fix the one or two things that will help your child the most right now, not ten things at once.
              </p>
            </Reveal>
          </li>
          <li>
            <Reveal className="dugout-sign">
              <h3 className="dugout-sign-title">4. Bullpen.</h3>
              <p className="dugout-sign-note">
                Your child puts it all together off the mound, with a focus on <strong>hitting the target</strong>.
              </p>
            </Reveal>
          </li>
        </ol>
        <Reveal className="mt-5">
          <p className="text-lg leading-relaxed text-ink-soft">
            <strong className="text-ink">Command comes first.</strong> We teach kids to throw strikes before we chase speed. A pitcher who can hit spots has more fun, gets more innings, and puts less stress on the arm.
          </p>
        </Reveal>

        <Reveal className="mt-12">
          <h2 className="ui-title ui-title-sm">Where we train</h2>
        </Reveal>
        <ul className="m-0 mt-5 grid list-none gap-4 p-0">
          <li>
            <Reveal className="dugout-sign">
              <h3 className="dugout-sign-title">
                <FleischmannParkLink />, Naples.
              </h3>
              <p className="dugout-sign-note">
                This is our home base for lessons, and it&apos;s an easy trip for most North Naples families.
              </p>
            </Reveal>
          </li>
          <li>
            <Reveal className="dugout-sign">
              <h3 className="dugout-sign-title">Anywhere in Collier County.</h3>
              <p className="dugout-sign-note">
                If it works better, Coach Nick can come to your field, park, or backyard. Mention it when you reach out.
              </p>
            </Reveal>
          </li>
        </ul>

        <Reveal className="mt-12 space-y-5">
          <h2 className="ui-title ui-title-sm">Between lessons</h2>
          <p className="text-lg leading-relaxed text-ink-soft">
            Getting better happens between lessons as much as during them. These free guides help parents keep things on track at home:
          </p>
        </Reveal>
        <ul className="m-0 mt-5 grid list-none gap-4 p-0">
          <li>
            <Reveal className="dugout-sign">
              <p className="dugout-sign-note">
                <Link
                  href="/guides/how-often-should-young-pitchers-throw-between-lessons/"
                  className="footer-link"
                >
                  How often should young pitchers throw between lessons?
                </Link>{" "}
                A simple weekly plan of easy catch and rest days.
              </p>
            </Reveal>
          </li>
          <li>
            <Reveal className="dugout-sign">
              <p className="dugout-sign-note">
                <Link
                  href="/guides/when-should-young-pitchers-start-throwing-a-changeup/"
                  className="footer-link"
                >
                  When should young pitchers start throwing a changeup?
                </Link>{" "}
                When it&apos;s time, and how to start safely.
              </p>
            </Reveal>
          </li>
          <li>
            <Reveal className="dugout-sign">
              <p className="dugout-sign-note">
                <Link
                  href="/guides/how-to-choose-pitching-lessons-naples-fl/"
                  className="footer-link"
                >
                  How to choose pitching lessons in Naples, FL
                </Link>{" "}
                What to look for in a coach.
              </p>
            </Reveal>
          </li>
        </ul>
        <Reveal className="mt-5">
          <p className="text-lg leading-relaxed text-ink-soft">
            Want the full picture of lessons across Naples? See{" "}
            <Link href="/naples-fl-pitching-lessons/" className="footer-link">
              Naples, FL pitching lessons
            </Link>
            .
          </p>
        </Reveal>

        <Reveal className="mt-12 space-y-5">
          <h2 className="ui-title ui-title-sm">Questions parents ask</h2>
          <FaqList items={parentFaqs.map(({ q, a }) => ({ q, a }))} />
        </Reveal>

        <Reveal className="mt-12 space-y-4">
          <h2 className="ui-title ui-title-sm">Ready to get started?</h2>
          <p className="text-lg leading-relaxed text-ink-soft">
            Tell us a little about your pitcher (age, team, and what you&apos;d like to work on) and we&apos;ll find a time that fits your family.
          </p>
          <Link href={ENROLL_HREF} className="btn">
            {CONTACT_LABEL}
          </Link>
        </Reveal>
      </article>
    </ParkSky>
  );
}
