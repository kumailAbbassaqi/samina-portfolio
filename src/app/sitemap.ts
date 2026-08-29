import { MetadataRoute } from "next";
import { siteConfig } from "@/data/siteConfig";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/work",
    "/work/koh-e-zan",
    "/work/saheli-first-responder",
    "/work/saheli-circles",
    "/impact",
    "/experience",
    "/learning",
    "/documentation",
    "/contact",
  ];

  const currentDate = new Date().toISOString().split("T")[0];

  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: currentDate,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1.0 : route.startsWith("/work") ? 0.9 : 0.8,
  }));
}
