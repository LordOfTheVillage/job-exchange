import { FC } from "react"
import Logo from "./Logo"
import Navigation from "./Navigation"

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  return (
    <>
      <Logo />
      <Navigation />
    </>
  )
}

export default Header
