"use client"
import { FC, useMemo, useState } from "react"
import { usePathname, useSearchParams } from "next/navigation"
import Link from "next/link"
import useQueryString from "@hooks/useQueryString"
import { PLACEHOLDERS, QUERY_NAMES } from "@utils/utils"
import { ActionIcon, Button, StarIcon, TextInput } from "@mantine/core"

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
    <TextInput
      icon={<StarIcon />}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder={PLACEHOLDERS.SEARCH}
      rightSectionWidth={80}
      size="md"
      rightSection={
        <Link href={pathname + createQueryString(paramsObject)}>
          <Button radius="md" size="xs">
            Поиск
          </Button>
        </Link>
      }
    />
  )
}

export default SearchBar
