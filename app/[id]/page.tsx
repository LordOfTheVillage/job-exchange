import api from "@api/api"

const Page = async (context: any) => {
  const id = context.params.id
  const vacancy = await api.getVacancy(id)
  return (
    <div>
      Hello, {vacancy.firm_name}{" "}
      <div>
        <div>{vacancy.vacancyRichText}</div>
      </div>
    </div>
  )
}

export default Page
