import api from "@api/api"
import VacanciesList from "@components/VacanciesList"
import SearchBar from "@components/SearchBar"
import { QueryParams, ServerFC } from "@utils/types/types"
import Filters from "@components/Filters"
import PaginationPanel from "@components/PaginationPanel"
import { countPages } from "@utils/utils"
interface PageProps {
  searchParams: QueryParams
}

const Page: ServerFC<PageProps> = async ({ searchParams }) => {
  const vacancies = await api.getVacancies(searchParams)
  const catalogues = await api.getCatalogues()
  return (
    <div className="flex gap-7">
      <Filters catalogues={catalogues} />
      <div className="flex flex-col gap-3">
        <SearchBar />
        <VacanciesList list={vacancies.objects} />
        <PaginationPanel pageCount={countPages(vacancies.total)} />
      </div>
    </div>
  )
}

export default Page
