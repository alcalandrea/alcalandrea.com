import {isSpecialty} from "@/app/[specialty]/functions"
import CoreLink from "@/app/components/CoreLink"
import NavigateOnKeyup from "@/app/components/NavigateOnKeyup"
import Image from "next/image"
import {redirect} from "next/navigation"
import {loadCampaignProjectImages} from "./functions"

/**
 * Displays all images from a campaign project in a scrollable gallery
 */
export default async function InboundMarketingImagePage({
  params: {campaignId, projectId, specialty},
}: {
  params: {
    campaignId: string
    projectId: string
    specialty: string
  }
}) {
  /* redirect home if the specialty is invalid */
  if (!isSpecialty(specialty)) {
    redirect("/")
  }

  /* load all images which match the specialty, campaign, and project */
  const images = await loadCampaignProjectImages({
    campaignId,
    projectId,
    specialty,
  })

  /* redirect to the specialty page if there are no images */
  if (images.length === 0) {
    redirect(`/${specialty}`)
  }

  /* this is the route we will use for closing the page, which
  shows the specialty page with this first image at the top */
  const route = `/${specialty}#${projectId}`

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
