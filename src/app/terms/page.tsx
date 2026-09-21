import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { EMAIL, PHONE_DISPLAY, PHONE_TEL, pageTitle } from "@/data/siteCopy";

const UPDATED = "September 21, 2026";

export const metadata: Metadata = {
  title: "Terms of service",
  description:
    "Terms for Pitching101 lessons and pitching101.com. Ages 8–16 in Naples, FL. An evaluation request is confirmed when Coach Deising replies.",
  alternates: { canonical: "/terms/" },
  openGraph: {
    title: pageTitle("Terms of service"),
    description:
      "Terms for Pitching101 lessons and pitching101.com. Ages 8–16 in Naples, FL.",
    url: "/terms/",
  },
};

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of service"
      updated={UPDATED}
      intro="These terms cover pitching101.com and pitching lessons with Coach Deising in Naples, FL."
      sections={[
        {
          heading: "Who lessons are for",
          body: (
            <p>
              Players are 8–16. A parent, coach, travel team, or school sets
              the lesson up. If you send a player&apos;s name or age, you need
              permission from their parent or guardian.
            </p>
          ),
        },
        {
          heading: "Booking",
          body: (
            <>
              <p>
                The evaluation form is a request, not a confirmed time. A
                visit is set when Coach Deising confirms it. We aim to reply
                within 24 business hours.
              </p>
              <p>
                Monthly Strikes Pack is the main plan after that visit.
                Busy-Week Check-In is an add-on. Prices are talked through
                after we meet. This site does not list a price.
              </p>
            </>
          ),
        },
        {
          heading: "What a lesson is",
          body: (
            <p>
              A lesson is pitching instruction, including warm-up and arm
              care. It is not medical care, physical therapy, or a promise
              that a player will throw strikes. The free guides are practice
              ideas. How it goes depends on the player and the work they put
              in.
            </p>
          ),
        },
        {
          heading: "The site and the portal",
          body: (
            <p>
              The words, photos, guides, and clips on this site belong to
              Pitching101. Don&apos;t copy them to sell. A client-portal login
              is for that family and for Coach Deising. Don&apos;t share the
              password.
            </p>
          ),
        },
        {
          heading: "Other sites",
          body: (
            <p>
              Links to Instagram, Google, and Trustpilot leave this site.
              What you do there is between you and that company.
            </p>
          ),
        },
        {
          heading: "Changes",
          body: (
            <p>
              These terms and the privacy policy can be updated. The date at
              the top of each page is the version in effect.
            </p>
          ),
        },
        {
          heading: "Questions",
          body: (
            <p>
              Call or text <a href={`tel:${PHONE_TEL}`}>{PHONE_DISPLAY}</a>, or
              email <a href={`mailto:${EMAIL}`}>{EMAIL}</a>. Pitching101 is in
              Naples, FL, and Florida law applies to these terms.
            </p>
          ),
        },
      ]}
    />
  );
}
