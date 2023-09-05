import {makeDatoRequest} from "@/app/functions"
import {AwarenessProjectImagesResponse} from "./models"

export async function loadAwarenessProjectImages(projectId: string) {
  const {allAwarenessProjects} =
    await makeDatoRequest<AwarenessProjectImagesResponse>({
      query: `
        query GetAwarenessProjectImages {
          allAwarenessProjects(filter: {id: {eq: ${projectId}}}) {
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

  return allAwarenessProjects[0]?.images ?? []
}
