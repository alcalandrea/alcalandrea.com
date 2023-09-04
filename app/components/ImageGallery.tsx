"use client"
import Image from "next/image"
import React from "react"
import {useKeyup} from "../hooks"
import {DatoImage} from "../models"

export default function ImageGallery({images}: {images: Array<DatoImage>}) {
  const [expanded, setExpanded] = React.useState(false)
  useKeyup("Escape", () => setExpanded(false))

  const [{alt, height, id, url, width}] = images

  if (expanded) {
    return (
      <div className="fixed left-0 top-0 z-10 flex h-screen w-screen justify-center bg-gray-100">
        <Image
          alt="X"
          aria-label="Close scrollable image gallery"
          className="fixed right-4 top-5 cursor-pointer rounded-md"
          height={30}
          onClick={() => setExpanded(false)}
          role="button"
          src="/x.svg"
          width={30}
        />
        <div className="max-w-screen-lg overflow-y-scroll">
          {images.map(({alt, height, id, url, width}, i) => (
            <Image
              key={id}
              priority={i < 2}
              src={url}
              {...{alt, height, width}}
            />
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="relative bg-gray-100 sm:p-10">
      <Image
        alt="Arrows"
        aria-label="View scrollable image gallery"
        className="absolute right-2 top-2 cursor-pointer rounded-md transition-transform hover:scale-110"
        height={26}
        onClick={() => setExpanded(true)}
        role="button"
        src="/arrows.svg"
        width={26}
      />
      <Image key={id} src={url} {...{alt, height, width}} />
    </div>
  )
}
