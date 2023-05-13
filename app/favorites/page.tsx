"use client"
import VacanciesList from "@components/VacanciesList"
import storage from "@utils/localStorage"
import { VacancyType } from "@utils/types/types"
import { useState } from "react"

const Page = () => {
  const [vacancies, setVacancies] = useState(
    storage.getVacancies()
  )

  const handleSetFavorite = (item: VacancyType) => {
    storage.toggleVacancy(item)
    setVacancies(storage.getVacancies())
  }

  return (
    <div>
      <VacanciesList list={vacancies} onClick={handleSetFavorite} />
    </div>
  )
}

export default Page
