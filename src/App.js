import React from "react"
import FormBuilder from "./components/Builder"
import FormRender from "./components/Form"
import { useState } from "react"
import { Box, Divider, Grid, Stack } from "@mui/material"

function App() {
  const [form, setFormState] = useState({})

  const handleFormSubmit = (e) => {
    e.preventDefault()
    // handle form builder property save action
    console.log(JSON.stringify(form))
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
        <FormRender {...form} onsubmit={handleSubmitDummy} disabled />
      </Grid>
    </Grid>
  )
}

export default App
