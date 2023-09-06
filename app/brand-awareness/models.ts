import {DatoImage} from "../models"

export type AwarenessProjectResponse = {
  allAwarenessProjects: Array<{
    id: string
    image: Omit<DatoImage, "id">
    images: Array<DatoImage>
    index: number
    linkUrl: string
    linkText: string
    subtitle: string
    text: string
    title: string
  }>
}
