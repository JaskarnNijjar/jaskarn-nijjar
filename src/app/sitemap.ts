import type { MetadataRoute } from "next";

import { SITE } from "@/lib/constants";

const routes = ["", "/projects"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route, index) => ({
    url: `${SITE.url}${route}`,
    lastModified: new Date(),
    changeFrequency: index === 0 ? "weekly" : "monthly",
    priority: index === 0 ? 1 : 0.8,
  }));
}
