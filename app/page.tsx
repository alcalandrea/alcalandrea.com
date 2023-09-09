import {specialties} from "./[specialty]/constants"
import {getSpecialtyText} from "./[specialty]/functions"
import ContentWrapper from "./components/ContentWrapper"
import CoreLink from "./components/CoreLink"

/**
 * The site's main landing page, which contains a brief
 * intro and stylized links to the specialty pages
 */
export default function HomePage() {
  return (
    <ContentWrapper>
      <main className="flex flex-col items-center gap-20 px-4 text-center">
        <div>
          <h1 className="text-xl font-bold sm:text-2xl lg:text-3xl">
            I&apos;m Andrea, an Integrated Marketing Strategist
          </h1>
          <h2 className="mt-1 text-lg font-bold sm:text-xl lg:text-2xl">
            Based in Toronto, working worldwide ✌️
          </h2>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-12">
          {specialties.map(specialty => (
            <CoreLink
              className="flex h-56 w-56 items-center justify-center rounded-full border-2 border-pink-600 bg-white p-12 text-xl font-bold uppercase text-pink-600 transition-colors hover:bg-pink-600 hover:text-white"
              href={specialty}
              key={specialty}
            >
              {getSpecialtyText(specialty)}
            </CoreLink>
          ))}
        </div>
      </main>
    </ContentWrapper>
  )
}
