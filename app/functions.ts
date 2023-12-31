/**
 * Capitalizes the first letter of a string and makes the rest of it lowercase
 */
export function capitalize(s: string) {
  return s ? s[0].toUpperCase() + s.slice(1).toLowerCase() : ""
}

/**
 * Requests data from the CMS which matches the query it receives
 */
export async function makeDatoRequest<T>({
  includeDrafts = false,
  query,
  variables = {},
}: {
  includeDrafts?: boolean
  query: string
  variables?: object
}) {
  const response = await fetch("https://graphql.datocms.com/", {
    body: JSON.stringify({query, variables}),
    headers: {
      Authorization: `Bearer ${process.env.NEXT_DATOCMS_API_TOKEN}`,
      ...(includeDrafts ? {"X-Include-Drafts": "true"} : {}),
    },
    method: "POST",
    next: {
      revalidate: 3600,
    },
  })
  const responseBody = await response.json()
  if (!response.ok) {
    throw Error(
      `${response.status} ${response.statusText}: ${JSON.stringify(
        responseBody,
      )}`,
    )
  }
  return Object.values(responseBody.data)[0] as T
}
