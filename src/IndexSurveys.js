import React, { Fragment, useEffect, useState } from "react"
import { useSelector } from "react-redux"
import {
  Box,
  Button,
  Collapse,
  Divider,
  FormControlLabel,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  Switch,
  Typography,
} from "@mui/material"
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"
import { AddCircleOutline } from "@mui/icons-material"
import DeleteIcon from "@mui/icons-material/Delete"

function IndexSurveys() {
  const data = useSelector((state) => state.index)
  //Open Close the survey details panel
  const [open, setOpen] = useState({ key: "", isOpen: false })
  const [onOff_survey, setOnOff_survey] = useState({ status: 0, id: "0" })

  useEffect(() => {
    return () => {
      document.getElementById("changeStatus").submit()
    }
  }, [onOff_survey])

  const handleChangeStatusSurvey = (survey) => {
    let status = survey.status === 1 ? 0 : 1
    setOnOff_survey({
      status: status,
      id: survey.id,
    })
  }

  const handleOpenClose = (key) => {
    setOpen({ key: key, isOpen: !open.isOpen })
  }

  const handleDelete = (e) => {
    e.preventDefault()
    window.confirm(
      "¿Está seguro?\nEsta acción eliminará la encuesta y todas sus respuestas. Proceda con precaución."
    ) && e.target.submit()
  }

  return (
    <Grid>
      <Stack spacing={2}>
        <Box sx={{ display: "flex", justifyContent: "end" }}>
          <Button variant={"outlined"} href={data.url_create_survey} endIcon={<AddCircleOutline />}>
            Crear Encuesta
          </Button>
        </Box>
        <Divider />
      </Stack>
      {/*Verify is there is no survey, and shows a message to create anew one*/}
      {data.allSurveys.length !== 0 ? (
        <List>
          {data.allSurveys.map((survey, index) => {
            let surveyData = JSON.parse(survey.data)

            return (
              <Fragment key={survey.id}>
                <ListItem>
                  <ListItemIcon>
                    <Button
                      startIcon={<KeyboardArrowDownIcon />}
                      size={"small"}
                      onClick={() => handleOpenClose(survey.id)}
                    >
                      Detalles
                    </Button>
                  </ListItemIcon>
                  <ListItemText>
                    <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"}>
                      <Stack ml={2}>
                        <Typography variant={"body1"}>
                          <strong>{surveyData.title || "Sin Titulo"}</strong>
                        </Typography>
                        <Typography component="span" variant="body2">
                          {surveyData.description || "Sin Descripción"}
                        </Typography>
                      </Stack>
                      <Stack direction={"row"} spacing={2} alignItems={"center"}>
                        <form action={data.url_survey + "/" + survey.id + "/edit"} method={"GET"}>
                          <input name="id" defaultValue={survey.id} hidden />
                          <Button size={"small"} variant={"contained"} type={"submit"}>
                            Editar
                          </Button>
                        </form>
                        <FormControlLabel
                          control={
                            <Switch checked={survey.status === 1} onChange={() => handleChangeStatusSurvey(survey)} />
                          }
                          label={survey.status === 1 ? "On" : "Off"}
                        />
                        <Divider orientation={"vertical"} flexItem />
                        <form action={data.url_survey + "/" + survey.id} method="POST" onSubmit={handleDelete}>
                          <input readOnly hidden name={"survey"} defaultValue={survey.id} />
                          <input readOnly hidden name="_token" value={data.csrf_token_survey} />
                          <input readOnly hidden name="_method" value="DELETE" />
                          <IconButton aria-label="delete" type={"submit"}>
                            <DeleteIcon />
                          </IconButton>
                        </form>
                      </Stack>
                    </Stack>
                  </ListItemText>
                </ListItem>
                {/*{data.allSurveys.length > 1 && data.allSurveys.length !== index + 1 ? <Divider /> : null}*/}
                <Collapse
                  in={open.key === survey.id && open.isOpen}
                  timeout="auto"
                  unmountOnExit
                  sx={{ backgroundColor: "#e8e8e8" }}
                >
                  <Stack direction={"row"} mt={2} mb={2} justifyContent={"space-around"}>
                    <Box>
                      <Typography variant={"body2"}>
                        <strong>Creación:</strong> {survey.created_at}
                      </Typography>
                    </Box>
                    <Box>
                      <Typography variant={"body2"}>
                        <strong>Ultima actualización:</strong> {survey.updated_at}
                      </Typography>
                    </Box>
                  </Stack>
                  <Divider />
                </Collapse>
              </Fragment>
            )
          })}
        </List>
      ) : (
        <Stack spacing={2}>
          <Typography textAlign={"center"} variant={"h5"}>
            Parece que no haz creado ninguna encuesta aun
          </Typography>
        </Stack>
      )}
      {/*form to submit state updates to website*/}
      <form action={data.url_survey + "/" + onOff_survey.id} method="post" id="changeStatus">
        <input readOnly name="_token" value={data.csrf_token_survey} hidden />
        <input readOnly name="_method" value="PUT" hidden />
        <input readOnly name="survey" value={onOff_survey.id || 0} hidden />
        <input readOnly name="status" value={onOff_survey.status || 0} hidden />
      </form>
    </Grid>
  )
}

export default IndexSurveys
