"use client"
import React from "react"
import {CoreLink} from "./components/CoreLink"

/**
 * Generic error page when route throws an error
 */
export default function ErrorPage({
  error,
}: {
  error: Error & {digest?: string}
  reset: () => void
}) {
  React.useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="grid h-screen p-6">
      <div className="flex flex-col justify-center gap-10 text-center">
        <h1 className="text-xl font-bold sm:text-2xl lg:text-3xl">Oh. No.</h1>
        <h2 className="text-lg font-bold sm:text-xl lg:text-2xl">
          You weren&apos;t supposed to see this 🙈
        </h2>
        <p>{error.message ?? "An unexpected error ocurred"}</p>
        <CoreLink href="/" replace variant="underlined">
          Return Home
        </CoreLink>
      </div>
    </div>
  )
}
