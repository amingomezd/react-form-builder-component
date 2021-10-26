import React, { useEffect, useState } from "react"
import { fromBuilderStub } from "./helper"
import { v4 as uuidv4 } from "uuid"
import {
  Box,
  Button,
  Divider,
  FormControl,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  TextField,
  Typography,
} from "@mui/material"
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline"
import DeleteIcon from "@mui/icons-material/Delete"

const Builder = (props) => {
  const { onSave, onChange, formState, propertyName } = props
  const [showCode, setShowCode] = useState(false)
  const [form, setFormState] = useState(formState ? formState : fromBuilderStub.formStub)
  const [addProperty, setAddProperty] = useState(false)
  const [editProperty, setEditProperty] = useState()

  useEffect(() => {
    onChange && onChange(form)
  }, [form])

  const handleChangeFormInput = (event) => {
    const { target } = event
    const { name, type } = target
    const value = type === "checkbox" ? target.checked : target.value
    event.persist()
    setFormState({ ...form, [name]: value })
  }

  const handleChangeFormCode = (e) => {
    const { target } = e
    const { value } = target
    setFormState(JSON.parse(value))
  }

  const removeProperty = (key) => {
    if (!window.confirm(`Remove this property "${form.properties[key].title}" ?`)) return
    const f = { ...form }
    delete f.properties[key]
    setFormState(f)
  }

  const handlePropertyUpdate = (payload) => {
    const ftemp = { ...form }
    const { name, title, description, widget, type, className, autofocus, required, options } = payload
    const optionstemp = mapOptions(options)
    let key = "hello"
    if (name) key = name
    ftemp.properties[key] = {
      title,
      description,
      type,
      options: optionstemp,
    }
    ftemp.ui[key] = {
      className,
      widget,
      autofocus,
    }
    required && !ftemp.required.includes(key) && ftemp.required.push(key)
    setFormState(ftemp)
  }

  const mapOptions = (payload) => {
    let t = payload && typeof payload === "string" ? payload.split(/\r?\n/) : []
    if (t.length > 0) {
      return t.map((x) => {
        const y = x.includes(":", 1) && x.split(":")
        if (y) {
          const z = {}
          z[y[0]] = y[1]
          return z
        }
        return x
      })
    }
    return t
  }

  const toggleEdit = (key) => {
    if (editProperty && editProperty === key) setEditProperty(null)
    else setEditProperty(key)
    setAddProperty(false)
  }

  const toggleAdd = (state) => {
    setAddProperty(state)
    setEditProperty(null)
  }

  return (
    <Stack spacing={2}>
      <Stack spacing={2}>
        <TextField label="Form Title" name="title" onChange={handleChangeFormInput} value={form.title} />
        <TextField
          label="description"
          name="description"
          placeholder="Minimum 3 rows"
          multiline
          rows={3}
          onChange={handleChangeFormInput}
          value={form.description}
        />
      </Stack>
      <Divider />
      <Stack spacing={2}>
        <Typography variant="h5">Properties</Typography>
        <Box sx={{ display: "flex", height: "100%" }} justifyContent="center">
          <Button
            variant={addProperty ? "text" : "outlined"}
            onClick={() => toggleAdd(!addProperty)}
            endIcon={<AddCircleOutlineIcon />}
          >
            Add Property
          </Button>
        </Box>
        {addProperty && (
          <Box component="span" sx={{ p: 2, border: "1px dashed grey", borderRadius: "5px" }}>
            <PropertyForm onPropertySubmit={handlePropertyUpdate} name={uuidv4()} />
          </Box>
        )}
      </Stack>

      <List>
        {Object.keys(form.properties).map((key, idx) => {
          return (
            <>
              <ListItem
                key={key + idx}
                disablePadding
                secondaryAction={
                  <IconButton aria-label="delete" onClick={() => removeProperty(key)}>
                    <DeleteIcon />
                  </IconButton>
                }
              >
                <ListItemButton onClick={() => toggleEdit(key)}>
                  <ListItemText>
                    {form.properties[key].title} {editProperty === key ? "- Edit" : ""}
                  </ListItemText>
                </ListItemButton>
              </ListItem>
              {editProperty === key && (
                <PropertyForm
                  onPropertySubmit={handlePropertyUpdate}
                  name={key}
                  property={form.properties[key]}
                  required={form.required}
                  ui={form.ui[key]}
                />
              )}
            </>
          )
        })}
      </List>
      <Button variant="contained" onClick={(e) => onSave(e)}>
        Save Form
      </Button>
    </Stack>
  )
}

const PropertyForm = (props) => {
  const { name, property, ui, onPropertySubmit, required } = props
  const temp = property ? { ...property } : { ...fromBuilderStub.propertyStub }
  Object.assign(temp, ui ? ui : fromBuilderStub.uiStub)
  if (!temp.name) temp.name = name
  temp.required = required ? required.includes(name) : false
  const [form, setFormState] = useState(temp)
  const [formO, setFormOState] = useState(temp)

  const handleChangeFormInput = (event) => {
    const { target } = event
    const { name, type } = target
    const value = type === "checkbox" ? target.checked : target.value
    event.persist()
    setFormState({ ...form, [name]: value })
  }
  useEffect(() => {
    onPropertySubmit(form)
  }, [form])

  const discardChanges = () => {
    setFormState(formO)
  }

  const handleOptions = (t) => {
    if (typeof t === "string") return t
    if (t.length > 0)
      return t
        .map((u) => {
          if (typeof u === "object" && u !== null) {
            return Object.keys(u).map((k) => {
              return k + ":" + u[k]
            })
          } else if (typeof u === "string" || typeof u === "number") return u
        })
        .join("\n")
    return ""
  }

  return (
    <div className="border p-3 bg-white rounded">
      <div className={`${fromBuilderStub.inputWrapperClass}`}>
        <label>Widget</label>
        <select
          className={`${fromBuilderStub.inputClass}`}
          value={form?.widget}
          name="widget"
          onChange={handleChangeFormInput}
        >
          {fromBuilderStub.widgets.map((widget, idx) => {
            let widgetName = Object.values(widget).toString()
            let widgetType = Object.keys(widget).toString()
            return (
              <option key={widgetType + idx} value={widgetType}>
                {widgetName}
              </option>
            )
          })}
        </select>
      </div>
      <div className="form-row">
        <div className={`${fromBuilderStub.inputWrapperClass} col`}>
          <label>Title</label>
          <input
            type="text"
            value={form?.title}
            name="title"
            onChange={handleChangeFormInput}
            className={`${fromBuilderStub.inputClass}`}
          />
        </div>
        <div className={`${fromBuilderStub.inputWrapperClass} col`}>
          <label>Type</label>
          <input
            type="text"
            value={form?.type}
            name="type"
            onChange={handleChangeFormInput}
            className={`${fromBuilderStub.inputClass}`}
          />
        </div>
      </div>
      <div className={`form-row ${fromBuilderStub.inputWrapperClass}`}>
        <div className="col">
          <div className={`${fromBuilderStub.checkboxWrapperClass}`}>
            <input
              type="checkbox"
              name="required"
              checked={form?.required}
              onChange={handleChangeFormInput}
              className={`${fromBuilderStub.checkboxClass}`}
              id="required"
            />
            <label className="form-check-label" htmlFor="required">
              Required
            </label>
          </div>
        </div>
        <div className="col">
          <div className={`${fromBuilderStub.checkboxWrapperClass}`}>
            <input
              type="checkbox"
              name="autofocus"
              checked={form?.autofocus}
              onChange={handleChangeFormInput}
              className={`${fromBuilderStub.checkboxClass}`}
              id="autofocus"
            />
            <label className="form-check-label" htmlFor="autofocus">
              Autofocus
            </label>
          </div>
        </div>
      </div>
      <div className={`${fromBuilderStub.inputWrapperClass}`}>
        <label>Class Name</label>
        <input
          type="text"
          value={form?.className}
          onChange={handleChangeFormInput}
          name="className"
          className={`${fromBuilderStub.inputClass}`}
        />
      </div>
      <div className={`${fromBuilderStub.inputWrapperClass}`}>
        <label>
          Options <small>(Add options separated by new line)</small>
        </label>
        <textarea
          className={`${fromBuilderStub.inputClass}`}
          name="options"
          onChange={handleChangeFormInput}
          value={form.options ? handleOptions(form.options) : ""}
        />
      </div>
      <div className={`${fromBuilderStub.inputWrapperClass}`}>
        <label>Description</label>
        <textarea
          className={`${fromBuilderStub.inputClass}`}
          name="description"
          onChange={handleChangeFormInput}
          value={form.description ? form.description : ""}
        />
      </div>

      <button
        type="button"
        className={`${fromBuilderStub.btnClass} btn-outline-warning btn-sm`}
        onClick={() => discardChanges()}
      >
        <i className="fa fa-history" /> Discard Changes
      </button>
    </div>
  )
}

export default Builder
