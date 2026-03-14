import { MetadataRoute } from "next";

export const dynamic = "force-static";

const BASE_URL = "https://www.kawazoe-architects.com/inquiry";

const works = [
  "ay-house", "iehaku-model-house", "ak-model-house", "uy3-house",
  "hk-model-house", "sc-model-house", "bono-curry-stand", "hk-shop-design",
  "showroom", "sy-headquarters", "reluvilla", "affectueux", "nail-shop",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    { url: `${BASE_URL}/`, priority: 1.0, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/works/`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/about/`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/flow/`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/contact/`, priority: 0.9, changeFrequency: "monthly" as const },
  ];

  const workPages = works.map((slug) => ({
    url: `${BASE_URL}/works/${slug}/`,
    priority: 0.7,
    changeFrequency: "yearly" as const,
  }));

  return [...staticPages, ...workPages];
}
