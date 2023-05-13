import "@styles/global.css"
import api from "@api/api"
import VacanciesList from "@components/VacanciesList"
import SearchBar from "@components/SearchBar"
import { QueryParams } from "@utils/types/types"
import Filters from "@components/Filters"
import PaginationPanel from "@components/PaginationPanel"
import { countPages } from "@utils/utils"

const Page = async ({ searchParams }: { [key: string]: QueryParams }) => {
  const vacancies = await api.getVacancies(searchParams)
  const catalogues = await api.getCatalogues()
  return (
    <div className=" text-red-500">
      <SearchBar />
      <Filters catalogues={catalogues}>
        <div className="flex flex-col">
          <PaginationPanel pageCount={countPages(vacancies.total)} />
          <VacanciesList list={vacancies.objects} />
        </div>
      </Filters>
    </div>
  )
}

export default Page
