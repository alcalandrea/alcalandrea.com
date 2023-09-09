"use client"
import {useRouter} from "next/navigation"
import {useKeyup} from "../hooks"

/**
 * Redirects the user to the specified route if they press the specified key
 */
export default function NavigateOnKeyup({
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
