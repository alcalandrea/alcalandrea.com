import {makeDatoRequest} from "@/app/functions"
import {InboundProjectImagesResponse} from "./models"

export async function loadInboundProjectImages(projectId: string) {
  const {allInboundProjects} =
    await makeDatoRequest<InboundProjectImagesResponse>({
      query: `
        query GetInboundProjectImages {
          allInboundProjects(filter: {id: {eq: ${projectId}}}) {
            id
            images {
              alt
              height
              id
              url
              width
            }
          }
        }
      `,
    })

  return allInboundProjects[0]?.images ?? []
}
