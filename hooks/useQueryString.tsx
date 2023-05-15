import { QUERY_NAMES } from "@utils/utils"
import { ReadonlyURLSearchParams } from "next/navigation"
import { useCallback } from "react"

const useQueryString = (searchParams: ReadonlyURLSearchParams) => {
  return useCallback(
    (paramsObject: (string | number | undefined | number[])[][]) => {
      const params = new URLSearchParams(searchParams.toString())
      params.delete(QUERY_NAMES.PAGE)
      paramsObject.forEach(([name, value]) => {
        if (Array.isArray(value)) {
          params.delete(`${name}`)
          value.forEach((v) => params.append(`${name}`, `${v}`))
        } else if (value) {
          params.set(`${name}`, `${value}`)
        } else {
          params.delete(`${name}`)
        }
      })
      return "?" + params.toString()
    },
    [searchParams]
  )
}

export default useQueryString
