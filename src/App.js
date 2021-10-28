import IndexSurveys from "./IndexSurveys"
import EditSurvey from "./EditSurvey"
import { useDispatch } from "react-redux"
import { varsIndex } from "./features/index/indexSlice"
import { varsEdit } from "./features/edit/editSlice"
import CreateSurvey from "./CreateSurvey"
import { varsCreate } from "./features/create/createSlice"

function App({ surveysDiv, serverProps }) {
  const dispatch = useDispatch()
  //we send the url vars for the submit
  //surveyDiv is the div that load in the dom where this script is attached
  {
    switch (surveysDiv.dataset.name) {
      case "index":
        dispatch(varsIndex(serverProps))
        return <IndexSurveys />
      case "edit":
        dispatch(varsEdit(serverProps))
        return <EditSurvey />
      case "create":
        dispatch(varsCreate(serverProps))
        return <CreateSurvey />
      default:
        return null
    }
  }
}

export default App
