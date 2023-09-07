import {Specialty} from "./types"

/**
 * The slugs we use for the dynamic specialty pages
 */
export const specialties = [
  "inbound-marketing",
  "brand-awareness",
  "event-planning",
] as const

/**
 * A map of the specialties and the keys we use in the CMS for
 * their respective campaigns (eg. Inbound -> allInboundCampaigns)
 */
export const specialtyQueryKeys: Record<Specialty, string> = {
  "inbound-marketing": "Inbound",
  "brand-awareness": "Brand",
  "event-planning": "Event",
} as const
