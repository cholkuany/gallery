'use server'
import fetchPexelImages from "@/lib/fetch"

type ActPhotos = {
    url: string,
    page: number
}
export default async function fetchPhotos(url: string, page: number = 1){
    const images = await fetchPexelImages(url, page)
    return images
}