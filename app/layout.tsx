import classNames from "classnames"
import type {Metadata} from "next"
import Image from "next/image"
import CoreLink from "./components/CoreLink"
import "./globals.css"
import {mulish} from "./utils/fonts"

export const metadata: Metadata = {
  description: "Integrated Marketing Strategist",
  title: "Andrea Alcalá Vásquez",
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body
        className={classNames(
          mulish.className,
          "min-w-screen max-w-screen flex max-h-screen min-h-screen flex-col justify-between gap-60 overflow-x-hidden bg-white text-slate-800",
        )}
      >
        <div>
          <Header />
          {children}
        </div>
        <footer className="flex w-screen flex-col items-center justify-center gap-3">
          <CoreLink href="https://www.linkedin.com/in/alcalandrea/">
            <Image
              alt="LinkedIn Logo"
              height={15}
              src="/linkedin.svg"
              width={15}
            />
          </CoreLink>
          <p className="pb-4 text-xs">
            Copyright © 2023 | Andrea Alcala Vasquez
          </p>
        </footer>
      </body>
    </html>
  )
}

function Header() {
  return (
    <header className="mb-16 flex w-screen flex-col items-center justify-center p-6">
      <div className="flex w-full max-w-screen-2xl items-center justify-between">
        <CoreLink href="/" variant="underlined">
          Home
        </CoreLink>
        <div className="flex items-center gap-5">
          <CoreLink href="/about" variant="underlined">
            About
          </CoreLink>
          <CoreLink href="mailto:alcalandrea@gmail.com" variant="filled">
            Say Hi
          </CoreLink>
        </div>
      </div>
      <span className="flex items-center">
        <CoreLink
          className="mt-8 text-center text-xl font-extrabold uppercase md:-mt-8"
          href="/"
        >
          Andrea Alcalá Vásquez
        </CoreLink>
      </span>
    </header>
  )
}
