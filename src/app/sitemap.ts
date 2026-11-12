import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

const pages: { path: string; priority: number; freq: "weekly" | "monthly" | "yearly" }[] = [
  { path: "", priority: 1, freq: "weekly" },
  { path: "/product", priority: 0.9, freq: "monthly" },
  { path: "/pricing", priority: 0.9, freq: "monthly" },
  { path: "/contact", priority: 0.8, freq: "yearly" },
  { path: "/about", priority: 0.6, freq: "yearly" },
  { path: "/privacy", priority: 0.3, freq: "yearly" },
  { path: "/terms", priority: 0.3, freq: "yearly" },
  { path: "/cookies", priority: 0.2, freq: "yearly" },
  { path: "/refunds", priority: 0.3, freq: "yearly" },
  { path: "/service-delivery", priority: 0.2, freq: "yearly" },
  { path: "/acceptable-use", priority: 0.2, freq: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map((p) => ({ url: `${site.url}${p.path}`, changeFrequency: p.freq, priority: p.priority }));
}
