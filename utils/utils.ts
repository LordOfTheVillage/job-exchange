import { VacancyType } from "./types/types"

export enum PAGE_CONFIG {
  MAX_ITEMS_LENGTH = 500,
  PAGE_SIZE = 20,
}

export enum QUERY_NAMES {
  PAGE = "page",
  SEARCH = "keyword",
  PAYMENT_FROM = "payment_from",
  PAYMENT_TO = "payment_to",
  CATALOGUES = "catalogues",
  IDS = "ids[]",
}

export enum PLACEHOLDERS {
  SEARCH = "Введите название вакансии",
  PAYMENT_FROM = "От",
  PAYMENT_TO = "До",
}

export const DEFAULT_CATEGORIES_PARAMS = {
  value: "",
  label: "Выберете отрасль",
}

export const DEFAULT_VACANCIES_PARAMS = {
  published: "1",
}

export const countPages = (total: number) => {
  return (
    (total < PAGE_CONFIG.MAX_ITEMS_LENGTH
      ? total
      : PAGE_CONFIG.MAX_ITEMS_LENGTH) / PAGE_CONFIG.PAGE_SIZE
  )
}

export const createPaymentText = ({
  payment_from,
  payment_to,
  currency,
}: VacancyType) => {
  let text = "з/п "
  if (payment_from === 0 && payment_to === 0) {
    text += "не указана"
  } else if (payment_from === 0) {
    text += `${payment_to} ${currency}`
  } else if (payment_to === 0) {
    text += `от ${payment_from} ${currency}`
  } else {
    text += `${payment_from} -  ${payment_to} ${currency}`
  }

  return text
}
