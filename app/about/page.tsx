import Image from "next/image"
import CoreLink from "../components/CoreLink"

export default function AboutPage() {
  return (
    <main className="mt-16 flex flex-col items-center justify-center gap-20 px-4">
      <h1 className="text-xl font-bold sm:text-2xl lg:text-3xl">About Me</h1>
      <div className="item-center flex justify-center gap-x-6 gap-y-20 max-lg:flex-col-reverse">
        <div className="relative flex flex-shrink flex-grow-0 items-center justify-center">
          <Image
            alt="Andrea on a bike"
            aria-description="young woman on a bike smiles at the camera with trees in the background"
            className="object-contain"
            height={288.8}
            priority
            src="/andreabike.jpg"
            width={384}
          />
        </div>
        <div className="flex max-w-screen-sm flex-col gap-4 px-4">
          <p>
            I worked my way through university as my home country of Venezuela
            reached a socioeconomic low point.
          </p>
          <p>
            Thanks to collaborations with IBM and Leo Burnett, my work drew the
            attention of a Canadian company, allowing me to establish myself in
            Toronto.
          </p>
          <p>
            Since then, my professional career has centered around Integrated
            Marketing, enabling me to craft holistic strategies that integrate
            inbound marketing, event planning, and project management.
          </p>
          <p>
            Working in different industries and on varied projects has allowed me to
            understand that collaboration and data-driven creative strategies are at
            the core of everything I&apos;ve been able achieve.
          </p>
        </div>
      </div>
      <div className="max-w-screen-sm max-md:px-4">
        <div>
          <div>
            <span className="-ml-6 text-7xl">“</span>
          </div>
          <p className="-mt-12">
            <span className="text-xl font-bold sm:text-3xl">
              Andrea has a rare combination of talents
            </span>
            <span>
              &nbsp;with notable strengths in project management, print and
              digital graphic design, web technologies, data management,
              reporting, marketing automation and more. She did a great job on
              virtually everything I gave her across the spectrum of marketing
              disciplines over the year+ we worked together, and that&apos;s
              rare in a single role. She was organized, efficient and always
              ready for more.&nbsp;
            </span>
            <span className="text-xl font-bold sm:text-2xl">
              I&apos;d work with her again given the chance.
            </span>
          </p>
          <div className="flex justify-end sm:-mt-8">
            <span className="text-7xl">”</span>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <Image
            alt="dallas kachan"
            className="mb-2 h-20 w-20 rounded-full"
            height={100}
            src="/dallaskachan.jpg"
            width={100}
          />
          <CoreLink
            className="underline"
            href="https://ca.linkedin.com/in/dallaskachan"
          >
            Dallas Kachan
          </CoreLink>
          <p className="text-sm">VP Marketing | Edsby</p>
        </div>
      </div>
    </main>
  )
}
