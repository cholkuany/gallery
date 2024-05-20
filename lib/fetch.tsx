import { Images } from "@/types/Image"
import { PexelImageSchema } from "@/types/Image"
import env from "./env"

export default async function fetchPexelImages(url: string): Promise<Images | undefined> {
    try{
        const response = await fetch(url, {
        headers: {
            'Authorization': env.PEXEL_API_KEY
        },
        cache: 'force-cache'
    })
    if(!response.ok) throw new Error("Fetching Error Occurred!!!")

    const imagesResults: Images = await response.json()
    const images = PexelImageSchema.parse(imagesResults)

    if(images.total_results === 0) return undefined

    return images
    }catch(e){
        if (e instanceof Error) console.log(e.message)
    }
}
