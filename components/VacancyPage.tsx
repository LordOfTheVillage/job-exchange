"use client"
import { Flex } from "@mantine/core"
import { VacancyType } from "@utils/types/types"
import parse from "html-react-parser"
import { FC, useState } from "react"
import VacancyItem from "./VacancyItem"
import storage from "@utils/localStorage"

interface VacancyPageProps {
  vacancy: VacancyType
}

const VacancyPage: FC<VacancyPageProps> = ({ vacancy }) => {
  const [favoriteVacancies, setFavoriteVacancies] = useState(
    storage.getVacancies()
  )

  const handleSetFavorite = (item: VacancyType) => {
    storage.toggleVacancy(item.id)
    setFavoriteVacancies(storage.getVacancies())
  }

  return (
    <Flex direction={"column"} gap={20}>
      <VacancyItem
        item={vacancy}
        onClick={handleSetFavorite}
        status={favoriteVacancies.includes(vacancy.id)}
        linked={false}
      />
      <Flex
        direction={"column"}
        style={{
          borderRadius: "12px",
          width: "773px",
          border: "1px solid #EAEBED",
          padding: "24px",
          backgroundColor: "white",
        }}
      >
        {parse(vacancy.vacancyRichText)}
      </Flex>
    </Flex>
  )
}

export default VacancyPage
