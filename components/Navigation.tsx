import { Flex, Text } from "@mantine/core"
import { LinksType } from "@utils/types/types"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { FC } from "react"

interface NavigationProps {
  links: LinksType[]
}

const Navigation: FC<NavigationProps> = ({ links }) => {
  const pathname = usePathname()
  return (
    <Flex justify="space-between" gap={60}>
      {links.map((link, i) => {
        const isActive = pathname === link.path
        return (
          <Link href={link.path} key={i}>
            <Text
              color={isActive ? "#5E96FC" : "#232134"}
              className={` hover:text-blue-500`}
            >
              {link.title}
            </Text>
          </Link>
        )
      })}
    </Flex>
  )
}

export default Navigation
