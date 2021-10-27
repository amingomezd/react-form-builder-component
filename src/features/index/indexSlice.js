import { createSlice } from "@reduxjs/toolkit"

export const indexSlice = createSlice({
  name: "index",
  initialState: {
    allSurveys: {},
    url_update_survey: "",
    csrf_token_survey: "",
  },
  reducers: {
    varsIndex: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.allSurveys = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { varsIndex } = indexSlice.actions

export default indexSlice.reducer
