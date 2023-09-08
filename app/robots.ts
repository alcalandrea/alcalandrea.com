import {MetadataRoute} from "next"

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