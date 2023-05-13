"use client"
import { FC, useCallback, useState } from "react"
import { usePathname, useSearchParams } from "next/navigation"
import Link from "next/link"

interface SearchBarProps {}

const SearchBar: FC<SearchBarProps> = () => {
  const [value, setValue] = useState<string>("")
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString())
      if (value) {
        params.set(name, value)
      } else {
        params.delete(name)
      }
      return params.toString()
    },
    [searchParams]
  )

  return (
    <div>
      <input
        className="border-red-800 border-[1px]"
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Link href={pathname + "?" + createQueryString("keyword", value)}>
        Поиск
      </Link>
    </div>
  )
}

export default SearchBar
