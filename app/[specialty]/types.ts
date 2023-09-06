import {DatoImage} from "../models"
import {specialties} from "./constants"

export type Specialty = (typeof specialties)[number]

export type CampaignsResponse = {
  [key: PropertyKey]: Array<{
    id: string
    index: number
    projects: Array<{
      id: string
      images: Array<DatoImage>
      index: number
      linkText: string
      linkUrl: string
      subtitle: string
      text: string
      title: string
    }>
    title: string
  }>
}
