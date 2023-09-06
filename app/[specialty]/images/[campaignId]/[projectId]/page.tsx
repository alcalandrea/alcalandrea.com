import {isSpecialty} from "@/app/[specialty]/functions"
import CoreLink from "@/app/components/CoreLink"
import HandleKeyup from "@/app/components/HandleKeyup"
import Image from "next/image"
import {redirect} from "next/navigation"
import {loadCampaignProjectImages} from "./functions"

export default async function InboundMarketingImagePage({
  params: {campaignId, projectId, specialty},
}: {
  params: {
    campaignId: string
    projectId: string
    specialty: string
  }
}) {
  if (!isSpecialty(specialty)) {
    redirect("/")
  }

  const images = await loadCampaignProjectImages({
    campaignId,
    projectId,
    specialty,
  })

  if (images.length === 0) {
    redirect(`/${specialty}`)
  }

  const route = `/${specialty}#${projectId}`

  return (
    <main className="flex h-screen w-screen justify-center bg-gray-100">
      <HandleKeyup keyName="Escape" {...{route}} />
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
