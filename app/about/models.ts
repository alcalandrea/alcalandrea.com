export type AboutResponse = {
  about: Record<
    | "biography"
    | `quote${1 | 2 | 3}`
    | `quotee${"Link" | "Name" | "Role"}`
    | "title",
    string
  > & {
    image: {
      alt: string
      url: string
    }
    quoteeImage: {
      alt: string
      height: number
      url: string
      width: number
    }
  }
}
