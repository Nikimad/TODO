import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentTheme: "dark",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    reciveTheme(state, { payload }) {
      state.currentTheme = payload.currentTheme;
    },
    toggleTheme(state) {
      state.currentTheme = state.currentTheme === "dark" ? "light" : "dark";
    },
  },
});

export const { reciveTheme, toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;
