import React, { Fragment, useState } from "react"
import { useSelector } from "react-redux"
import {
  Box,
  Button,
  Collapse,
  Divider,
  FormControlLabel,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  Switch,
  Typography,
} from "@mui/material"
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"

function IndexSurveys() {
  const data = useSelector((state) => state.index)
  //Open Close the survey details panel
  const [open, setOpen] = useState({ key: "", isOpen: false })

  const handleChangeStateSurvey = () => {
    console.log("Desactivar/Activar encuesta")
  }

  const handleOpenClose = (key) => {
    setOpen({ key: key, isOpen: !open.isOpen })
  }

  return (
    <Grid>
      {/*Verify is there is no survey, and shows a message to create anew one*/}
      {data.allSurveys.length !== 0 ? (
        <List>
          {data.allSurveys.map((survey) => {
            let surveyData = JSON.parse(survey.data)
            console.log(survey.status)
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
                          <strong>{surveyData.title}</strong>
                        </Typography>
                        <Typography component="span" variant="body2">
                          {surveyData.description}
                        </Typography>
                      </Stack>
                      <Stack direction={"row"} spacing={2} alignItems={"center"}>
                        <Box>
                          <form action={data.url_survey + "/" + survey.id + "/edit"} method={"GET"}>
                            <input name="id" value={survey.id} hidden />
                            <Button size={"small"} variant={"contained"} type={"submit"}>
                              Editar
                            </Button>
                          </form>
                        </Box>
                        <FormControlLabel
                          control={<Switch checked={survey.status === 1} onChange={handleChangeStateSurvey} />}
                          label={survey.status === 1 ? "On" : "Off"}
                        />
                      </Stack>
                    </Stack>
                  </ListItemText>
                </ListItem>
                {data.allSurveys.length > 1 ? <Divider /> : null}
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
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Button variant={"contained"} href={data.url_create_survey}>
              Crear Encuesta
            </Button>
          </Box>
        </Stack>
      )}
    </Grid>
  )
}

export default IndexSurveys
