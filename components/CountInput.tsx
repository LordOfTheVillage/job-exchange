"use client"
import { FC, useState } from "react"
import { NumberInput } from "@mantine/core"

interface CountInputProps {
  onChange: (number: number) => void
  defaultValue: number | undefined
  placeholder: string
}

const CountInput: FC<CountInputProps> = ({
  onChange,
  defaultValue,
  placeholder,
}) => {
  const [value, setValue] = useState(defaultValue)

  const handleInputChange = (value: number) => {
    setValue(value)
    if (onChange) {
      onChange(value)
    }
  }

  return (
    <NumberInput
      onChange={handleInputChange}
      placeholder={placeholder}
      value={value}
      min={0}
      radius={8}
      styles={{
        control: { border: "none", color: "#ACADB9" },
        controlDown: { marginTop: 0 },
      }}
    />
  )
}

export default CountInput
