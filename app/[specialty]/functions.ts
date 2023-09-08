import {makeDatoRequest} from "../functions"
import {specialties, specialtyQueryKeys} from "./constants"
import {CampaignsResponse, Specialty} from "./types"

/**
 * Evaluates whether the argument it receives is a valid specialty
 */
export function isSpecialty(specialty: unknown): specialty is Specialty {
  return specialties.includes(specialty as Specialty)
}

/**
 * Converts a specialty to its display text
 * (eg. inbound-marketing -> Inbound Marketing)
 */
export function getSpecialtyText(specialty: Specialty) {
  return specialty
    .split("-")
    .map(s => s[0].toUpperCase() + s.slice(1))
    .join(" ")
}

/**
 * Loads all campaigns related to a specialty
 */
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
