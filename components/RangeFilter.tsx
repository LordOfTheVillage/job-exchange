"use client"
import { FC, useEffect, useState } from "react"
import NumberInput from "./NumberInput"
import { RangeType } from "@utils/types/types"

interface RangeFilterProps {
  onChange: (range: RangeType) => void
  defaultRange: RangeType
}

const RangeFilter: FC<RangeFilterProps> = ({ onChange, defaultRange }) => {
  const [min, setMin] = useState<number>()
  const [max, setMax] = useState<number>()

  useEffect(() => {
    onChange({ min, max })
  }, [min, max, onChange])

  return (
    <>
      <NumberInput onChange={setMin} defaultValue={defaultRange.min} />
      <NumberInput onChange={setMax} defaultValue={defaultRange.max} />
    </>
  )
}

export default RangeFilter
