import "@styles/global.css"
import api from "@api/api"
import VacanciesList from "@components/VacanciesList"

const Page = async () => {
  const vacancies = await api.getVacancies()
  return (
    <div className=" text-red-500">
      Hello, {vacancies.objects.length}
      <VacanciesList list={vacancies.objects} />
    </div>
  )
}

export default Page
