import {makeDatoRequest} from "../functions"
import {aboutQuery} from "./constants"
import {AboutResponse} from "./models"

export async function loadAboutPageData() {
  const {about} = await makeDatoRequest<AboutResponse>({
    query: aboutQuery,
  })
  return about
}
