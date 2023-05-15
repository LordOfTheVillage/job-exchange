import {
  CataloguesType,
  QueryParams,
  VacancyListType,
  VacancyType,
} from "@utils/types/types"
import { DEFAULT_VACANCIES_PARAMS } from "@utils/utils"

enum URLS {
  vacancies = "/vacancies",
  catalogues = "/catalogues",
}

class API {
  private BASE_URL = "https://startup-summer-2023-proxy.onrender.com/2.0"
  private async fetch(url: string) {
    return await fetch(`${this.BASE_URL}${url}`, {
      headers: {
        "x-secret-key": "GEU4nvd3rej*jeh.eqp",
        "X-Api-App-Id":
          "v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948",
        Authentication:
          "Bearer v3.r.137440105.1a8a191c01e690d0716da8ebb8631cfbccdc7a57.c206df7a823f0208ed2d960dc423a123bba71daf",
      },
    })
  }

  private createQueryString = (params: QueryParams) => {
    const paramsString = Object.keys(params)
    if (!paramsString.length) return ""
    const queryString = paramsString
      .map((key) => {
        const value = params[key]
        if (Array.isArray(value)) {
          return value.map((v) => `${key}=${v}`).join("&")
        } else {
          return `${key}=${value}`
        }
      })
      .join("&")
    return `?${queryString}`
  }

  public async getVacancies(params: QueryParams = {}) {
    const searchParams = { ...params, ...DEFAULT_VACANCIES_PARAMS }
    const response = await this.fetch(
      URLS.vacancies + this.createQueryString(searchParams)
    )
    return (await response.json()) as VacancyListType
  }

  public async getCatalogues(params: QueryParams = {}) {
    const response = await this.fetch(
      URLS.catalogues + this.createQueryString(params)
    )
    return (await response.json()) as CataloguesType[]
  }

  public async getVacancy(id: string) {
    const response = await this.fetch(`${URLS.vacancies}/${id}`)
    return (await response.json()) as VacancyType
  }
}

const api = new API()
export default api
