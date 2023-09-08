import classNames from "classnames"
import type {Metadata} from "next"
import {Mulish} from "next/font/google"
import "./globals.css"

/* we will use this font globally by default */
const mulish = Mulish({subsets: ["latin"]})

/* default metadata for all pages */
export const metadata: Metadata = {
  applicationName: "Andrea Alcala Vasquez",
  authors: [
    {name: "Andrea Alcala Vasquez"},
    {name: "Max Monis", url: "https://maxmonis.com"},
  ],
  creator: "Andrea Alcala Vasquez",
  description: "Integrated Marketing Strategist",
  formatDetection: {
    address: false,
    email: false,
    telephone: false,
  },
  generator: "Next.js",
  keywords: [
    "Andrea Alcala",
    "Andrea Vasquez",
    "Andrea Alcala Vasquez",
    "Andrea Alcala Toronto",
    "Andrea Vasquez Toronto",
    "Andrea Alcala Vasquez Toronto",
    "Marketing Strategist Toronto",
    "Marketing Manager Toronto",
  ],
  publisher: "Vercel",
  referrer: "origin-when-cross-origin",
  title: {
    default: "Andrea Alcala Vasquez",
    template: "%s | Andrea Alcala Vasquez",
  },
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
