"use client"
import { FC } from "react"
import { Flex, Skeleton } from "@mantine/core"

interface LoaderProps {}

const Loading: FC<LoaderProps> = () => {
  return (
    <Flex direction={"column"} gap={20}>
      <Skeleton width={773} height={137} radius={12} />
      <Skeleton width={773} height={400} radius={12} />
    </Flex>
  )
}

export default Loading
