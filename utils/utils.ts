export enum PAGE_CONFIG {
  MAX_ITEMS_LENGTH = 500,
  PAGE_SIZE = 20,
}

export enum QUERY_NAMES {
  PAGE = "page",
  SEARCH = "keyword",
  PAYMENT_FROM = "payment_from",
  PAYMENT_TO = "payment_from",
  CATALOGUES = "catalogues",
  IDS = "ids[]",
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
