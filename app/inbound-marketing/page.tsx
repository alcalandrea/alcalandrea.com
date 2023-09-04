import Image from "next/image"
import React from "react"
import CoreLink from "../components/CoreLink"
import {getInboundProjects} from "./functions"

export default async function InboundMarketingPage() {
  const projects = await getInboundProjects()

  return (
    <main className="flex flex-col items-center justify-center gap-20 px-6 text-center">
      <h1 className="text-xl font-bold sm:text-2xl lg:text-3xl">
        Inbound Marketing Campaign for Workast
      </h1>
      <div className="flex max-w-screen-sm flex-col gap-6">
        {projects.map(
          ({id, images, linkUrl, linkText, subtitle, text, title}) => (
            <React.Fragment key={id}>
              {title && (
                <h2 className="text-lg font-bold sm:text-xl lg:text-2xl">
                  {title}
                </h2>
              )}
              {subtitle && (
                <h3 className="font-bold sm:text-lg lg:text-xl">{subtitle}</h3>
              )}
              {text
                ?.split(/\r|\n/)
                .filter(Boolean)
                .map((paragraph, i) => (
                  <p
                    dangerouslySetInnerHTML={{__html: paragraph}}
                    key={`${id}-${i}`}
                  />
                ))}
              {images.length > 0 && (
                <div className="relative bg-gray-100 sm:p-10" {...{id}}>
                  <CoreLink
                    aria-label="View scrollable image gallery"
                    className="absolute right-2 top-2"
                    href={`/inbound-marketing/images/${id}`}
                  >
                    <Image
                      alt="Arrows pointing out icon"
                      className="rounded-md transition-transform hover:scale-110"
                      height={28}
                      role="button"
                      src="/arrows.svg"
                      width={28}
                    />
                  </CoreLink>
                  <Image
                    alt={images[0].alt}
                    height={images[0].height}
                    src={images[0].url}
                    width={images[0].width}
                  />
                </div>
              )}
              {linkUrl && (
                <div>
                  <CoreLink href={linkUrl} variant="underlined">
                    {linkText || "See metrics"}
                  </CoreLink>
                </div>
              )}
            </React.Fragment>
          ),
        )}
      </div>
      <CoreLink className="underline" href="/inbound-marketing#top-of-page">
        Scroll to top
      </CoreLink>
    </main>
  )
}
