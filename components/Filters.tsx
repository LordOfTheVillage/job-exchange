"use client"
import { FC, ReactNode, useCallback, useMemo, useState } from "react"
import SelectFilter from "./SelectFilter"
import RangeFilter from "./RangeFilter"
import { CataloguesType, RangeType } from "@utils/types/types"
import { usePathname, useSearchParams } from "next/navigation"
import Link from "next/link"
import useQueryString from "@hooks/useQueryString"

interface FiltersProps {
  children: ReactNode
  catalogues: CataloguesType[]
}

const Filters: FC<FiltersProps> = ({ children, catalogues }) => {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const createQueryString = useQueryString(searchParams)
  const defaultSelected = useMemo(
    () => searchParams.get("catalogues") || "",
    [searchParams]
  )
  const defaultRange = useMemo(
    () => ({
      min: Number(searchParams.get("payment_from")) || undefined,
      max: Number(searchParams.get("payment_to")) || undefined,
    }),
    [searchParams]
  )
  const [selected, setSelected] = useState(defaultSelected)
  const [range, setRange] = useState<RangeType>(defaultRange)

  const paramsObject = useMemo(
    () => [
      ["payment_from", range.min],
      ["payment_to", range.max],
      ["catalogues", selected],
    ],
    [range.max, range.min, selected]
  )

  return (
    <div className="flex">
      <div className="flex flex-col">
        <SelectFilter
          list={catalogues}
          onSelect={(value: string) => setSelected(value)}
          defaultValue={defaultSelected}
        />
        <RangeFilter onChange={setRange} defaultRange={defaultRange} />
        <Link href={pathname + "?" + createQueryString(paramsObject)}>
          Применить
        </Link>
      </div>
      {children}
    </div>
  )
}

export default Filters
