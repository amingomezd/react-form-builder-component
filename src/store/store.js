import { configureStore } from "@reduxjs/toolkit"
import IndexReducer from "../features/index/indexSlice"
import EditReducer from "../features/edit/editSlice"
import CreateReducer from "../features/create/createSlice"

export default configureStore({
  reducer: {
    index: IndexReducer,
    edit: EditReducer,
    create: CreateReducer,
  },
})
