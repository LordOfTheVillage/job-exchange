"use client"
import { FC, useEffect, useState } from "react"
import CountInput from "./CountInput"
import { RangeType } from "@utils/types/types"
import { Text, Flex } from "@mantine/core"
import { PLACEHOLDERS } from "@utils/utils"

interface RangeFilterProps {
  onChange: (range: RangeType) => void
  defaultRange: RangeType
  title: string
}

const RangeFilter: FC<RangeFilterProps> = ({
  onChange,
  defaultRange,
  title,
}) => {
  const [min, setMin] = useState<number>()
  const [max, setMax] = useState<number>()

  useEffect(() => {
    onChange({ min, max })
  }, [min, max, onChange])

  return (
    <Flex direction="column" gap={8}>
      <Text size={16} weight={700}>
        {title}
      </Text>
      <CountInput
        onChange={setMin}
        defaultValue={defaultRange.min}
        placeholder={PLACEHOLDERS.PAYMENT_FROM}
      />
      <CountInput
        onChange={setMax}
        defaultValue={defaultRange.max}
        placeholder={PLACEHOLDERS.PAYMENT_TO}
      />
    </Flex>
  )
}

export default RangeFilter
