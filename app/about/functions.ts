import makeDatoRequest from "@/app/utils/makeDatoRequest"
import {aboutQuery} from "./constants"
import {AboutResponse} from "./models"

export async function loadAboutPageData() {
  const {about} = await makeDatoRequest<AboutResponse>({
    query: aboutQuery,
  })
  return about
}
