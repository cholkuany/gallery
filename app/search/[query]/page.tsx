import Gallery from "@/components/gallery"

type Props = {
    params: {
        query: string
    }
}
export function generateMetadata({ params: { query } }: Props) {
    return {
        title: `Results for ${query}`
    }
}

export default async function page({params: { query }}: Props) {
  const url = `https://api.pexels.com/v1/search?query=${query}`
  return (
    <Gallery url={url} />
  )
}
