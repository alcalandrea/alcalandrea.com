export const aboutQuery = `
  query GetAbout {
    about {
      biography
      image {
        alt
        url
      }
      quote1
      quote2
      quote3
      quoteeImage {
        alt
        height
        url
        width
      }
      quoteeLink
      quoteeName
      quoteeRole
      title
    }
  }
` as const
