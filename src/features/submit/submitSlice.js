import { createSlice } from "@reduxjs/toolkit"

export const submitSlice = createSlice({
  name: "submit",
  initialState: {
    allSurveys: {},
    url_survey_submit: "",
    csrf_token_survey: "",
  },
  reducers: {
    varsSubmit: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.allSurveys = action.payload.allSurveys
      state.url_survey_submit = action.payload.url_survey_submit
      state.csrf_token_survey = action.payload.csrf_token_survey
    },
  },
})

// Action creators are generated for each case reducer function
export const { varsSubmit } = submitSlice.actions

export default submitSlice.reducer
