import {makeDatoRequest} from "../functions"
import {specialties, specialtyQueryKeys} from "./constants"
import {CampaignsResponse, Specialty} from "./types"

export async function getCampaigns({specialty}: {specialty: Specialty}) {
  const queryKey = specialtyQueryKeys[specialty]
  const res = await makeDatoRequest<CampaignsResponse>({
    query: `
      query GetCampaigns {
        all${queryKey}Campaigns(orderBy: [index_ASC]) {
          id
          index
          projects {
            id
            images {
              alt
              height
              id
              url
              width
            }
            index
            linkText
            linkUrl
            subtitle
            text
            title
          }
          title
        }
      }
    `,
  })
  return Object.values(res)[0]
}

export function isSpecialty(specialty: unknown): specialty is Specialty {
  return specialties.includes(specialty as Specialty)
}
