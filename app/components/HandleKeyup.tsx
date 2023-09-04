"use client"
import {useRouter} from "next/navigation"
import {useKeyup} from "../hooks"

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
