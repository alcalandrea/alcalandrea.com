import {DatoImage} from "@/app/models"

export type AwarenessProjectImagesResponse = {
  allAwarenessProjects:
    | []
    | [
        {
          id: string
          images: Array<DatoImage>
        },
      ]
}
