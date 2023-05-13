"use client"
import { CataloguesType } from "@utils/types/types"
import { ChangeEvent, FC } from "react"

interface SelectFilterProps {
  list: CataloguesType[]
  onSelect: (value: string) => void
  defaultValue: string
}

const SelectFilter: FC<SelectFilterProps> = ({
  list,
  onSelect,
  defaultValue,
}) => {
  const handleSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value
    onSelect(value)
  }
  return (
    <select defaultValue={defaultValue} onChange={handleSelect}>
      <option value="">Без категории</option>
      {list.map((e, i) => (
        <option value={e.key} key={i}>
          {e.title}
        </option>
      ))}
    </select>
  )
}

export default SelectFilter
