export interface NamedType {
  title: string
}

export type ListedType = CataloguesType

export interface CataloguesType extends NamedType {
  key: number
}

export interface VacancyType {
  id: number
  profession: string
  firm_name: string
  payment_to: number
  payment_from: number
  currency: string
  vacancyRichText: string
  type_of_work: NamedType
  town: NamedType
}

export interface VacancyListType {
  objects: VacancyType[]
  total: number
}

export interface LinksType {
  title: string
  path: string
}

export interface QueryParams {
  [key: string]: string | number | boolean | string[]
}

export interface RangeType {
  min: number | undefined
  max: number | undefined
}

export type ServerFC<P = {}> = (props: P) => Promise<JSX.Element>
