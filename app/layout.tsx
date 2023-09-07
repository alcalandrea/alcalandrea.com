import classNames from "classnames"
import type {Metadata} from "next"
import {Mulish} from "next/font/google"
import "./globals.css"

const mulish = Mulish({subsets: ["latin"]})

/**
 * Default metadata for all pages
 */
export const metadata: Metadata = {
  description: "Integrated Marketing Strategist",
  title: "Andrea Alcala Vasquez",
}

/**
 * Base layout which applies globally
 */
export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body
        className={classNames(
          mulish.className,
          "min-w-screen max-w-screen flex max-h-screen min-h-screen flex-col justify-between gap-60 overflow-x-hidden bg-white text-slate-800 dark:bg-slate-900 dark:text-white",
        )}
      >
        {children}
      </body>
    </html>
  )
}
