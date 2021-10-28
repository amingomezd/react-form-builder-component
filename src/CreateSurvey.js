import React, { useState } from "react"
import FormBuilder from "./components/Builder"
import FormRender from "./components/Form"
import { Box, Button, Divider, Grid, Typography } from "@mui/material"
import { useSelector } from "react-redux"

function CreateSurvey() {
  const data = useSelector((state) => state.create)
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
        <FormBuilder onSave={handleFormSubmit} formState={null} onChange={onFormBuilderUpdate} />
        <form action={data.url_store_survey} method="POST" encType="multipart/form-data">
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <input readOnly name="_token" value={data.csrf_token_survey} hidden />
            <input readOnly name="data" value={JSON.stringify(form)} hidden />
            <Button variant={"contained"} type={"submit"}>
              Crear Formulario
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

export default CreateSurvey
