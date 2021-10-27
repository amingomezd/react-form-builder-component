import React, { useState } from "react"
import Input from "./Input"
import Select from "./Select"
import Checkbox from "./Checkbox"
import Textarea from "./Textarea"
import Radio from "./Radio"
import Paragraph from "./Paragraph"
import Header from "./Header"
import { Box, Button, Divider, Stack, Typography } from "@mui/material"

const Form = (props) => {
  const { properties, required, ui, description, title, onsubmit, values, disabled } = props
  const [requiredFields, setRequiredFields] = useState(required ? required : [])
  const [form, setFormState] = useState(values ? values : {})

  const render = (property, key, pid) => {
    property.name = key
    const widget = ui[key] && ui[key].widget ? ui[key].widget : key === "hr" ? "hr" : "input"
    switch (widget) {
      case "input":
        return (
          <Input
            disabled={disabled}
            key={key + pid}
            value={form?.[key]}
            required={requiredFields.includes(key)}
            {...property}
            {...ui[key]}
            onChange={handleInputChange}
          />
        )
      case "select":
        return (
          <Select
            disabled={disabled}
            key={key + pid}
            {...property}
            {...ui[key]}
            required={requiredFields.includes(key)}
            onChange={handleInputChange}
          />
        )
      case "radio":
        return (
          <Radio
            disabled={disabled}
            key={key + pid}
            {...property}
            {...ui[key]}
            required={requiredFields.includes(key)}
            onChange={handleInputChange}
          />
        )
      case "checkbox":
        return (
          <Checkbox
            disabled={disabled}
            key={key + pid}
            {...property}
            {...ui[key]}
            required={requiredFields.includes(key)}
            onChange={handleInputChange}
          />
        )
      case "textarea":
        return (
          <Textarea
            disabled={disabled}
            key={key + pid}
            {...property}
            {...ui[key]}
            required={requiredFields.includes(key)}
            onChange={handleInputChange}
          />
        )
      case "paragraph":
        return <Paragraph key={key + pid} {...property} {...ui[key]} />
      case "header":
        return <Header key={key + pid} {...property} {...ui[key]} />
      case "hr":
        return <hr key={key + pid} />
    }
  }

  const handleInputChange = (event) => {
    const { target } = event
    const { name, type } = target
    const value = type === "checkbox" ? target.checked : target.value
    event.persist()
    setFormState({ ...form, [name]: value })
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    onsubmit && onsubmit(form)
  }

  return (
    <form onSubmit={(e) => handleFormSubmit(e)}>
      <Stack spacing={2}>
        <Box>
          <Typography variant="h4">{title}</Typography>
          <Typography>{description}</Typography>
        </Box>
        <Divider />
        {properties &&
          Object.keys(properties).map((key, pid) => {
            return properties[key] && render(properties[key], key, pid)
          })}
        <Box>
          <Button type="submit" variant="contained" disabled={disabled}>
            Submit
          </Button>
        </Box>
      </Stack>
    </form>
  )
}

export default Form
