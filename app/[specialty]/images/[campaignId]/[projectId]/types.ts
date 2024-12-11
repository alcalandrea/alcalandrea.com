import {DatoImage} from "@/app/types"

/**
 * The response we get when requesting all images from a certain campaign
 */
export type CampaignProjectImagesResponse = Array<{
  id: string
  projects: Array<{
    id: string
    images: Array<DatoImage>
  }>
}>

/**
 * The props which can be accessed from within this module
 */
export type CampaignProjectImagesProps = {
  params: Promise<{
    campaignId: string
    projectId: string
    specialty: string
  }>
}
