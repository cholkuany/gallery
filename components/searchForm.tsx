'use client'

import { FormEvent, useState } from "react"
import { useRouter } from "next/navigation"

export default function SearchForm() {
  const [search, setSearch ] = useState('')
  const router = useRouter()

  function handleSubmit(e: FormEvent<HTMLFormElement>){
      e.preventDefault()
      router.push(`/search/${search}`)
      setSearch('')

  }
  return (
    <form className="flex justify-center md:justify-between" onSubmit={handleSubmit}>
        <input 
            type="text"
            value={search}
            placeholder="Search"
            onChange={e => setSearch(e.target.value)}
            className="p-2 w-[260px] sm:w-80 text-xl rounded-sm text-black border-solid border-2"
        />
    </form>
  )
}
