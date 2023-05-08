import { VacancyType } from "@utils/types/types"
import Link from "next/link"
import { FC } from "react"

interface VacanciesListProps {
  list: VacancyType[]
}

const VacanciesList: FC<VacanciesListProps> = ({ list }) => {
  return (
    <div className="flex flex-col">
      {list.map((item, i) => (
        <Link href={`${item.id}`} key={i}>
          {item.firm_name}
        </Link>
      ))}
    </div>
  )
}

export default VacanciesList
