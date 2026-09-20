import type { Metadata } from "next";
import { DM_Sans, Outfit } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
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

export const metadata: Metadata = {
  title: {
    default: "Pitching101 | Youth Pitching Lessons in Naples, FL",
    template: "%s | Pitching101",
  },
  description:
    "Youth pitching lessons in Naples, FL. Clear coaching for kids and parents. In-person, PDF, and virtual options. Text or call 845-768-2211.",
  keywords: [
    "Naples FL pitching lessons",
    "youth pitching coach Naples",
    "baseball pitching Naples Florida",
    "elite pitching instruction Naples",
    "Pitching101",
  ],
  openGraph: {
    title: "Pitching101 | Youth Pitching Lessons in Naples, FL",
    description:
      "Youth pitching lessons in Naples, FL — clear coaching, no jargon.",
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
      <body className="flex min-h-full flex-col bg-background font-sans text-foreground">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
