import "@styles/global.css"
import api from "@api/api"
import VacanciesList from "@components/VacanciesList"
import SearchBar from "@components/SearchBar"
import { QueryParams } from "@utils/types/types"
import Filters from "@components/Filters"

const Page = async ({ searchParams }: { [key: string]: QueryParams }) => {
  const vacancies = await api.getVacancies(searchParams)
  const catalogues = await api.getCatalogues()
  return (
    <div className=" text-red-500">
      <SearchBar defaultValue={`${searchParams["keyword"] || ""}`} />
      <Filters catalogues={catalogues}>
        <VacanciesList list={vacancies.objects} />
      </Filters>
    </div>
  )
}

export default Page
