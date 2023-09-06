import {makeDatoRequest} from "../functions"
import {aboutQuery} from "./constants"
import {AboutResponse} from "./types"

export async function loadAboutPageData() {
  const {about} = await makeDatoRequest<AboutResponse>({
    query: aboutQuery,
  })
  return about
}
