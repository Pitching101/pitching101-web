import type { Metadata } from "next";
import AboutHomeRedirect from "@/components/AboutHomeRedirect";

export const metadata: Metadata = {
  title: "About Coach Deising",
  description:
    "Coach Nick runs Pitching101 — youth pitching lessons in Naples, FL for kids ages 8-14. Parents, other coaches, travel teams, and schools.",
};

export default function AboutPage() {
  return <AboutHomeRedirect />;
}
