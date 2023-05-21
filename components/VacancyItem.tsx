"use client"
import { VacancyType } from "@utils/types/types"
import Link from "next/link"
import { FC } from "react"
import { Flex, Title, Text } from "@mantine/core"
import {
  IconMapPin,
  IconPointFilled,
  IconStar,
  IconStarFilled,
} from "@tabler/icons-react"
import { createPaymentText } from "@utils/utils"
interface VacancyItemProps {
  item: VacancyType
  onClick: (item: VacancyType) => void
  status: boolean
  linked?: boolean
}

const VacancyItem: FC<VacancyItemProps> = ({
  item,
  onClick,
  status,
  linked = true,
}) => {
  return (
    <Flex
      bg={"white"}
      align={"start"}
      justify={"space-between"}
      className="rounded-xl p-6 border-gray-200 border"
      style={{ minWidth: "773px" }}
    >
      <Flex gap={12} direction={"column"}>
        {linked ? (
          <Link href={`${item.id}`}>
            <Title color="blue" className="hover:cursor-pointer" order={4}>
              {item.profession}
            </Title>
          </Link>
        ) : (
          <Title order={3}>{item.profession}</Title>
        )}
        <Flex align={"center"} gap={12}>
          <Title order={5}>{createPaymentText(item)}</Title>
          <IconPointFilled className="text-gray-600" size={15} />
          <Text>{item.type_of_work.title}</Text>
        </Flex>
        <Flex align={"center"} gap={8}>
          <IconMapPin color="#ACADB9" />
          {item.town.title}
        </Flex>
      </Flex>
      <button onClick={() => onClick(item)}>
        {status ? (
          <IconStarFilled className="text-blue-500" />
        ) : (
          <IconStar color="#ACADB9" />
        )}
      </button>
    </Flex>
  )
}

export default VacancyItem
