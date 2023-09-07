import {Metadata} from "next"
import Image from "next/image"
import CoreLink from "../components/CoreLink"
import Layout from "../components/Layout"
import {loadAboutPageData} from "./functions"

export const metadata: Metadata = {
  title: "About Me | Andrea Alcala Vasquez",
}

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
    <Layout>
      <main className="flex flex-col items-center justify-center gap-20 px-4">
        <h1 className="text-xl font-bold sm:text-2xl lg:text-3xl">{title}</h1>
        <div className="flex max-w-screen-lg items-center justify-center gap-x-4 gap-y-20 max-lg:flex-col-reverse lg:px-4">
          <Image
            alt={image.alt}
            className="w-96 object-contain"
            height={image.height}
            priority
            src={image.url}
            width={image.width}
          />
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
    </Layout>
  )
}
