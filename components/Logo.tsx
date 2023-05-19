"use client"
import { FC } from "react"
import Image from "next/image"
import { Text } from "@mantine/core"
import Link from "next/link"
import router from "@utils/router"

interface LogoProps {}

const Logo: FC<LogoProps> = () => {
  return (
    <Link href={router.main} className="flex justify-between items-center w-28">
      <Image width={30} height={30} src="assets/icons/logo.svg" alt="Logo" />
      <Text fz="xl" fw={600}>
        Jobored
      </Text>
    </Link>
  )
}

export default Logo
