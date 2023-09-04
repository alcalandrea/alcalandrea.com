import {makeDatoRequest} from "../functions"
import {inboundProjectsQuery} from "./constants"
import {InboundProjectResponse} from "./models"

export async function getInboundProjects() {
  const {allInboundProjects} = await makeDatoRequest<InboundProjectResponse>({
    query: inboundProjectsQuery,
  })
  return allInboundProjects
}
