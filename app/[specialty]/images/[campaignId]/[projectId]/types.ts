import {DatoImage} from "@/app/models"

export type CampaignProjectImagesResponse = {
  [key: PropertyKey]: Array<{
    id: string
    projects: Array<{
      id: string
      images: Array<DatoImage>
    }>
  }>
}
