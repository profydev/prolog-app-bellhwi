import { configureStore, createSlice } from "@reduxjs/toolkit";

const issues = createSlice({
  name: "issues",
  initialState: null,
  reducers: {
    setIssues(state, action) {
      return action.payload;
    },
  },
});

export const { setIssues } = issues.actions;

export default configureStore({
  reducer: {
    issues: issues.reducer,
  },
});
