import CoreLink from "./components/CoreLink"

export default function HomePage() {
  return (
    <main className="mt-16 flex flex-col items-center gap-20 px-4 text-center">
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
  )
}

const links = [
  {
    slug: "inbound-marketing",
    text: "Inbound Marketing",
  },
  {
    slug: "product-marketing",
    text: "Product Marketing",
  },
  {
    slug: "event-planning",
    text: "Event Planning",
  },
]
