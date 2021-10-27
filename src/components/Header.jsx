import React from "react"
import { Typography } from "@mui/material"

const Header = (props) => {
  const { title, description, type } = props
  const types = ["h1", "h2", "h3", "h4", "h5", "h6"]
  const HeaderTag = types.includes(type) ? `${type}` : "h1"

  return <Typography variant={HeaderTag}>{title}</Typography>
}

export default Header
