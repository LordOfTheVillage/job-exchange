import { VacancyType } from "./types/types"

enum StorageKeys {
  VACANCIES = "vacancies",
}

class LocalStorage {
  public toggleVacancy(vacancy: VacancyType) {
    const vacancies = this.getVacancies()
    const index = vacancies.findIndex((v) => v.id === vacancy.id)

    if (index !== -1) {
      vacancies.splice(index, 1)
    } else {
      vacancies.push(vacancy)
    }

    localStorage.setItem(StorageKeys.VACANCIES, JSON.stringify(vacancies))
  }

  public getVacancies(): VacancyType[] {
    const storageString = localStorage.getItem(StorageKeys.VACANCIES)
    return storageString ? JSON.parse(storageString) : []
  }
}

const storage = new LocalStorage()
export default storage
