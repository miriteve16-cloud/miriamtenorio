import { MetadataRoute } from "next";
import { articulos } from "./blog/page";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://miriamtenorio.com";

  const pages = [
    { url: base, priority: 1.0, changeFrequency: "weekly" as const },
    { url: `${base}/sobre-mi`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${base}/libro`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${base}/conferencias`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${base}/prensa`, priority: 0.7, changeFrequency: "weekly" as const },
    { url: `${base}/blog`, priority: 0.8, changeFrequency: "weekly" as const },
    { url: `${base}/contacto`, priority: 0.8, changeFrequency: "monthly" as const },
  ];

  const blogPages = articulos.map((art) => ({
    url: `${base}/blog/${art.slug}`,
    priority: 0.7,
    changeFrequency: "monthly" as const,
  }));

  return [...pages, ...blogPages].map((p) => ({
    url: p.url,
    lastModified: new Date(),
    changeFrequency: p.changeFrequency,
    priority: p.priority,
  }));
}
