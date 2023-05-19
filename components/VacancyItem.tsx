"use client"
import { VacancyType } from "@utils/types/types"
import Link from "next/link"
import { FC } from "react"
import { Container, Flex, Title } from "@mantine/core"
interface VacancyItemProps {
  item: VacancyType
  onClick: (item: VacancyType) => void
  status: boolean
}

const VacancyItem: FC<VacancyItemProps> = ({ item, onClick, status }) => {
  return (
    <Flex>
      <div>
        <Link href={`${item.id}`}>
          <Title order={4}>{item.profession}</Title>
        </Link>
        <div>
          <span>
            {item.payment_from} - {item.payment_to}
          </span>
          {" * "}
          <span>{item.type_of_work.title}</span>
        </div>
        <div>{item.town.title}</div>
      </div>
      <button onClick={() => onClick(item)}>{status ? "Remove" : "Add"}</button>
    </Flex>
  )
}

export default VacancyItem
