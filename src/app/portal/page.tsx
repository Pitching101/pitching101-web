import type { Metadata } from "next";
import Link from "next/link";
import ParkSky from "@/components/ParkSky";
import PortalApp from "@/components/portal/PortalApp";
import { pageTitle, shareImage } from "@/data/siteCopy";

export const metadata: Metadata = {
  title: "Client portal",
  description:
    "Parents and players see lesson notes and clips. Coach logs the work from the desk.",
  alternates: { canonical: "/portal/" },
  robots: { index: false, follow: false },
  openGraph: {
    title: pageTitle("Client portal"),
    description: "Lesson notes and clips for Pitching101 families.",
    url: "/portal/",
    images: shareImage(),
  },
};

export default function PortalPage() {
  return (
    <ParkSky tone="park">
      <article className="park-page park-page-start portal-page">
        <p className="text-base font-semibold text-blue-dark">
          <Link href="/" className="hover:underline">
            ← Home
          </Link>
        </p>
        <PortalApp />
      </article>
    </ParkSky>
  );
}
