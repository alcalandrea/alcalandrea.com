import {CoreLink} from "./components/CoreLink"

/**
 * Generic 404 page when route does not return content
 */
export default function NotFoundPage() {
  return (
    <div className="grid h-screen p-6">
      <div className="flex flex-col justify-center gap-10 text-center">
        <h1 className="text-xl font-bold sm:text-2xl lg:text-3xl">Oh. No.</h1>
        <h2 className="text-lg font-bold sm:text-xl lg:text-2xl">
          You weren&apos;t supposed to see this 🙈
        </h2>
        <p>404: Not Found</p>
        <CoreLink href="/" replace variant="underlined">
          Return Home
        </CoreLink>
      </div>
    </div>
  )
}
