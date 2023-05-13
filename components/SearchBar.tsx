"use client"
import { FC, useCallback, useMemo, useState } from "react"
import { usePathname, useSearchParams } from "next/navigation"
import Link from "next/link"
import useQueryString from "@hooks/useQueryString"

interface SearchBarProps {
  defaultValue: string
}

const SearchBar: FC<SearchBarProps> = ({ defaultValue }) => {
  const [value, setValue] = useState<string>(defaultValue)
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const paramsObject = useMemo(() => [["keyword", value]], [value])
  const createQueryString = useQueryString(searchParams)

  return (
    <div>
      <input
        className="border-red-800 border-[1px]"
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Link href={pathname + "?" + createQueryString(paramsObject)}>Поиск</Link>
    </div>
  )
}

export default SearchBar
