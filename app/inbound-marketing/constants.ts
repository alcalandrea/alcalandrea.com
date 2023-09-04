export const inboundProjectsQuery = `
  query GetAllInboundProjects {
    allInboundProjects(orderBy: [index_ASC]) {
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
