import Image from "next/image"
import CoreLink from "../components/CoreLink"
import {loadAboutPageData} from "./functions"

export default async function AboutPage() {
  const {
    biography,
    image,
    quote1,
    quote2,
    quote3,
    quoteeImage,
    quoteeLink,
    quoteeName,
    quoteeRole,
    title,
  } = await loadAboutPageData()

  return (
    <main className="flex flex-col items-center justify-center gap-20 px-4">
      <h1 className="text-xl font-bold sm:text-2xl lg:text-3xl">{title}</h1>
      <div className="item-center flex justify-center gap-x-4 gap-y-20 max-lg:flex-col-reverse">
        <div className="relative flex flex-shrink flex-grow-0 items-center justify-center">
          <Image
            alt={image.alt}
            className="object-contain"
            height={288.8}
            priority
            src={image.url}
            width={384}
          />
        </div>
        <div className="flex max-w-screen-sm flex-col gap-4 px-4">
          {biography
            .split(/\r|\n/)
            .filter(Boolean)
            .map((paragraph, i) => (
              <p dangerouslySetInnerHTML={{__html: paragraph}} key={i} />
            ))}
        </div>
      </div>
      <div className="max-w-screen-sm max-md:px-4">
        <div>
          <span className="-ml-6 text-7xl">“</span>
          <p className="-mt-12">
            <span className="text-xl font-bold sm:text-3xl">{quote1}</span>
            <span>&nbsp;{quote2}&nbsp;</span>
            <span className="text-xl font-bold sm:text-2xl">{quote3}</span>
          </p>
          <span className="flex justify-end text-7xl sm:-mt-8">”</span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <Image
            alt={quoteeImage.alt}
            className="mb-2 h-20 w-20 rounded-full"
            height={quoteeImage.height}
            src={quoteeImage.url}
            width={quoteeImage.width}
          />
          <CoreLink className="underline" href={quoteeLink}>
            {quoteeName}
          </CoreLink>
          <p className="text-sm">{quoteeRole}</p>
        </div>
      </div>
    </main>
  )
}
