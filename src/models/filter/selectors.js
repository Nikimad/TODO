import { createSelector } from "@reduxjs/toolkit";

const rootSelector = createSelector(
  (state) => state,
  (state) => state.filter,
);

export const selectFilter = createSelector(
  rootSelector,
  (filterState) => filterState.currentFilter,
);
