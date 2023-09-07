import {DatoImage} from "../types"

/**
 * The response we get back from the CMS with data for the about page
 */
export type AboutResponse = {
  about: {
    biography: string
    image: Omit<DatoImage, "id">
    quote1: string
    quote2: string
    quote3: string
    quoteeImage: Omit<DatoImage, "id">
    quoteeLink: string
    quoteeName: string
    quoteeRole: string
    title: string
  }
}
