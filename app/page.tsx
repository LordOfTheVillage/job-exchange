import "@styles/global.css"
import api from "@api/api"
import VacanciesList from "@components/VacanciesList"
import SearchBar from "@components/SearchBar"
import { QueryParams } from "@utils/types/types"
import Filters from "@components/Filters"

const Page = async ({ searchParams }: any) => {
  const vacancies = await api.getVacancies(searchParams as QueryParams)
  const catalogues = await api.getCatalogues()
  return (
    <div className=" text-red-500">
      <h1>Hello, {searchParams["keyword"]}</h1>
      <SearchBar />
      <Filters catalogues={catalogues}>
        <VacanciesList list={vacancies.objects} />
      </Filters>
    </div>
  )
}

export default Page
