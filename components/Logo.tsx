import { FC } from "react"
import Image from "next/image"

interface LogoProps {}

const Logo: FC<LogoProps> = () => {
  return (
    <div className="flex items-center">
      <Image width={30} height={30} src="assets/icons/logo.svg" alt="Logo" />
      <p className=" text-2xl font-semibold">Jobored</p>
    </div>
  )
}

export default Logo
