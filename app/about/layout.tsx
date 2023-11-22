import {Metadata} from "next"
import {loadAboutPageData} from "./functions"

/**
 * Generates metadata for the about page
 */
export async function generateMetadata() {
  const {image, title} = await loadAboutPageData()
  const metadata: Metadata = {
    description: "Brief biography of Andrea Alcala Vasquez",
    openGraph: {
      images: [image],
    },
    title,
  }
  return metadata
}

export default function AboutLayout({children}: {children: React.ReactNode}) {
  return children
}
