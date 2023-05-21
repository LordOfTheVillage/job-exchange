"use client"
import { Skeleton } from "@mantine/core"
import { FC } from "react"

interface LoadingProps {}

const Loading: FC<LoadingProps> = () => {
  return (
    <div className="flex gap-7">
      <Skeleton width={315} height={360} radius={12} />
      <div className="flex flex-col gap-3">
        <Skeleton width={773} height={48} radius={8} />
        {new Array(20).fill("").map((e, i) => (
          <Skeleton key={i} width={773} height={137} radius={12} />
        ))}
      </div>
    </div>
  )
}

export default Loading
