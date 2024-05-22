import Gallery from "@/components/gallery"
import InfiniteGallery from "@/components/infiniteGallery"
import fetchPhotos from "@/app/actions/fetch"

type Props = {
    params: {
        query: string,
        page: string
    }
}
export function generateMetadata({ params: { query, page } }: Props) {
    return {
        title: `Results for ${query}`
    }
}

export default async function page({params: { query }}: Props) {
  // const url = `https://api.pexels.com/v1/search?query=${query}`
  // return (
  //   <Gallery url={url} />
  // )
  const url = `https://api.pexels.com/v1/search?query=${query}`
  const images = await fetchPhotos(`https://api.pexels.com/v1/search?query=${query}`)
  if(!images) return <div>No photos found</div>
  return (
    // <Gallery images={images} />
    <InfiniteGallery images={images} url={url} />
  )
}
