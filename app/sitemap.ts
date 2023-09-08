import {MetadataRoute} from "next"
import {specialties} from "./[specialty]/constants"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      changeFrequency: "yearly",
      lastModified: new Date(),
      priority: 1,
      url: "https://alcalandrea.com",
    },
    {
      changeFrequency: "monthly",
      lastModified: new Date(),
      priority: 0.8,
      url: "https://alcalandrea.com/about",
    },
    ...specialties.map(
      specialty =>
        ({
          changeFrequency: "monthly",
          lastModified: new Date(),
          priority: 0.8,
          url: `https://alcalandrea.com/${specialty}`,
        }) as const,
    ),
  ]
}
