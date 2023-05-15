import api from "@api/api"
import FavoriteList from "@components/FavoriteList"
import PaginationPanel from "@components/PaginationPanel"
import VacanciesList from "@components/VacanciesList"
import { QueryParams } from "@utils/types/types"
import { QUERY_NAMES, countPages } from "@utils/utils"
import { Suspense } from "react"

const Page = async ({ searchParams }: { [key: string]: QueryParams }) => {
  if (!searchParams[QUERY_NAMES.IDS]) searchParams[QUERY_NAMES.IDS] = [""]
  const vacancies = await api.getVacancies(searchParams)
  return <FavoriteList vacancies={vacancies} />
}

export default Page
