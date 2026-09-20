import type { Metadata } from "next";
import AboutHomeRedirect from "@/components/AboutHomeRedirect";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet Coach Nick at Pitching101 — youth pitching lessons in Naples, FL. Clear coaching, arm care first.",
};

export default function AboutPage() {
  return <AboutHomeRedirect />;
}
