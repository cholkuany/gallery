import Gallery from "@/components/gallery";
import fetchPhotos from "./actions/fetch";
import InfiniteGallery from "@/components/infiniteGallery";

export default async function Home() {
  const images = await fetchPhotos('https://api.pexels.com/v1/curated')
  if(!images) return <div>No Images</div>
  return (
    // <Gallery url='https://api.pexels.com/v1/curated' />
    // <Gallery images={images} />
    <InfiniteGallery images={images} url='https://api.pexels.com/v1/curated' />
    // <ImageGallery />
  );
}
