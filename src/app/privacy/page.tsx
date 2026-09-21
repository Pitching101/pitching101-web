import type { Metadata } from "next";
import Link from "next/link";
import LegalPage from "@/components/LegalPage";
import { EMAIL, PHONE_DISPLAY, PHONE_TEL, pageTitle } from "@/data/siteCopy";

const UPDATED = "September 21, 2026";

export const metadata: Metadata = {
  title: "Privacy policy",
  description:
    "How Pitching101 uses the evaluation form, the client portal, and basic visit counts. Players 8–16 in Naples, FL.",
  alternates: { canonical: "/privacy/" },
  openGraph: {
    title: pageTitle("Privacy policy"),
    description:
      "How Pitching101 uses the evaluation form, the client portal, and basic visit counts.",
    url: "/privacy/",
  },
};

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy policy"
      updated={UPDATED}
      intro="Pitching101 is Coach Deising's youth pitching lessons in Naples, FL, for players 8–16. This page says what we collect and what we do with it. We don't sell personal information."
      sections={[
        {
          heading: "Who sends the form",
          body: (
            <p>
              A parent, coach, travel team, or school sends information for a
              player. Please don&apos;t have the player fill out the form on
              their own. If you share a child&apos;s name or age, you need a
              parent or guardian&apos;s okay.
            </p>
          ),
        },
        {
          heading: "The evaluation form",
          body: (
            <>
              <p>
                The form asks who you are, your name, your phone, an optional
                player or team name, age, goals, schedule, and how you heard
                about us.
              </p>
              <p>
                Those answers stay in your browser for that visit. The site
                then opens a text to {PHONE_DISPLAY} or an email to {EMAIL}.
                You still tap send in Messages or Mail. Pitching101 does not
                keep a copy of the form on a server.
              </p>
              <p>
                Coach Deising uses what you send to reply within 24 business
                hours and to plan the visit.
              </p>
            </>
          ),
        },
        {
          heading: "Client portal",
          body: (
            <p>
              Families with an account sign in with an email and a password.
              The portal can hold a player&apos;s first name, age, a parent
              email, lesson notes, and lesson clips, so you and Coach Deising
              can look back at the work. Sign-in and those notes are stored
              with Supabase. A password is not shown back to us in plain text.
            </p>
          ),
        },
        {
          heading: "Visits to the site",
          body: (
            <p>
              The site uses Vercel Analytics to count which pages people open.
              That count does not use a cookie that identifies you, and it is
              not tied to the evaluation form.
            </p>
          ),
        },
        {
          heading: "Links that leave the site",
          body: (
            <p>
              Instagram, Google reviews, and Trustpilot are other companies.
              If you open those links, their privacy rules apply, not this
              page.
            </p>
          ),
        },
        {
          heading: "Players ages 8–16",
          body: (
            <p>
              We coach kids. A player&apos;s name, age, and lesson notes are
              only for coaching them. A parent or guardian can ask us to
              delete that information. Email{" "}
              <a href={`mailto:${EMAIL}`}>{EMAIL}</a> or text{" "}
              <a href={`sms:${PHONE_TEL}`}>{PHONE_DISPLAY}</a>.
            </p>
          ),
        },
        {
          heading: "How to reach us",
          body: (
            <p>
              Call or text <a href={`tel:${PHONE_TEL}`}>{PHONE_DISPLAY}</a>, or
              email <a href={`mailto:${EMAIL}`}>{EMAIL}</a>. Pitching101 is in
              Naples, FL. The{" "}
              <Link href="/terms/">terms of service</Link> cover lessons and
              the site.
            </p>
          ),
        },
      ]}
    />
  );
}
