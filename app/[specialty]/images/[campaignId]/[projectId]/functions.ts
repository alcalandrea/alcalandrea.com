import {specialtyQueryKeys} from "@/app/[specialty]/constants"
import {Specialty} from "@/app/[specialty]/types"
import {makeDatoRequest} from "@/app/functions"
import {CampaignProjectImagesResponse} from "./types"

/**
 * Loads the images which match a specialty, campaign, and project
 */
export async function loadCampaignProjectImages({
  campaignId,
  projectId,
  specialty,
}: {
  campaignId: string
  projectId: string
  specialty: Specialty
}) {
  const queryKey = specialtyQueryKeys[specialty]
  const res = await makeDatoRequest<CampaignProjectImagesResponse>({
    query: `
      query GetCampaignProjectImages {
        all${queryKey}Campaigns(filter: {id: {eq: ${campaignId}}}) {
          id
          projects {
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
      }
    `,
  })
  return (
    Object.values(res)[0][0]?.projects.find(p => p.id === projectId)?.images ??
    []
  )
}
