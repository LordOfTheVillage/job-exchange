import { Title, Flex, Button } from "@mantine/core"
import router from "@utils/router"
import Image from "next/image"
import Link from "next/link"
import { FC } from "react"

interface NoItemsProps {}

const NoItems: FC<NoItemsProps> = () => {
  return (
    <Flex direction={"column"} align={"center"} gap={32}>
      <Image
        width={240}
        height={230}
        src="assets/images/noItems.svg"
        alt="no items"
      />
      <Title order={2} color="#343A40">
        Упс, здесь ещё ничего нет
      </Title>
      <Link href={router.main}>
        <Button variant="light" radius="md">
          Поиск вакансий
        </Button>
      </Link>
    </Flex>
  )
}

export default NoItems
