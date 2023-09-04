import {DatoImage} from "../models"

export type InboundProjectResponse = {
  allInboundProjects: Array<{
    id: string
    images: Array<DatoImage>
    index: number
    linkUrl: string
    linkText: string
    subtitle: string
    text: string
    title: string
  }>
}
