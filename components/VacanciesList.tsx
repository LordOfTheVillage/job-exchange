"use client"
import { VacancyType } from "@utils/types/types"
import { FC, useMemo, useState } from "react"
import VacancyItem from "./VacancyItem"
import storage from "@utils/localStorage"

interface VacanciesListProps {
  list: VacancyType[]
  onClick?: (item: VacancyType) => void
}

const VacanciesList: FC<VacanciesListProps> = ({ list, onClick }) => {
  const [favoriteVacancies, setFavoriteVacancies] = useState(
    storage.getVacancies()
  )

  const handleSetFavorite = (item: VacancyType) => {
    storage.toggleVacancy(item)
    setFavoriteVacancies(storage.getVacancies())
  }

  return (
    <div className="flex flex-col">
      {list.map((item, i) => (
        <VacancyItem
          key={i}
          item={item}
          onClick={onClick || handleSetFavorite}
          status={!!favoriteVacancies.find((v) => v.id === item.id)}
        />
      ))}
    </div>
  )
}

export default VacanciesList
