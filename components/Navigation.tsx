import { Flex, Text } from "@mantine/core"
import router from "@utils/router"
import Link from "next/link"
import { FC } from "react"

interface NavigationProps {}

const NAVIGATION_LINKS = [
  {
    title: "Поиск вакансий",
    path: router.main,
  },
  {
    title: "Избранное",
    path: router.favorites,
  },
]

const Navigation: FC<NavigationProps> = () => {
  return (
    <Flex justify="space-between">
      {NAVIGATION_LINKS.map((link, i) => (
        <Link href={link.path} key={i}>
          <Text className="hover:text-blue-500">{link.title}</Text>
        </Link>
      ))}
    </Flex>
  )
}

export default Navigation
