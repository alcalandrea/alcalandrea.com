import {DatoImage} from "../types"
import {specialties} from "./constants"

/**
 * The specialties which each have their own page
 */
export type Specialty = (typeof specialties)[number]

/**
 * The response we get when loading all of the
 * campaigns from within a specific specialty
 */
export type CampaignsResponse = Array<{
  id: string
  index: number
  projects: Array<{
    id: string
    images: Array<Omit<DatoImage, "id">>
    index: number
    linkText: string
    linkUrl: string
    subtitle: string
    text: string
    title: string
  }>
  title: string
}>

/**
 * The props which can be accessed from within this module
 */
export type SpecialtyProps = {
  params: Promise<{specialty: string}>
}
