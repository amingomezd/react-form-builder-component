import React from "react"
import FormBuilder from "./components/Builder"
import FormRender from "./components/Form"
import { useState } from "react"
import { Box, Divider, Grid, Stack, Typography } from "@mui/material"
import ReactDOM from "react-dom"
import axios from "axios"

function App() {
  const [form, setFormState] = useState({})

  const handleFormSubmit = (e) => {
    e.preventDefault()
    // handle form builder property save action
    const data = JSON.stringify(form)
    const url = document.getElementById("url-update-survey").getAttribute("content")
    const token = document.getElementById("csrf-token-survey").getAttribute("content")
    const payload = { _token: token, data: data }

    axios.post(url, payload).catch((e) => {
      console.log(e)
    })
  }

  const handleSubmitDummy = (payload) => {
    // handle form submit action
  }

  const onFormBuilderUpdate = (payload) => {
    setFormState(payload)
  }

  return (
    <Grid container direction="row" spacing={2}>
      <Grid item xs={4}>
        <FormBuilder
          onSave={handleFormSubmit}
          formState={JSON.parse(window.surveyData || null)}
          onChange={onFormBuilderUpdate}
        />
      </Grid>
      <Grid item xs={1}>
        <Box sx={{ display: "flex", height: "100%" }} justifyContent="center">
          <Divider orientation="vertical" />
        </Box>
      </Grid>
      <Grid item xs={7}>
        <Divider>
          <Typography variant="caption">Previsualización del Formulario</Typography>
        </Divider>
        <FormRender {...form} onsubmit={handleSubmitDummy} disabled />
      </Grid>
    </Grid>
  )
}

export default App
