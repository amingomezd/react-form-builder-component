import { configureStore } from "@reduxjs/toolkit"
import IndexReducer from "../features/index/indexSlice"
import EditReducer from "../features/edit/editSlice"
import CreateReducer from "../features/create/createSlice"
import SubmitReducer from "../features/submit/submitSlice"

export default configureStore({
  reducer: {
    index: IndexReducer,
    edit: EditReducer,
    create: CreateReducer,
    submit: SubmitReducer,
  },
})
