import CoreLink from "@/app/components/CoreLink"
import HandleKeyup from "@/app/components/HandleKeyup"
import Image from "next/image"
import {redirect} from "next/navigation"
import {loadInboundProjectImages} from "./functions"

export default async function InboundMarketingImagePage({
  params: {projectId},
}: {
  params: {projectId: string}
}) {
  const images = await loadInboundProjectImages(projectId)
  if (images.length === 0) {
    redirect("/inbound-marketing")
  }

  const route = `/inbound-marketing#${projectId}`

  return (
    <div className="absolute left-0 top-0 flex h-screen w-screen justify-center bg-gray-100">
      <HandleKeyup keyName="Escape" {...{route}} />
      <CoreLink
        aria-label="Close scrollable image gallery"
        className="absolute right-4 top-5"
        href={route}
      >
        <Image
          alt="X icon"
          className="rounded-md"
          height={32}
          src="/x.svg"
          width={32}
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
    </div>
  )
}
