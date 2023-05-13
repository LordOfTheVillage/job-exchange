"use client"
import { FC, useState, ChangeEvent } from "react"

interface NumberInputProps {
  onChange: (number: number) => void
  defaultValue: number | undefined
}

const NumberInput: FC<NumberInputProps> = ({ onChange, defaultValue }) => {
  const [value, setValue] = useState(defaultValue)

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(e.target.value)
    if (newValue >= 0) {
      setValue(newValue)
      if (onChange) {
        onChange(newValue)
      }
    }
  }

  return (
    <input
      type="number"
      onChange={handleInputChange}
      value={value}
    />
  )
}

export default NumberInput
