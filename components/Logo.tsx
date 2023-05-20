"use client"
import { FC } from "react"
import Image from "next/image"
import { Title } from "@mantine/core"
import Link from "next/link"
import router from "@utils/router"

interface LogoProps {}

const Logo: FC<LogoProps> = () => {
  return (
    <Link
      href={router.main}
      className="flex justify-between items-center w-28 gap-3"
    >
      <Image width={30} height={30} src="assets/icons/logo.svg" alt="Logo" />
      <Title order={2}>Jobored</Title>
    </Link>
  )
}

export default Logo
