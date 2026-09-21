import type { Metadata } from "next";
import AboutHomeRedirect from "@/components/AboutHomeRedirect";
import { pageTitle, shareImage } from "@/data/siteCopy";

export const metadata: Metadata = {
  title: "About Coach Deising",
  description:
    "Coach Deising runs Pitching101 — youth pitching lessons in Naples, FL for kids 8-16. Parents, travel teams, other coaches, and schools.",
  alternates: { canonical: "/about/" },
  openGraph: {
    title: pageTitle("About Coach Deising"),
    description:
      "Coach Deising runs Pitching101 — youth pitching lessons in Naples, FL for kids 8-16.",
    url: "/about/",
    images: shareImage(),
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle("About Coach Deising"),
    description:
      "Coach Deising runs Pitching101 — youth pitching lessons in Naples, FL for kids 8-16.",
    images: shareImage()[0].url,
  },
};

export default function AboutPage() {
  return <AboutHomeRedirect />;
}
