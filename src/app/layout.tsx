import type { Metadata } from "next";
import { Geist, Geist_Mono, Pixelify_Sans } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const pixelify = Pixelify_Sans({
  weight: ["400", "500", "600", "700"],
  variable: "--font-pixel",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Pitching101 | Naples FL Youth & Elite Pitching Lessons",
    template: "%s | Pitching101 Naples FL",
  },
  description:
    "Parent-friendly pitching lessons in Naples, Florida. Youth and elite coaching, camps, clinics, Stan video feedback, PDF charts, and virtual options. Call 845-768-2211.",
  keywords: [
    "Naples FL pitching lessons",
    "youth pitching coach Naples",
    "baseball pitching Naples Florida",
    "elite pitching instruction Naples",
    "Pitching101",
  ],
  openGraph: {
    title: "Pitching101 | Naples FL Pitching Lessons",
    description:
      "Clear, parent-friendly pitching instruction for Naples, FL youth and elite players.",
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
      className={`${geistSans.variable} ${geistMono.variable} ${pixelify.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
