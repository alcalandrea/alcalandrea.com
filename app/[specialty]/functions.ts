import {capitalize, makeDatoRequest} from "../functions"
import {specialties} from "./constants"
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
export function getSpecialtyTitle(specialty: Specialty) {
  return specialty.split("-").map(capitalize).join(" ")
}

/**
 * Generates the key we use in the CMS for the campaigns of a
 * specialty (eg. inbound-marketing -> allInboundCampaigns)
 */
export function getCampaignKey(specialty: Specialty) {
  return `all${capitalize(specialty.split("-")[0])}Campaigns`
}

/**
 * Loads all campaigns related to a specialty
 */
export function getCampaigns(specialty: Specialty) {
  const campaignKey = getCampaignKey(specialty)
  return makeDatoRequest<CampaignsResponse>({
    query: `
      query GetCampaigns {
        ${campaignKey}(orderBy: [index_ASC]) {
          id
          index
          projects {
            id
            images {
              alt
              height
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
}
