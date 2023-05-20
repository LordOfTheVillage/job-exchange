"use client"
import { FC } from "react"
import Logo from "./Logo"
import Navigation from "./Navigation"
import { Grid, Flex } from "@mantine/core"

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  return (
    <Flex align={"center"} gap={350} className="h-20 bg-white px-40 mb-10">
      <Logo />
      <Navigation />
    </Flex>
  )
}

export default Header
