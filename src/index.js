import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import { Provider } from "react-redux"
import store from "./store/store"

const surveysDiv = document.getElementById("surveys")

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App surveysDiv={surveysDiv} siteProps={siteProps} />
    </Provider>
  </React.StrictMode>,
  surveys
)
