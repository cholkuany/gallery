import fetchPexelImages from "@/lib/fetch"
import ImgWrapper from "./ImgWrapper"
import getBurredDataUrls from "@/lib/base64Placeholder"
import { Images } from "@/types/Image"


// export default async function Gallery({ url }: UrlStr) {
export default async function Gallery({ images }: {images: Images}) {
    // const images = await fetchPexelImages(url)
    // if (!images) return <div>Sorry, No Images Found.</div>

    // const photos = await getBurredDataUrls(images)

    return (
        <section className="px-1 my-3 grid grid-cols-gallery auto-rows-auto">
            {
            images.photos.map(photo => (
                <ImgWrapper key={photo.id} image={photo}/>
            ))}
        </section>
    )
}
