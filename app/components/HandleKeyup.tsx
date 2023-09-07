"use client"
import {useRouter} from "next/navigation"
import {useKeyup} from "../hooks"

/**
 * A client component which redirects the user to the
 * specified route if they press the specified key
 */
export default function HandleKeyup({
  keyName,
  route,
}: {
  keyName: string
  route: string
}) {
  const router = useRouter()
  useKeyup(keyName, () => router.push(route))
  return <></>
}
