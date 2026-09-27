import type { MetadataRoute } from "next";
import { SITE } from "@/lib/utils";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/courses",
    "/delf-dalf",
    "/private-lessons",
    "/business-french",
    "/online-classes",
    "/teachers",
    "/success-stories",
    "/faq",
    "/blog",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `${SITE.url}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));
}
