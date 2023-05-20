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

export const createPaymentText = (vacancy: VacancyType) => {
  let text = "з/п "
  if (vacancy.payment_from === 0) {
    text += vacancy.payment_to
  } else if (vacancy.payment_to === 0) {
    text += `от ${vacancy.payment_from}`
  } else {
    text += `${vacancy.payment_from} -  ${vacancy.payment_to}`
  }

  return `${text} ${vacancy.currency}`
}
