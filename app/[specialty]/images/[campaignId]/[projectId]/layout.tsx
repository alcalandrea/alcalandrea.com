import {getSpecialtyTitle, isSpecialty} from "@/app/[specialty]/functions"
import {Metadata} from "next"
import {loadCampaignProjectImages} from "./functions"
import {CampaignProjectImagesProps} from "./types"

/**
 * Generates metadata which corresponds to the images
 * from the selected specialty, campaign, and project
 */
export async function generateMetadata({params}: CampaignProjectImagesProps) {
  const {campaignId, projectId, specialty} = await params

  if (isSpecialty(specialty)) {
    const images = await loadCampaignProjectImages({
      campaignId,
      projectId,
      specialty,
    })
    /* valid image galleries contain at least two images */
    if (images.length > 1) {
      const metadata: Metadata = {
        description: `${images[0].alt} from ${getSpecialtyTitle(specialty)}`,
        openGraph: {
          images: [images[0]],
        },
      }
      return metadata
    }
  }
}

export default function CampaignProjectImagesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
