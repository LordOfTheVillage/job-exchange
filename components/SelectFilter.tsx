"use client"
import { NamedType } from "@utils/types/types"
import { ChangeEvent, FC } from "react"

interface SelectFilterProps {
  list: NamedType[]
  onSelect: (value: string) => void
}

const SelectFilter: FC<SelectFilterProps> = ({ list, onSelect }) => {
  const handleSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value
    onSelect(value)
  }
  return (
    <select onChange={handleSelect}>
      <option value="">Без категории</option>
      {list.map((e, i) => (
        <option value={e.title} key={i}>
          {e.title}
        </option>
      ))}
    </select>
  )
}

export default SelectFilter
