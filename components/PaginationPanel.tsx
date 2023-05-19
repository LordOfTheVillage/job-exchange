"use client"
import useQueryString from "@hooks/useQueryString"
import { QUERY_NAMES } from "@utils/utils"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { FC, useMemo } from "react"
import { Pagination } from "@mantine/core"

interface PaginationPanelProps {
  pageCount: number
}

const PaginationPanel: FC<PaginationPanelProps> = ({ pageCount }) => {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const router = useRouter()
  const createQueryString = useQueryString(searchParams)
  const currentPage = useMemo(
    () => Number(searchParams.get(QUERY_NAMES.PAGE) || 0) + 1,
    [searchParams]
  )

  const handleClick = (selected: number) => {
    const paramsObject = [[QUERY_NAMES.PAGE, selected - 1]]
    router.replace(pathname + createQueryString(paramsObject))
  }

  return (
    <Pagination
      total={pageCount + 1}
      defaultChecked={true}
      value={currentPage}
      onChange={handleClick}
    />
  )
}

export default PaginationPanel
