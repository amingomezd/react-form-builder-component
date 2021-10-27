import { createSlice } from "@reduxjs/toolkit"

export const editSlice = createSlice({
  name: "index",
  initialState: {
    surveyOldData: {},
    url_update_survey: "",
    csrf_token_survey: "",
  },
  reducers: {
    varsEdit: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.surveyOldData = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { varsEdit } = editSlice.actions

export default editSlice.reducer
