import { Photo } from "@/types/Image"
import Image from "next/image"
import Link from "next/link"

type Props = {
    image: Photo
}
export default function ImgWrapper({image}: Props) {

  const heightToWidthRatio = image.height / image.width
  const galleryHeight = Math.ceil(heightToWidthRatio * 250)
  const imageSpan = Math.ceil(galleryHeight / 10 ) + 1

  return (
    <div className="w-auto justify-self-center m-1" style={{ gridRow: `span ${imageSpan}`}}>
        <Link href={image.url} target="_blank" className="grid place-content-center">
          <div className="rounded-sm overflow-hidden group">
            <Image 
              width={image.width}
              height={image.height}
              src={image.src.large}
              sizes="250px"
              alt={image.alt}
              placeholder="blur"
              blurDataURL={image.blurredDataUrl}
              className="group-hover:opacity-85"
            />
          </div>
        </Link>
    </div>

  )
}
