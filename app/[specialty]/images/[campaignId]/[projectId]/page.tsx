import {specialties} from "@/app/[specialty]/constants"
import {isSpecialty, loadCampaigns} from "@/app/[specialty]/functions"
import {CoreLink} from "@/app/components/CoreLink"
import {NavigateOnKeyup} from "@/app/components/NavigateOnKeyup"
import Image from "next/image"
import {notFound} from "next/navigation"
import {loadCampaignProjectImages} from "./functions"
import {CampaignProjectImagesProps} from "./types"

/**
 * Loads all image galleries at build time
 */
export async function generateStaticParams() {
  const params: Array<CampaignProjectImagesProps["params"]> = []
  for (const specialty of specialties) {
    const campaigns = await loadCampaigns(specialty)
    for (const campaign of campaigns) {
      for (const project of campaign.projects) {
        /* valid image galleries contain at least two images */
        if (project.images.length > 1) {
          params.push({
            campaignId: campaign.id,
            projectId: project.id,
            specialty,
          })
        }
      }
    }
  }
  return params
}

/**
 * Displays all images from a campaign project in a scrollable gallery
 */
export default async function CampaignProjectImagesPage({
  params: {campaignId, projectId, specialty},
}: CampaignProjectImagesProps) {
  /* show the not found page if the specialty param is invalid */
  if (!isSpecialty(specialty)) {
    notFound()
  }

  /* load all images which match the specialty, campaign, and project */
  const images = await loadCampaignProjectImages({
    campaignId,
    projectId,
    specialty,
  })

  /* show the not found page if there are less than two images */
  if (images.length < 2) {
    notFound()
  }

  /* this is the route we will use for closing the page, which
  shows the specialty page with this first image at the top */
  const route = `/${specialty}#${projectId}` as const

  return (
    <main className="flex h-screen w-screen justify-center bg-gray-100 dark:bg-slate-900">
      {/* navigate to the specialty page if the user hits escape */}
      <NavigateOnKeyup keyName="Escape" {...{route}} />
      {/* X button, which also navigates to the specialty page */}
      <CoreLink
        aria-label="Close scrollable image gallery"
        className="absolute right-6 top-6"
        href={route}
      >
        <Image
          alt="X icon"
          className="rounded-md"
          height={28}
          src="/x.svg"
          width={28}
        />
      </CoreLink>
      {/* scrollable image gallery */}
      <div className="max-w-screen-lg overflow-y-scroll">
        {images.map(({alt, height, id, url, width}, i) => (
          <Image
            key={id}
            priority={i === 0}
            src={url}
            {...{alt, height, width}}
          />
        ))}
      </div>
    </main>
  )
}
