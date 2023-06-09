"use client"
import useQueryString from "@hooks/useQueryString"
import storage from "@utils/localStorage"
import { QUERY_NAMES, countPages } from "@utils/utils"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { FC, useEffect, useState } from "react"
import PaginationPanel from "./PaginationPanel"
import VacanciesList from "./VacanciesList"
import { VacancyListType, VacancyType } from "@utils/types/types"
import { Flex } from "@mantine/core"
import NoItems from "./NoItems"

interface FavoriteListProps {
  vacancies: VacancyListType
}

const FavoriteList: FC<FavoriteListProps> = ({ vacancies }) => {
  const pathname = usePathname()
  const router = useRouter()
  const searchParams = useSearchParams()
  const createQueryString = useQueryString(searchParams)
  const [list, setList] = useState(vacancies.objects)
  const [total, setTotal] = useState(vacancies.total)
  const [favoriteVacancies, setFavoriteVacancies] = useState(
    storage.getVacancies()
  )

  useEffect(() => {
    const string = createQueryString([[QUERY_NAMES.IDS, favoriteVacancies]])
    router.replace(pathname + string)
  }, [pathname, favoriteVacancies])

  useEffect(() => {
    setList(vacancies.objects)
    setTotal(vacancies.total)
  }, [vacancies])

  const handleOnClick = (item: VacancyType) => {
    storage.toggleVacancy(item.id)
    setFavoriteVacancies(storage.getVacancies())
    setList(list.filter((elem) => elem.id !== item.id))
    setTotal(total - 1)
  }

  return (
    <Flex direction={"column"}>
      {list.length ? (
        <>
          <VacanciesList list={list} onClick={handleOnClick} />
          <PaginationPanel pageCount={countPages(total)} />
        </>
      ) : (
        <NoItems />
      )}
    </Flex>
  )
}

export default FavoriteList
