"use client"
import useQueryString from "@hooks/useQueryString"
import { QUERY_NAMES } from "@utils/utils"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { FC, useMemo } from "react"
import ReactPaginate from "react-paginate"

interface PaginationPanelProps {
  pageCount: number
}

const PaginationPanel: FC<PaginationPanelProps> = ({ pageCount }) => {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const router = useRouter()
  const createQueryString = useQueryString(searchParams)
  const currentPage = useMemo(
    () => Number(searchParams.get(QUERY_NAMES.PAGE) || 0),
    [searchParams]
  )

  const handleClick = ({ selected }: { [key: string]: number }) => {
    const paramsObject = [[QUERY_NAMES.PAGE, selected]]
    router.replace(pathname + createQueryString(paramsObject))
  }

  return (
    <>
      <ReactPaginate
        previousLabel={"←"}
        nextLabel={"→"}
        pageCount={pageCount}
        onPageChange={handleClick}
        containerClassName={
          "flex justify-between gap-2 cursor-pointer list-none"
        }
        previousLinkClassName={
          "hover:text-indigo-500 text-indigo-400 rounded-md border-2 border-indigo-400 px-3 py-2 text-sm font-bold hover:border-indigo-500 mr-2"
        }
        nextLinkClassName={
          "hover:text-indigo-500 text-indigo-400 rounded-md border-2 border-indigo-400 px-3 py-2 text-sm font-bold hover:border-indigo-500  ml-2"
        }
        disabledClassName={""}
        activeClassName={""}
        activeLinkClassName="text-white bg-indigo-400 hover:bg-indigo-500 hover:text-white"
        pageLinkClassName="hover:text-indigo-500 text-indigo-400 rounded-md border-2 border-indigo-400 px-3 py-2 text-sm font-medium hover:border-indigo-500"
        forcePage={currentPage}
      />
    </>
  )
}

export default PaginationPanel
