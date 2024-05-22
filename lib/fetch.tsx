import { Images } from "@/types/Image"
import { PexelImageSchema } from "@/types/Image"
import getBurredDataUrls from "@/lib/base64Placeholder"
import env from "./env"

export default async function fetchPexelImages(url: string, page: number=1): Promise<Images | undefined> {

    try{
        const response = await fetch(`${url}?${page.toString()}`, {
            headers: {
                'Authorization': env.PEXEL_API_KEY
            },
            cache: 'force-cache'
        })
        if(!response.ok) throw new Error("Fetching Error Occurred!!!")

        const imagesResults: Images = await response.json()
        const images = PexelImageSchema.parse(imagesResults)
        images.photos = await getBurredDataUrls(images)

        if(images.total_results === 0) return undefined

        return JSON.parse(JSON.stringify(images))
    }catch(e){
        if (e instanceof Error) console.log(e.message)
    }
}
