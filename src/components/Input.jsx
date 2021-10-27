import React from "react"
import { TextField } from "@mui/material"

const Input = (props) => {
  const { onChange, title, name, autofocus, value, required, disabled } = props
  return (
    <TextField
      label={title}
      name={name}
      autoFocus={autofocus}
      required={required}
      onChange={onChange ? (e) => onChange(e) : ""}
      value={value}
      disabled={disabled}
    />
  )
}

export default Input
