export interface NamedType {
  title: string
}

export interface CataloguesType extends NamedType {}

export interface VacancyType {
  id: number
  profession: string
  firm_name: string
  payment_to: number
  payment_from: number
  currency: string
  type_of_work: NamedType
  town: NamedType
}

export interface VacancyListType {
  objects: VacancyType[]
  total: number
}

export interface QueryParams {
  [key: string]: string | number | boolean
}
