"use client"
import {CoreLink} from "./components/CoreLink"

/**
 * Generic error page when route throws an error
 */
export default function Error({error}: {error: Error}) {
  return (
    <div className="grid h-screen p-6">
      <div className="flex flex-col justify-center gap-10 text-center">
        <h1 className="text-xl font-bold sm:text-2xl lg:text-3xl">Oh. No.</h1>
        <h2 className="text-lg font-bold sm:text-xl lg:text-2xl">
          You weren&apos;t supposed to see this 🙈
        </h2>
        <p>{(error as Error)?.message ?? "An unexpected error ocurred"}</p>
        <CoreLink href="/" replace variant="underlined">
          Return Home
        </CoreLink>
      </div>
    </div>
  )
}
