import { z } from "zod"

const PhotoSchema = z.object(
    {
        id: z.number(),
        height: z.number(),
        width: z.number(),
        url: z.string(),
        src: z.object({
            large: z.string()
        }),
        alt: z.string(),
        blurredDataUrl: z.string().optional()
    }
)
const ImageSchema = z.object(
  {
  total_results: z.number(),
  page: z.number(),
  per_page: z.number(),
  next_page: z.string().optional(),
  prev_page: z.string().optional()
}
)

export const PexelImageSchema = ImageSchema.extend({
    photos: z.array(PhotoSchema)
})
export type Images = z.infer<typeof PexelImageSchema>
export type Photo = z.infer<typeof PhotoSchema>

