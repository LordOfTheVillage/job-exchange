import api from "@api/api"
import VacancyItem from "@components/VacancyItem"
import VacancyPage from "@components/VacancyPage"
import { ServerFC } from "@utils/types/types"

interface PageProps {
  params: {
    id: string
  }
}

const Page: ServerFC<PageProps> = async (context) => {
  const id = context.params.id
  const vacancy = await api.getVacancy(id)
  return <VacancyPage vacancy={vacancy} />
}

export default Page
