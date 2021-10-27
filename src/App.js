import React from "react"
import IndexSurveys from "./IndexSurveys"
import EditSurvey from "./EditSurvey"
import { useDispatch } from "react-redux"
import { varsIndex } from "./features/index/indexSlice"
import { varsEdit } from "./features/edit/editSlice"

function App({ surveysDiv, siteProps }) {
  const dispatch = useDispatch()

  {
    switch (surveysDiv.dataset.name) {
      case "index":
        //we send the url vars for the submit
        dispatch(varsIndex(siteProps))
        return <IndexSurveys />
      case "edit":
        dispatch(varsEdit(siteProps))
        return <EditSurvey />
      default:
        return null
    }
  }
}

export default App
