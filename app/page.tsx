import {specialties} from "./[specialty]/constants"
import CoreLink from "./components/CoreLink"
import Layout from "./components/Layout"

export default function HomePage() {
  return (
    <Layout>
      <main className="flex flex-col items-center gap-20 px-4 text-center">
        <div>
          <h1 className="text-xl font-bold sm:text-2xl lg:text-3xl">
            — Hi, I&apos;m Andrea. An Integrated Marketing Strategist.
          </h1>
          <h2 className="mt-1 text-lg font-bold sm:text-xl lg:text-2xl">
            Based in Toronto, working worldwide.
          </h2>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-12">
          {links.map(({slug, text}) => (
            <CoreLink
              className="flex h-56 w-56 items-center justify-center rounded-full border-2 border-pink-600 bg-white p-12 text-xl font-bold uppercase text-pink-600 transition-colors hover:bg-pink-600 hover:text-white"
              href={slug}
              key={slug}
            >
              {text}
            </CoreLink>
          ))}
        </div>
      </main>
    </Layout>
  )
}

const links = specialties.map(slug => ({
  slug,
  text: slug
    .split("-")
    .map(s => s[0].toUpperCase() + s.slice(1))
    .join(" "),
}))
