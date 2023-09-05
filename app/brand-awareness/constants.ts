export const awarenessProjectsQuery = `
  query GetallAwarenessProjects {
    allAwarenessProjects(orderBy: [index_ASC]) {
      id
      image {
        alt
        height
        url
        width
      }
      images {
        alt
        height
        id
        url
        width
      }
      index
      linkUrl
      linkText
      subtitle
      text
      title
    }
  }
` as const
