import type { MetadataRoute } from "next";
import { leadMagnets } from "@/data/leadMagnets";
import { SITE_URL } from "@/data/siteCopy";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const pages = [
    { path: "/", priority: 1, changeFrequency: "weekly" as const },
    { path: "/guides/", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/contact/", priority: 0.8, changeFrequency: "monthly" as const },
    {
      path: "/naples-fl-pitching-lessons/",
      priority: 0.9,
      changeFrequency: "monthly" as const,
    },
    ...leadMagnets.map((magnet) => ({
      path: `/guides/${magnet.slug}/`,
      priority: 0.7,
      changeFrequency: "monthly" as const,
    })),
  ];

  return pages.map((page) => ({
    url: new URL(page.path, SITE_URL).href,
    lastModified: now,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
