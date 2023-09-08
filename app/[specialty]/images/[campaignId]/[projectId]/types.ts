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
