import fetchPexelImages from "@/lib/fetch"
import ImgWrapper from "./ImgWrapper"
import getBurredDataUrls from "@/lib/base64Placeholder"

type UrlStr = {
    url: string
}

export default async function Gallery({ url = 'https://api.pexels.com/v1/curated' }: UrlStr) {
    const images = await fetchPexelImages(url)
    if (!images) return <div>Sorry, No Images Found.</div>

    const photos = await getBurredDataUrls(images)
    return (
        <section className="px-1 my-3 grid grid-cols-gallery auto-rows-auto">
            {
            photos.map(photo => (
                <ImgWrapper key={photo.id} image={photo}/>
            ))}
        </section>
    )
}
