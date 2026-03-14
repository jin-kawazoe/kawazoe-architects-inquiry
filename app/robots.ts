import { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/inquiry/",
    },
    sitemap: "https://www.kawazoe-architects.com/inquiry/sitemap.xml",
  };
}
