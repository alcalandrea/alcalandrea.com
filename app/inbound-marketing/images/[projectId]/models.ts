import {DatoImage} from "@/app/models"

export type InboundProjectImagesResponse = {
  allInboundProjects:
    | []
    | [
        {
          id: string
          images: Array<DatoImage>
        },
      ]
}
