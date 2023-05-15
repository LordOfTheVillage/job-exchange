import api from "@api/api"
import FavoriteList from "@components/FavoriteList"
import { QueryParams, ServerFC } from "@utils/types/types"
import { QUERY_NAMES } from "@utils/utils"

interface PageProps {
  searchParams: QueryParams
}

const Page: ServerFC<PageProps> = async ({ searchParams }) => {
  if (!searchParams[QUERY_NAMES.IDS]) searchParams[QUERY_NAMES.IDS] = [""]
  const vacancies = await api.getVacancies(searchParams)
  return <FavoriteList vacancies={vacancies} />
}

export default Page
