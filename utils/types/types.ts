export interface VacancyType {
  id: number
  profession: string
  firm_name: string
  payment_to: number
  payment_from: number
  currency: string
  type_of_work: {
    title: string
  }
  town: {
    title: string
  }
}

export interface VacancyListType {
  objects: VacancyType[]
  total: number
}
