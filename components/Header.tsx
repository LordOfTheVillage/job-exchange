"use client"
import { FC } from "react"
import Logo from "./Logo"
import Navigation from "./Navigation"
import { Flex } from "@mantine/core"
import router from "@utils/router"
import { LinksType } from "@utils/types/types"

interface HeaderProps {}

const NAVIGATION_LINKS: LinksType[] = [
  {
    title: "Поиск вакансий",
    path: router.main,
  },
  {
    title: "Избранное",
    path: router.favorites,
  },
]

const Header: FC<HeaderProps> = () => {
  return (
    <Flex align={"center"} gap={350} className="h-20 bg-white px-40 mb-10">
      <Logo />
      <Navigation links={NAVIGATION_LINKS} />
    </Flex>
  )
}

export default Header
