import { configureStore } from "@reduxjs/toolkit"
import IndexReducer from "../features/index/indexSlice"
import EditReducer from "../features/edit/editSlice"

export default configureStore({
  reducer: {
    index: IndexReducer,
    edit: EditReducer,
  },
})
