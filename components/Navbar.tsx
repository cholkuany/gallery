import Link from "next/link"
import SearchForm from "./searchForm"

export default function Navbar() {
  return (
    <header className="bg-white sticky top-0 z-10">
        <nav className="flex flex-col gap-4 sm:flex-row sm:justify-between items-center p-4 font-bold max-w-6xl mx-auto text-black">
            <Link href={'/'}>
                <h1 className="text-2xl sm:text-3xl text-center whitespace-nowrap">
                    Pexel Gallery
                </h1>
            </Link>
            <SearchForm />
        </nav>
    </header>
  )
}
