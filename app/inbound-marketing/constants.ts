export const inboundProjectsQuery = `
  query GetAllInboundProjects {
    allInboundProjects(orderBy: [index_ASC]) {
      id
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
