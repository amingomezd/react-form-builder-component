import React from "react"
import { FormGroup, Typography } from "@mui/material"

const Paragraph = (props) => {
  const { title, description } = props
  return (
    <FormGroup>
      <Typography variant="h5">{title}</Typography>
      <Typography>{description}</Typography>
    </FormGroup>
  )
}

export default Paragraph
