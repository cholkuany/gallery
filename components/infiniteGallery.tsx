'use client'

import { useEffect, useState } from 'react'
import ImgWrapper from "./ImgWrapper"
import { Images, Photo } from '@/types/Image'
import fetchPhotos from '@/app/actions/fetch'
import { useInView } from "react-intersection-observer";

export default function InfiniteGallery({ images, url }: {images: Images, url: string}) {
    const [stateImages, setStateImages] = useState(images)
    const [statePhotos, setStatePhotos] = useState(images.photos)
    const [page, setPage] = useState(1)

    const { ref, inView, entry } = useInView();

    const handleMore = async () => {
        setPage((prevPages) => (prevPages + 1))
        const moreImages = await fetchPhotos(`${url}?page=${page.toString()}`)
        if (!moreImages) return <div>Sorry, No Images Found.</div>

        setStatePhotos((prevPhotos) => [...prevPhotos, ...moreImages.photos])

    }

    useEffect(() => {
        if(images.total_results > stateImages.photos.length){
            handleMore()
        }
    }, [inView])

    return (
        <>
            <section className="px-1 my-3 grid grid-cols-gallery auto-rows-auto">
                {
                statePhotos.map(photo => (
                    <ImgWrapper key={photo.id} image={photo}/>
                ))}
            </section>
            {images.total_results >= stateImages.photos.length && <div ref={ref}><p>Loading...</p></div>}
        </>
    )
}