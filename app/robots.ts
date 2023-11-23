import {MetadataRoute} from "next"

/**
 * Generates robots.txt file for this site
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      allow: "/",
      disallow: "/private/",
      userAgent: "*",
    },
    sitemap: "https://alcalandrea.com/sitemap.xml",
  }
}
