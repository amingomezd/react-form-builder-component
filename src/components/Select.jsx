import React from "react"
import { InputLabel, Select as SelectMui, MenuItem, FormControl } from "@mui/material"

const Select = (props) => {
  const { onChange, title, name, autofocus, options, required, disabled } = props
  return (
    <FormControl>
      <InputLabel>{title}</InputLabel>
      <SelectMui
        autoFocus={autofocus ? "autofocus" : false}
        value=""
        required={required}
        name={title}
        label={title}
        onChange={!disabled ? (e) => onChange(e) : null}
      >
        {options &&
          options.map((option, idx) => {
            if (typeof option === "object" && option !== null) {
              const keys = Object.keys(option)
              return (
                <MenuItem value={keys[0]} key={idx}>
                  {option[keys[0]]}
                </MenuItem>
              )
            } else if (typeof option === "string" || typeof option === "number")
              return (
                <MenuItem key={idx} value={option}>
                  {option}
                </MenuItem>
              )
          })}
      </SelectMui>
    </FormControl>
  )
}

export default Select
