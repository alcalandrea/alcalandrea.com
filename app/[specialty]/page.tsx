import Image from "next/image"
import {notFound} from "next/navigation"
import React from "react"
import {CoreLink} from "../components/CoreLink"
import {PageWrapper} from "../components/PageWrapper"
import {specialties} from "./constants"
import {getSpecialtyTitle, isSpecialty, loadCampaigns} from "./functions"
import {SpecialtyProps} from "./types"

/**
 * Loads the content for each specialty at build time
 */
export function generateStaticParams(): Array<
  Awaited<SpecialtyProps["params"]>
> {
  return specialties.map(specialty => ({specialty}))
}

/**
 * Dynamic page which displays all campaigns related to a specialty
 */
export default async function SpecialtyPage({params}: SpecialtyProps) {
  const {specialty} = await params

  /* show the not found page if the specialty param is invalid */
  if (!isSpecialty(specialty)) {
    notFound()
  }

  /* load all campaigns for this specialty */
  const campaigns = await loadCampaigns(specialty)

  /* find the ID of the first project (if any) which has one or more images */
  const firstImageProjectId = campaigns
    .find(c => c.projects.some(p => p.images.length > 0))
    ?.projects.find(p => p.images.length > 0)?.id

  return (
    <PageWrapper>
      <main className="flex flex-col items-center justify-center gap-20 px-6 text-center">
        {campaigns.map(campaign => (
          <div
            className="flex flex-col items-center justify-center gap-20"
            key={campaign.id}
          >
            <h1 className="text-xl font-bold sm:text-2xl lg:text-3xl">
              {campaign.title}
            </h1>
            <div className="flex max-w-screen-sm flex-col gap-6">
              {campaign.projects.map(
                ({id, images, linkText, linkUrl, subtitle, text, title}) => (
                  <React.Fragment key={id}>
                    {title && (
                      <h2 className="text-lg font-bold sm:text-xl lg:text-2xl">
                        {title}
                      </h2>
                    )}
                    {subtitle && (
                      <h3 className="font-bold sm:text-lg lg:text-xl">
                        {subtitle}
                      </h3>
                    )}
                    {text
                      .split(/\r|\n/)
                      .filter(Boolean)
                      .map((paragraph, i) => (
                        <p
                          dangerouslySetInnerHTML={{__html: paragraph}}
                          key={`${id}-${i}`}
                        />
                      ))}
                    {images.length > 0 && (
                      <div
                        className="relative bg-gray-100 dark:bg-gray-700 sm:p-10"
                        {...{id}}
                      >
                        {/* we only display the link to view the image
                        gallery if there are at least two images */}
                        {images.length > 1 && (
                          <CoreLink
                            aria-label="View scrollable image gallery"
                            className="absolute right-2 top-2"
                            href={`/${specialty}/images/${campaign.id}/${id}`}
                          >
                            <Image
                              alt="Expand icon"
                              className="rounded-md transition-transform hover:scale-110"
                              height={28}
                              role="button"
                              src="/arrows.svg"
                              width={28}
                            />
                          </CoreLink>
                        )}
                        <Image
                          alt={images[0].alt}
                          height={images[0].height}
                          /* the image needs the priority prop only if this is
                          the first project which contains one or more images */
                          priority={id === firstImageProjectId}
                          src={images[0].url}
                          title={images[0].title || images[0].alt}
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
          </div>
        ))}
        <div className="flex flex-wrap justify-center gap-6 px-6">
          {specialties
            .filter(s => s !== specialty)
            .map(slug => (
              <CoreLink key={slug} href={`/${slug}`} variant="underlined">
                {getSpecialtyTitle(slug)}
              </CoreLink>
            ))}
        </div>
        <CoreLink className="underline" href={`/${specialty}#top-of-page`}>
          Scroll to top
        </CoreLink>
      </main>
    </PageWrapper>
  )
}
