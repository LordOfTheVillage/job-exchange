enum StorageKeys {
  VACANCIES = "vacancies",
}

class LocalStorage {
  public toggleVacancy(vacancyId: number) {
    const vacancies = this.getVacancies()
    const index = vacancies.indexOf(vacancyId)

    if (index !== -1) {
      vacancies.splice(index, 1)
    } else {
      vacancies.push(vacancyId)
    }

    localStorage.setItem(StorageKeys.VACANCIES, JSON.stringify(vacancies))
  }

  public getVacancies(): number[] {
    const storageString = localStorage.getItem(StorageKeys.VACANCIES)
    return storageString ? JSON.parse(storageString) : []
  }
}

const storage = new LocalStorage()
export default storage
