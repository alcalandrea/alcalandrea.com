import {Specialty} from "./types"

export const specialties = [
  "inbound-marketing",
  "brand-awareness",
  "event-planning",
] as const

export const specialtyQueryKeys: Record<Specialty, string> = {
  "inbound-marketing": "Inbound",
  "brand-awareness": "Brand",
  "event-planning": "Event",
} as const
