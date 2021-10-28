import { createSlice } from "@reduxjs/toolkit"

export const indexSlice = createSlice({
  name: "index",
  initialState: {
    allSurveys: {},
    url_survey: "",
    url_create_survey: "",
    csrf_token_survey: "",
    created_at: "",
    updated_at: "",
  },
  reducers: {
    varsIndex: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.allSurveys = action.payload.allSurveys
      state.url_survey = action.payload.url_survey
      state.url_create_survey = action.payload.url_create_survey
      state.csrf_token_survey = action.payload.csrf_token_survey
      state.created_at = action.payload.created_at
      state.updated_at = action.payload.updated_at
    },
  },
})

// Action creators are generated for each case reducer function
export const { varsIndex } = indexSlice.actions

export default indexSlice.reducer
