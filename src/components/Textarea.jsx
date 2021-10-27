import React from "react"
import { fromBuilderStub } from "./helper"
import { TextField } from "@mui/material"

const Input = (props) => {
  const { onChange, title, name, autofocus, required } = props
  return (
    <TextField
      autoFocus={autofocus}
      label={title}
      multiline
      required={required}
      minRows={4}
      maxRows={4}
      name={name}
      onChange={onChange ? (e) => onChange(e) : ""}
    />
  )
}

export default Input
