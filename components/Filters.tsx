"use client"
import { FC, useMemo, useState } from "react"
import SelectFilter from "./SelectFilter"
import RangeFilter from "./RangeFilter"
import { CataloguesType, RangeType } from "@utils/types/types"
import { usePathname, useSearchParams } from "next/navigation"
import Link from "next/link"
import useQueryString from "@hooks/useQueryString"
import { QUERY_NAMES } from "@utils/utils"
import { Flex, Button, Text } from "@mantine/core"
import { IconX } from "@tabler/icons-react"

interface FiltersProps {
  catalogues: CataloguesType[]
}

const Filters: FC<FiltersProps> = ({ catalogues }) => {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const createQueryString = useQueryString(searchParams)
  const defaultSelected = useMemo(
    () => searchParams.get(QUERY_NAMES.CATALOGUES) || "",
    [searchParams]
  )
  const defaultRange = useMemo(
    () => ({
      min: Number(searchParams.get(QUERY_NAMES.PAYMENT_FROM)) || undefined,
      max: Number(searchParams.get(QUERY_NAMES.PAYMENT_TO)) || undefined,
    }),
    [searchParams]
  )
  const [selected, setSelected] = useState(defaultSelected)
  const [range, setRange] = useState<RangeType>(defaultRange)

  const paramsObject = useMemo(
    () => [
      [QUERY_NAMES.PAYMENT_FROM, range.min],
      [QUERY_NAMES.PAYMENT_TO, range.max],
      [QUERY_NAMES.CATALOGUES, selected],
    ],
    [range.max, range.min, selected]
  )

  return (
    <Flex
      className="bg-white rounded-xl"
      p={20}
      gap={32}
      w={315}
      h={370}
      style={{ border: "1px solid #EAEBED" }}
      direction="column"
    >
      <Flex justify="space-between" align="center">
        <Text weight={700} size={20}>
          Фильтры
        </Text>
        <Link href={pathname}>
          <Text size={14} color="#ACADB9" className="flex items-center">
            Сбросить все <IconX size="0.8rem" className="ml-1" />
          </Text>
        </Link>
      </Flex>
      <Flex direction="column" gap={20}>
        <SelectFilter
          list={catalogues}
          onSelect={(value: string) => setSelected(value)}
          defaultValue={defaultSelected}
          title="Отрасли"
        />
        <RangeFilter
          onChange={setRange}
          defaultRange={defaultRange}
          title="Оклад"
        />
        <Link
          data-elem="search-button"
          href={pathname + createQueryString(paramsObject)}
        >
          <Button radius={8} fullWidth>
            Применить
          </Button>
        </Link>
      </Flex>
    </Flex>
  )
}

export default Filters
