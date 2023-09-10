import {Metadata} from "next"
import {getCampaigns, getSpecialtyTitle, isSpecialty} from "./functions"
import {SpecialtyProps} from "./types"

/**
 * Generates metadata which corresponds to the specialty
 */
export async function generateMetadata({params: {specialty}}: SpecialtyProps) {
  if (isSpecialty(specialty)) {
    const title = getSpecialtyTitle(specialty)
    const campaigns = await getCampaigns(specialty)
    const metadata: Metadata = {
      description: `${title} campaigns led by Andrea Alcala Vasquez, including ${campaigns[0].title}`,
      keywords: [title, ...campaigns.map(c => c.title)],
      openGraph: {
        images: campaigns[0].projects.find(p => p.images.length > 0)?.images[0],
      },
      title,
    }
    return metadata
  }
}

export default function SpecialtyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
