import Image from "next/image"
import CoreLink from "./CoreLink"

export default function Layout({children}: {children: React.ReactNode}) {
  return (
    <>
      <div>
        <Header />
        {children}
      </div>
      <Footer />
    </>
  )
}

function Header() {
  return (
    <header
      className="mb-16 flex w-screen flex-col items-center justify-center p-6"
      id="top-of-page"
    >
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
          Andrea Alcala Vasquez
        </CoreLink>
      </span>
    </header>
  )
}

function Footer() {
  return (
    <footer className="flex w-screen flex-col items-center justify-center gap-3">
      <CoreLink href="https://www.linkedin.com/in/alcalandrea/">
        <Image alt="LinkedIn Logo" height={15} src="/linkedin.svg" width={15} />
      </CoreLink>
      <p className="pb-4 text-xs">Copyright © 2023 | Andrea Alcala Vasquez</p>
    </footer>
  )
}
