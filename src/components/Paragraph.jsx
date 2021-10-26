import React from "react"
import { Typography } from "@mui/material"

const Paragraph = (props) => {
  const { title, description } = props
  return (
    <div>
      <Typography variant="h5">{title}</Typography>
      <Typography>{description}</Typography>
    </div>
  )
}

export default Paragraph
