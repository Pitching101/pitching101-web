import type { Metadata } from "next";
import AboutHomeRedirect from "@/components/AboutHomeRedirect";

export const metadata: Metadata = {
  title: "Meet Coach Nick",
  description:
    "Coach Nick runs Pitching101 — youth pitching lessons in Naples, FL for kids ages 8-14. Clear cues, arm care first.",
};

export default function AboutPage() {
  return <AboutHomeRedirect />;
}
