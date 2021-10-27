import React from "react"
import ReactDOM from "react-dom"
import App from "./App"

ReactDOM.render(
  <React.StrictMode>
    <App surveyOldData={surveyOldData} url_update_survey={url_update_survey} csrf_token_survey={csrf_token_survey} />
  </React.StrictMode>,
  document.getElementById("poll")
)
