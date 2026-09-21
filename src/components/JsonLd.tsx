import { EMAIL, INSTAGRAM_URL, SITE_URL, TRUSTPILOT_URL } from "@/data/siteCopy";

/** JSON-LD for search + answer engines. Values are static site copy. */
export default function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}

export function faqJsonLd(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}

export function businessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "SportsActivityLocation"],
    name: "Pitching101",
    url: SITE_URL,
    description:
      "Youth pitching lessons in Naples, FL for kids ages 8-16. Coach Deising is the junior varsity head coach at Gulfshore High School, and works with parents, other coaches, travel teams, and schools.",
    email: EMAIL,
    areaServed: [
      { "@type": "City", name: "Naples", addressRegion: "FL" },
      { "@type": "AdministrativeArea", name: "Collier County" },
      { "@type": "AdministrativeArea", name: "Southwest Florida" },
    ],
    founder: {
      "@type": "Person",
      name: "Nick Deising",
      alternateName: "Coach Deising",
      jobTitle: "Junior varsity head coach at Gulfshore High School",
    },
    sameAs: [TRUSTPILOT_URL, INSTAGRAM_URL],
    knowsAbout: [
      "youth pitching lessons",
      "youth baseball pitching",
      "arm care for young pitchers",
    ],
  };
}
