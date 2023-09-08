import Image from "next/image"
import CoreLink from "./CoreLink"

/**
 * A wrapper which includes the site's main header and footer
 */
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

/**
 * The site's main header, with internal links and the main title
 */
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
          className="mt-8 text-center text-xl font-extrabold uppercase md:-mt-7"
          href="/"
        >
          Andrea Alcala Vasquez
        </CoreLink>
      </span>
    </header>
  )
}

/**
 * The site's main footer, with an external link and copyright info
 */
function Footer() {
  return (
    <footer className="flex w-screen flex-col items-center justify-center px-4 pb-4 text-center text-xs">
      <CoreLink href="https://www.linkedin.com/in/alcalandrea/">
        <Image
          alt="LinkedIn Logo"
          className="dark:invert"
          height={15}
          src="/linkedin.svg"
          width={15}
        />
      </CoreLink>
      <p className="mb-1 mt-3">
        Designed in{" "}
        <CoreLink className="underline" href="https://www.figma.com/">
          Figma
        </CoreLink>
        . Data obtained with{" "}
        <CoreLink className="underline" href="https://www.semrush.com/">
          Semrush
        </CoreLink>
        .
      </p>
      <p>Copyright © 2023 | Andrea Alcala Vasquez</p>
    </footer>
  )
}
