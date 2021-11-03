import { useDispatch } from "react-redux"
import { varsIndex } from "./features/index/indexSlice"
import { varsEdit } from "./features/edit/editSlice"
import { varsCreate } from "./features/create/createSlice"
import { varsSubmit } from "./features/submit/submitSlice"
import IndexSurveys from "./IndexSurveys"
import EditSurvey from "./EditSurvey"
import CreateSurvey from "./CreateSurvey"
import { AppBar, Button, Card, CardContent, Container, Toolbar, Typography } from "@mui/material"
import SurveySubmit from "./SurveySubmit"

function App({ surveysDiv, serverProps }) {
  const dispatch = useDispatch()
  let page = null
  //we send the url vars for the submit
  //surveyDiv is the div that load in the dom where this script is attached
  switch (surveysDiv.dataset.name) {
    case "index":
      dispatch(varsIndex(serverProps))
      page = "index"
      break
    case "edit":
      dispatch(varsEdit(serverProps))
      page = "edit"
      break
    case "create":
      dispatch(varsCreate(serverProps))
      page = "create"
      break
    case "surveySubmit":
      dispatch(varsSubmit(serverProps))
      page = "surveySubmit"
      break
    default:
      return null
  }

  return (
    <>
      {page !== "surveySubmit" ? (
        <>
          <AppBar position="static">
            <Container>
              <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  Creador de Encuestas
                </Typography>
                <Button color="inherit">Cómo usar este módulo?</Button>
              </Toolbar>
            </Container>
          </AppBar>
          <Container sx={{ pt: 8 }}>
            <Card variant={"outlined"}>
              <CardContent>
                {page === "index" && <IndexSurveys />}
                {page === "edit" && <EditSurvey />}
                {page === "create" && <CreateSurvey />}
              </CardContent>
            </Card>
          </Container>
        </>
      ) : (
        <SurveySubmit />
      )}
    </>
  )
}

export default App
