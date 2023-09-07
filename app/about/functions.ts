import {makeDatoRequest} from "../functions"
import {aboutQuery} from "./constants"
import {AboutResponse} from "./types"

/**
 * Loads the about page's data from the CMS
 */
export async function loadAboutPageData() {
  const {about} = await makeDatoRequest<AboutResponse>({
    query: aboutQuery,
  })
  return about
}
