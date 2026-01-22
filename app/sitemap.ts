import { type MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      changeFrequency: "monthly",
      lastModified: new Date(),
      priority: 1,
      url: "https://alcalandrea.com",
    },
    {
      changeFrequency: "monthly",
      lastModified: new Date(),
      priority: 0.8,
      url: "https://alcalandrea.com/clearspace",
    },
    {
      changeFrequency: "monthly",
      lastModified: new Date(),
      priority: 0.8,
      url: "https://alcalandrea.com/workast",
    },
  ];
}
