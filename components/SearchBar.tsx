"use client"
import { FC, useMemo, useState } from "react"
import { usePathname, useSearchParams } from "next/navigation"
import Link from "next/link"
import useQueryString from "@hooks/useQueryString"
import { QUERY_NAMES } from "@utils/utils"

interface SearchBarProps {}

const SearchBar: FC<SearchBarProps> = () => {
  const searchParams = useSearchParams()
  const [value, setValue] = useState<string>(
    searchParams.get(QUERY_NAMES.SEARCH) || ""
  )
  const pathname = usePathname()
  const paramsObject = useMemo(() => [[QUERY_NAMES.SEARCH, value]], [value])
  const createQueryString = useQueryString(searchParams)

  return (
    <div>
      <input
        className="border-red-800 border-[1px]"
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Link href={pathname + createQueryString(paramsObject)}>Поиск</Link>
    </div>
  )
}

export default SearchBar
