import type { Metadata } from "next";
import AboutHomeRedirect from "@/components/AboutHomeRedirect";

export const metadata: Metadata = {
  title: "About Coach Deising",
  description:
    "Coach Deising runs Pitching101 — youth pitching lessons in Naples, FL for kids 8-16. Parents, travel teams, other coaches, and schools.",
};

export default function AboutPage() {
  return <AboutHomeRedirect />;
}
