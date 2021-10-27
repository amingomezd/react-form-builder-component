import React from "react"
import FormBuilder from "./components/Builder"
import FormRender from "./components/Form"
import { useState } from "react"
import { Box, Button, Divider, Grid, Typography } from "@mui/material"

function App({ surveyOldData, url_update_survey, csrf_token_survey }) {
  const [form, setFormState] = useState({})

  const handleFormSubmit = (e) => {
    e.preventDefault()
    // handle form builder property save action
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
          formState={JSON.parse(surveyOldData || null)}
          onChange={onFormBuilderUpdate}
        />
        <form action={url_update_survey} method="POST" encType="multipart/form-data">
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <input readOnly name="_token" value={csrf_token_survey} hidden />
            <input readOnly name="data" value={JSON.stringify(form)} hidden />
            <Button variant={"contained"} type={"submit"}>
              Guardar Formulario
            </Button>
          </Box>
        </form>
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
