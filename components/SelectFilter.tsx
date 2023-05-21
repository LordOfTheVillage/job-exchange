"use client"
import { CataloguesType } from "@utils/types/types"
import { ChangeEvent, FC } from "react"
import { Text, NativeSelect, Flex } from "@mantine/core"
import { IconChevronDown } from "@tabler/icons-react"
import { DEFAULT_CATEGORIES_PARAMS } from "@utils/utils"

interface SelectFilterProps {
  list: CataloguesType[]
  onSelect: (value: string) => void
  defaultValue: string
  title: string
}

const SelectFilter: FC<SelectFilterProps> = ({
  list,
  onSelect,
  defaultValue,
  title,
}) => {
  const handleSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value
    onSelect(value)
  }
  return (
    <Flex direction="column" gap={8}>
      <Text size={16} weight={700}>
        {title}
      </Text>
      <NativeSelect
        data={[
          DEFAULT_CATEGORIES_PARAMS,
          ...list.map((e) => ({ value: `${e.key}`, label: e.title })),
        ]}
        rightSection={<IconChevronDown size="1rem" color="#ACADB9" />}
        rightSectionWidth={40}
        radius={8}
        onChange={handleSelect}
        defaultValue={defaultValue}
        data-elem="industry-select"
      />
    </Flex>
  )
}

export default SelectFilter
