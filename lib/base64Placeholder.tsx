import { getPlaiceholder } from "plaiceholder";
import { Images, Photo } from "@/types/Image";

async function base64Image(url: string) {
    try {
    const res = await fetch(url)

    if (!res.ok) {
            throw new Error(`Failed to fetch image: ${res.status} ${res.statusText}`)
    }

    const bufferedArray = await res.arrayBuffer()
    const buffer = Buffer.from(bufferedArray)
    const { base64 } = await getPlaiceholder(buffer);
    //   const { metadata } = await getPlaiceholder(buffer);
    return base64
    } catch (err) {
        if (err instanceof Error) console.log(err.stack)
    }
}

export default async function getBurredDataUrls(images: Images){
    const base64Promises = images.photos.map(photo =>base64Image(photo.src.large))
    const base64Resolved = await Promise.all(base64Promises)

    const imageswithBlurredUrl = images.photos.map((photo, index) => {
        photo.blurredDataUrl = base64Resolved[index]
        return photo
    })

    return imageswithBlurredUrl

}