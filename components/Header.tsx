"use client"
import { FC } from "react"
import Logo from "./Logo"
import Navigation from "./Navigation"
import { Grid } from "@mantine/core"

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  return (
    <Grid align="center" className="h-20 bg-white">
      <Grid.Col offset={1.5} span={3}>
        <Logo />
      </Grid.Col>
      <Grid.Col span={3}>
        <Navigation />
      </Grid.Col>
    </Grid>
  )
}

export default Header
