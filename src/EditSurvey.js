import React, { useState } from "react"
import FormBuilder from "./components/Builder"
import FormRender from "./components/Form"
import { Box, Button, Divider, Grid, Typography } from "@mui/material"
import { useSelector } from "react-redux"

function EditSurvey() {
  const data = useSelector((state) => state.edit)
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
    <Grid container direction="row" spacing={2} sx={{ px: 1, pt: 1 }}>
      <Grid item xs={4}>
        <FormBuilder
          onSave={handleFormSubmit}
          formState={JSON.parse(data.surveyData.data || null)}
          onChange={onFormBuilderUpdate}
        />
        <form action={data.url_survey + "/" + data.surveyData.id} method="post" encType="multipart/form-data">
          <input readOnly name="_token" value={data.csrf_token_survey} hidden />
          <input type="hidden" name="_method" value="PATCH" />
          <input readOnly name="data" value={JSON.stringify(form)} hidden />
          <input readOnly name="survey" value={data.surveyData.id} hidden />
          <Box sx={{ display: "flex", justifyContent: "center" }}>
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

export default EditSurvey
