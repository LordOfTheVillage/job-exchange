import api from "@api/api"
import { ServerFC } from "@utils/types/types"
import parse from "html-react-parser"

interface PageProps {
  params: {
    id: string
  }
}

const Page: ServerFC<PageProps> = async (context) => {
  const id = context.params.id
  const vacancy = await api.getVacancy(id)
  return (
    <div>
      Hello, {vacancy.firm_name}{" "}
      <div>
        <div>{parse(vacancy.vacancyRichText)}</div>
      </div>
    </div>
  )
}

export default Page
