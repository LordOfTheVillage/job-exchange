import { VacancyType } from "@utils/types/types"
import Link from "next/link"
import { FC } from "react"
interface VacancyItemProps {
  item: VacancyType
  onClick: (item: VacancyType) => void
  status: boolean
}

const VacancyItem: FC<VacancyItemProps> = ({ item, onClick, status }) => {
  return (
    <>
      <Link href={`${item.id}`}>{item.firm_name}</Link>
      <div>{item.profession}</div>
      <div>
        {item.payment_from} - {item.payment_to}
      </div>
      <button onClick={() => onClick(item)}>{status ? "Remove" : "Add"}</button>
    </>
  )
}

export default VacancyItem
