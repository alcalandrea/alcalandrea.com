import Image from "next/image"
import React from "react"
import CoreLink from "../components/CoreLink"
import {getAwarenessProjects} from "./functions"

export default async function BrandAwarenessPage() {
  const projects = await getAwarenessProjects()

  return (
    <main className="flex flex-col items-center justify-center gap-20 px-6 text-center">
      <h1 className="text-xl font-bold sm:text-2xl lg:text-3xl">
        Edsby Social Emotional Check-Ins Launch
      </h1>
      <div className="flex max-w-screen-sm flex-col gap-6">
        {projects.map(
          ({id, image, images, linkUrl, linkText, subtitle, text, title}) => (
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
              {image && (
                <Image
                  alt={image.alt}
                  className="bg-gray-100 sm:p-10"
                  height={image.height}
                  src={image.url}
                  width={image.width}
                />
              )}
              {images.length > 0 && (
                <div className="relative bg-gray-100 sm:p-10" {...{id}}>
                  <CoreLink
                    aria-label="View scrollable image gallery"
                    className="absolute right-2 top-2"
                    href={`/brand-awareness/images/${id}`}
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
                    {linkText || "View metrics"}
                  </CoreLink>
                </div>
              )}
            </React.Fragment>
          ),
        )}
      </div>
      <CoreLink className="underline" href="/brand-awareness#top-of-page">
        Scroll to top
      </CoreLink>
    </main>
  )
}
