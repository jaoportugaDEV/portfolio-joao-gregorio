import type { MetadataRoute } from "next";
import { profile } from "@/data/profile";
import { caseStudies } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: profile.siteUrl, priority: 1 },
    ...caseStudies.map((c) => ({ url: `${profile.siteUrl}/projetos/${c.slug}`, priority: 0.8 })),
  ];
}
