import React, { Fragment, useState } from "react"
import { useSelector } from "react-redux"
import {
  AppBar,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material"
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople"
import CloseIcon from "@mui/icons-material/Close"
import FormRender from "./components/Form"

const SurveySubmit = () => {
  const data = useSelector((state) => state.submit)
  const [modal, setModal] = useState(false)
  const [formData, setFormData] = useState({})
  const [surveyAnswers, setSurveyAnswers] = useState({ survey_id: null, form: {} })
  const [surveyId, setSurveyId] = useState(null)

  const handleButtonClick = (survey, surveyData) => {
    setSurveyId(survey.id)
    setFormData(surveyData)
    setModal(true)
  }

  const handleClose = () => {
    // setSurveyId(null)
    // setSurveyAnswers({ survey_id: null, form: {} })
    setModal(false)
  }

  const handleSubmit = () => {
    document.getElementById("surveyAnswers").submit()
  }

  let handleSubmitDummy

  return (
    data.allSurveys.length !== 0 && (
      <>
        <Stack spacing={2}>
          {data.allSurveys.map((survey, index) => {
            const surveyData = JSON.parse(survey.data)
            return (
              <Fragment key={index}>
                <Button
                  variant={"contained"}
                  endIcon={<EmojiPeopleIcon />}
                  onClick={() => handleButtonClick(survey, surveyData)}
                >
                  {surveyData.title}
                </Button>
              </Fragment>
            )
          })}
          <Dialog scroll={"paper"} fullScreen open={modal} onClose={handleClose}>
            <AppBar sx={{ position: "relative" }}>
              <Toolbar>
                <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                  <CloseIcon />
                </IconButton>
                <Typography sx={{ ml: 2, flex: 1 }} variant={"caption"} component="div">
                  Encuesta de Satisfacción
                </Typography>
              </Toolbar>
            </AppBar>
            <DialogContent dividers={true}>
              <FormRender
                {...formData}
                onsubmit={handleSubmitDummy}
                setSurveyAnswers={setSurveyAnswers}
                surveyId={surveyId}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Cancelar</Button>
              <Button variant={"contained"} onClick={handleSubmit}>
                Guardar
              </Button>
            </DialogActions>
          </Dialog>
        </Stack>
        <form id={"surveyAnswers"} action={data.url_survey_submit} method={"POST"} hidden>
          <input readOnly name="_token" value={data.csrf_token_survey} hidden />
          <input readOnly name="survey_id" defaultValue={surveyAnswers.survey_id} hidden />
          <input readOnly name="data" value={JSON.stringify(surveyAnswers.form)} hidden />
        </form>
      </>
    )
  )
}

export default SurveySubmit
