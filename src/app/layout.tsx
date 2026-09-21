import type { Metadata, Viewport } from "next";
import { DM_Sans, Outfit } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollThrowDecor from "@/components/ScrollThrowDecor";
import MouseGlove from "@/components/MouseGlove";
import "./globals.css";

/** Friendly big-headline display — conversion feel, not pixel fonts. */
const outfit = Outfit({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
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
  metadataBase: new URL("https://pitching101.com"),
  title: {
    default: "Youth pitching lessons in Naples, FL | Pitching101",
    template: "%s | Pitching101",
  },
  description:
    "Pitching101 is Coach Nick's youth pitching lessons in Naples, FL for kids ages 8-14. More strikes, healthy arms, a plan parents get. Text 845-768-2211.",
  keywords: [
    "youth pitching lessons Naples FL",
    "pitching coach Naples Florida",
    "youth baseball pitching Collier County",
    "Pitching101",
  ],
  openGraph: {
    title: "Youth pitching lessons in Naples, FL | Pitching101",
    description:
      "Coach Nick helps kids ages 8-14 throw more strikes in Naples, FL. Clear cues. Arm care first.",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans text-foreground">
        <Header />
        <ScrollThrowDecor />
        <MouseGlove />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
