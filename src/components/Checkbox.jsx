import React from "react"
import { FormControlLabel, FormGroup, Checkbox as CheckboxMui } from "@mui/material"

const Checkbox = (props) => {
  const { onChange, title, name, disabled } = props
  return (
    <FormGroup>
      <FormControlLabel
        disabled={disabled}
        onChange={onChange ? (e) => onChange(e) : ""}
        control={<CheckboxMui />}
        name={name}
        label={title}
      />
    </FormGroup>
  )
}

export default Checkbox
