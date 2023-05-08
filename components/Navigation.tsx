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
    <>
      {NAVIGATION_LINKS.map((link, i) => (
        <Link href={link.path} key={i}>
          {link.title}
        </Link>
      ))}
    </>
  )
}

export default Navigation
