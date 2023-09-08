import {makeDatoRequest} from "../functions"
import {aboutQuery} from "./constants"
import {AboutResponse} from "./types"

/**
 * Loads the about page's data from the CMS
 */
export function loadAboutPageData() {
  return makeDatoRequest<AboutResponse>({
    query: aboutQuery,
  })
}
