"use client"
import { FC } from "react"
import { Flex, Skeleton } from "@mantine/core"

interface LoaderProps {}

const Loading: FC<LoaderProps> = () => {
  return (
    <Flex direction={"column"} gap={20}>
      {" "}
      {new Array(10).fill("").map((i) => (
        <Skeleton key={i} width={773} height={137} radius={12} />
      ))}
    </Flex>
  )
}

export default Loading
