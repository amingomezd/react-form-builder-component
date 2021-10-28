import { createSlice as CS } from "@reduxjs/toolkit"

export const createSlice = CS({
  name: "index",
  initialState: {
    url_store_survey: "",
    csrf_token_survey: "",
  },
  reducers: {
    varsCreate: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.url_store_survey = action.payload.url_store_survey
      state.csrf_token_survey = action.payload.csrf_token_survey
    },
  },
})

// Action creators are generated for each case reducer function
export const { varsCreate } = createSlice.actions

export default createSlice.reducer
