import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { DM_Sans, Oswald, Yesteryear } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MouseGlove from "@/components/MouseGlove";
import {
  META_DESCRIPTION,
  OG_DESCRIPTION,
  OG_IMAGE,
  OG_TITLE,
  shareImage,
  SITE_URL,
} from "@/data/siteCopy";
import "./globals.css";

/** Varsity condensed — athletic headlines, not a script jersey for every line. */
const oswald = Oswald({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

/** Script accent for a retro Athletics lockup — not running copy. */
const yesteryear = Yesteryear({
  variable: "--font-script",
  subsets: ["latin"],
  weight: "400",
});

/** Clean readable body. */
const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#3295fb",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: "Pitching101",
  title: {
    default: OG_TITLE,
    template: "%s | Pitching101",
  },
  description: META_DESCRIPTION,
  keywords: [
    "youth pitching lessons Naples FL",
    "pitching coach Naples Florida",
    "youth baseball pitching Collier County",
    "Pitching101",
    "Coach Deising",
  ],
  authors: [{ name: "Coach Deising", url: SITE_URL }],
  creator: "Coach Deising",
  publisher: "Pitching101",
  category: "sports",
  referrer: "origin-when-cross-origin",
  openGraph: {
    title: OG_TITLE,
    description: OG_DESCRIPTION,
    url: SITE_URL,
    siteName: "Pitching101",
    locale: "en_US",
    type: "website",
    images: shareImage(),
  },
  twitter: {
    card: "summary_large_image",
    title: OG_TITLE,
    description: OG_DESCRIPTION,
    images: [OG_IMAGE],
  },
  appleWebApp: {
    title: "Pitching101",
    capable: true,
    statusBarStyle: "default",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${oswald.variable} ${yesteryear.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans text-foreground">
        <Header />
        <MouseGlove />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}