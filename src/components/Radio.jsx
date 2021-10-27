import React, { Fragment } from "react"
import { fromBuilderStub } from "./helper"
import { FormControl, FormControlLabel, FormLabel, RadioGroup, Radio as RadioMui } from "@mui/material"

const Radio = (props) => {
  const { onChange, title, name, autofocus, options, required, disabled } = props

  const render = (p, idx) => {
    return (
      <FormControlLabel
        id={p.id}
        key={p.id}
        name={name}
        value={p.value}
        control={<RadioMui />}
        label={p.label}
        required={required}
        disabled={disabled}
        autoFocus={autofocus}
        onChange={onChange ? (e) => onChange(e) : ""}
      />
    )
  }
  return (
    <FormControl component="fieldset">
      <RadioGroup>
        <FormLabel component="legend">{title}</FormLabel>
        {options &&
          options.map((option, idx) => {
            if (typeof option === "object" && option !== null) {
              const keys = Object.keys(option)
              const o = { id: name + option[keys[0]], label: option[keys[0]], value: keys[0] }
              return render(o, idx)
            } else if (typeof option === "string" || typeof option === "number") {
              const o = { id: name + option, label: option, value: option }
              return render(o, idx)
            }
          })}
      </RadioGroup>
    </FormControl>
  )
}

export default Radio
