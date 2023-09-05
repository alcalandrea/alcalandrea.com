import {makeDatoRequest} from "../functions"
import {awarenessProjectsQuery} from "./constants"
import {AwarenessProjectResponse} from "./models"

export async function getAwarenessProjects() {
  const {allAwarenessProjects} =
    await makeDatoRequest<AwarenessProjectResponse>({
      query: awarenessProjectsQuery,
    })
  return allAwarenessProjects
}
