import React from "react"
import CoreLink from "../components/CoreLink"
import ImageGallery from "../components/ImageGallery"
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
          ({images, index, linkUrl, linkText, subtitle, text, title}) => (
            <React.Fragment key={index}>
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
                    key={`${index}-${i}`}
                  />
                ))}
              {images.length > 0 && <ImageGallery {...{images}} />}
              {linkUrl && (
                <CoreLink href={linkUrl} variant="underlined">
                  {linkText || "See Metrics"}
                </CoreLink>
              )}
            </React.Fragment>
          ),
        )}
      </div>
    </main>
  )
}
