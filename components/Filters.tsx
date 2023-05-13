"use client"
import { FC, ReactNode, useCallback, useState } from "react"
import SelectFilter from "./SelectFilter"
import RangeFilter from "./RangeFilter"
import { CataloguesType } from "@utils/types/types"
import { usePathname, useSearchParams } from "next/navigation"
import Link from "next/link"

interface FiltersProps {
  children: ReactNode
  catalogues: CataloguesType[]
}

const Filters: FC<FiltersProps> = ({ children, catalogues }) => {
  const [selected, setSelected] = useState("")
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
    <div className="flex">
      <div className="flex flex-col">
        <SelectFilter
          list={catalogues}
          onSelect={(value: string) => setSelected(value)}
        />
        <RangeFilter />
        <Link href={pathname + "?" + createQueryString("catalogues", selected)}>
          Применить
        </Link>
      </div>
      {children}
    </div>
  )
}

export default Filters
