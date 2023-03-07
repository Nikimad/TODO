import { createSelector } from "@reduxjs/toolkit";

const rootSelector = createSelector(
  (state) => state,
  (state) => state.theme,
);

export const selectTheme = createSelector(
  rootSelector,
  (themeState) => themeState.currentTheme,
);
