import {DatoImage} from "../models"

export type AboutResponse = {
  about: Record<
    | "biography"
    | `quote${1 | 2 | 3}`
    | `quotee${"Link" | "Name" | "Role"}`
    | "title",
    string
  > & {
    image: Pick<DatoImage, "alt" | "url">
    quoteeImage: Omit<DatoImage, "id">
  }
}
