import React from "react"
import { useSelector } from "react-redux"

function IndexSurveys() {
  const vars = useSelector((state) => state.index)
  console.log(vars)
  return <div>hola mundo</div>
}

export default IndexSurveys
