import React, { Fragment, useEffect, useState } from "react"
import { fromBuilderStub } from "./helper"
import {
  Box,
  Button,
  Collapse,
  Divider,
  FormControl,
  IconButton,
  InputLabel,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Select as SelectMui,
  Stack,
  TextField,
  Typography,
} from "@mui/material"
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline"
import DeleteIcon from "@mui/icons-material/Delete"
import CancelIcon from "@mui/icons-material/Cancel"
import { RemoveCircleOutline } from "@mui/icons-material"
import EditIcon from "@mui/icons-material/Edit"
import CheckIcon from "@mui/icons-material/Check"

const Builder = (props) => {
  const { onSave, onChange, formState, propertyName } = props
  const [showCode, setShowCode] = useState(false)
  const [form, setFormState] = useState(formState ? formState : fromBuilderStub.formStub)
  const [addProperty, setAddProperty] = useState(false)
  const [editProperty, setEditProperty] = useState()
  const [propertyId, setPropertyId] = useState(0)

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
    if (!window.confirm(`Eliminar este elemento? "${form.properties[key].title}" ?`)) return
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

    if (ftemp.properties[name].title === "") {
      ftemp.properties[name].title = "Sin Título"
    }

    setFormState(ftemp)
  }

  const saveProperty = (e) => {
    e.preventDefault()

    setAddProperty(false)
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
    setPropertyId(propertyId + 1)
  }

  return (
    <Stack spacing={2}>
      <Stack spacing={2}>
        <TextField label="Título del Formulario" name="title" onChange={handleChangeFormInput} value={form.title} />
        <TextField
          label="Descripción"
          name="description"
          placeholder="Minimum 3 rows"
          multiline
          rows={3}
          onChange={handleChangeFormInput}
          value={form.description}
        />
      </Stack>
      <Stack spacing={2}>
        <Divider>
          <Typography variant="caption">Elementos del Formulario</Typography>
        </Divider>
        <Box sx={{ display: "flex", height: "100%" }} justifyContent="center">
          <Button
            size={"small"}
            variant={addProperty ? "text" : "outlined"}
            color={addProperty ? "secondary" : "primary"}
            onClick={() => toggleAdd(!addProperty)}
            endIcon={addProperty ? <RemoveCircleOutline /> : <AddCircleOutlineIcon />}
          >
            Agregar nuevo elemento
          </Button>
        </Box>
        <Collapse
          in={addProperty}
          timeout="auto"
          unmountOnExit
          sx={{ border: "1px dashed grey", borderRadius: "5px", p: 2 }}
        >
          <PropertyForm onPropertySubmit={handlePropertyUpdate} toggleAdd={() => toggleAdd(false)} name={propertyId} />
        </Collapse>
      </Stack>
      {/*When editing an element*/}
      {form.properties && (
        <List>
          {Object.keys(form.properties).map((key, idx) => {
            return (
              <Fragment key={key + idx}>
                <ListItem
                  disablePadding
                  secondaryAction={
                    <IconButton aria-label="delete" onClick={() => removeProperty(key)}>
                      <DeleteIcon />
                    </IconButton>
                  }
                >
                  <ListItemButton
                    selected={editProperty === key}
                    onClick={() => toggleEdit(key)}
                    sx={{ width: "100%" }}
                  >
                    <ListItemIcon>
                      <EditIcon />
                    </ListItemIcon>
                    <ListItemText>
                      <Typography sx={{ wordWrap: "break-word" }}>
                        {form.properties[key].title} {editProperty === key ? "- Editando" : ""}
                      </Typography>
                    </ListItemText>
                  </ListItemButton>
                </ListItem>
                <Collapse
                  in={editProperty === key}
                  timeout="auto"
                  unmountOnExit
                  sx={{ border: "1px dashed grey", borderRadius: "5px", p: 2, mt: 1 }}
                >
                  <PropertyForm
                    onPropertySubmit={handlePropertyUpdate}
                    toggleEdit={() => toggleEdit(key)}
                    name={key}
                    property={form.properties[key]}
                    required={form.required}
                    ui={form.ui[key]}
                  />
                </Collapse>
              </Fragment>
            )
          })}
        </List>
      )}
    </Stack>
  )
}

const PropertyForm = (props) => {
  const { name, property, ui, onPropertySubmit, required, toggleAdd, toggleEdit } = props
  const temp = property ? { ...property } : { ...fromBuilderStub.propertyStub }
  Object.assign(temp, ui ? ui : fromBuilderStub.uiStub)
  if (!temp.name) temp.name = name
  temp.required = required ? required.includes(name) : false
  const [form, setFormState] = useState(temp)
  const [formO, setFormOState] = useState(temp)

  const handleChangeFormInput = (event) => {
    const { target } = event
    const { name, value } = target
    const newValue = value === "checkbox" ? target.checked : target.value
    setFormState({ ...form, [name]: newValue })
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

  const save = toggleAdd ? toggleAdd : toggleEdit

  return (
    <Stack spacing={2}>
      <FormControl fullWidth>
        <InputLabel id="select-widget">Tipo de Elemento</InputLabel>
        <SelectMui
          label="Tipo de Elemento"
          value={form?.widget}
          name="widget"
          onChange={handleChangeFormInput}
          labelId="select-widget"
        >
          {fromBuilderStub.widgets.map((widget, idx) => {
            let widgetName = Object.values(widget).toString()
            let widgetType = Object.keys(widget).toString()
            return (
              <MenuItem key={widgetType + idx} value={widgetType}>
                {widgetName}
              </MenuItem>
            )
          })}
        </SelectMui>
      </FormControl>
      <FormControl>
        <TextField
          label="Título del Elemento"
          name="title"
          placeholder="Título que llevará este elemento"
          onChange={handleChangeFormInput}
          value={form?.title}
        />
      </FormControl>
      {form?.widget === "paragraph" ? (
        <FormControl>
          <TextField
            label="Descripción"
            name="description"
            placeholder="Párrafo de descripción"
            multiline
            rows={3}
            onChange={handleChangeFormInput}
            value={form.description ? form.description : ""}
          />
        </FormControl>
      ) : null}
      <FormControl>
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
              Obligatorio?
            </label>
          </div>
        </div>
        {/*Dejar para analizar después esta función, ahorita no le veo utilidad*/}
        {/*<div className="col">*/}
        {/*  <div className={`${fromBuilderStub.checkboxWrapperClass}`}>*/}
        {/*    <input*/}
        {/*      type="checkbox"*/}
        {/*      name="autofocus"*/}
        {/*      checked={form?.autofocus}*/}
        {/*      onChange={handleChangeFormInput}*/}
        {/*      className={`${fromBuilderStub.checkboxClass}`}*/}
        {/*      id="autofocus"*/}
        {/*    />*/}
        {/*    <label className="form-check-label" htmlFor="autofocus">*/}
        {/*      Autofocus*/}
        {/*    </label>*/}
        {/*  </div>*/}
        {/*</div>*/}
      </FormControl>
      {/*TODO: Añadir la función para elegir el tamaño del titulo ->*/}
      {/*<FormControl>*/}
      {/*  <SelectMui*/}
      {/*    label="Tamaño del título"*/}
      {/*    value={form?.options}*/}
      {/*    name="widget"*/}
      {/*    onChange={handleChangeFormInput}*/}
      {/*    labelId="select-widget"*/}
      {/*  >*/}
      {/*    {fromBuilderStub.headerSizes.map((size, idx) => {*/}
      {/*      return (*/}
      {/*        <MenuItem key={size + idx} value={size}>*/}
      {/*          {size}*/}
      {/*        </MenuItem>*/}
      {/*      )*/}
      {/*    })}*/}
      {/*  </SelectMui>*/}
      {/*</FormControl>*/}
      {/*Esto no sirve para nada, TODO: eliminar muy pronto*/}
      {/*<FormControl>*/}
      {/*  <label>Class Name</label>*/}
      {/*  <input*/}
      {/*    type="text"*/}
      {/*    value={form?.className}*/}
      {/*    onChange={handleChangeFormInput}*/}
      {/*    name="className"*/}
      {/*    className={`${fromBuilderStub.inputClass}`}*/}
      {/*  />*/}
      {/*</FormControl>*/}

      {form?.widget === "select" || form?.widget === "radio" ? (
        <FormControl>
          <TextField
            label="Opciones"
            name="options"
            placeholder="Agrega opciones separadas por una nueva linea"
            multiline
            rows={3}
            onChange={handleChangeFormInput}
            value={form.options ? handleOptions(form.options) : ""}
          />
          {/*TODO: Validar el radio button si va a ser vertical u horizontal*/}
          {/*{form?.widget === "radio" && (*/}
          {/*  <div className={`${fromBuilderStub.inputWrapperClass} col`}>*/}
          {/*    <label>Type</label>*/}
          {/*    <input*/}
          {/*      type="text"*/}
          {/*      value={form?.type}*/}
          {/*      name="type"*/}
          {/*      onChange={handleChangeFormInput}*/}
          {/*      className={`${fromBuilderStub.inputClass}`}*/}
          {/*    />*/}
          {/*  </div>*/}
          {/*)}*/}
        </FormControl>
      ) : null}
      <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
        <Button
          size={"small"}
          variant={"text"}
          color={"secondary"}
          onClick={() => discardChanges()}
          endIcon={<CancelIcon />}
        >
          Descartar Cambios
        </Button>
        {}
        <Button size={"small"} variant={"outlined"} onClick={save} endIcon={<CheckIcon />}>
          Guardar
        </Button>
      </Stack>
    </Stack>
  )
}

export default Builder
