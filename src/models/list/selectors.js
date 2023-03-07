import { createSelector } from "@reduxjs/toolkit";
import { selectFilter } from "../filter/selectors";

const rootSelector = createSelector(
  (state) => state,
  (state) => state.list,
);

export const selectAll = createSelector(
  rootSelector,
  (listState) => listState.items,
);

export const selectActive = createSelector(
  selectAll,
  (items) => items.filter((item) => !item.completed),
);

export const selectCompleted = createSelector(
  selectAll,
  (items) => items.filter((item) => item.completed),
);

export const selectAllCounter = createSelector(
  selectAll,
  (items) => items.length,
);

export const selectActiveCounter = createSelector(
  selectActive,
  (items) => items.length,
);

export const selectCompletedCounter = createSelector(
  selectCompleted,
  (items) => items.length,
);

export const selectVisibleItems = createSelector(
  selectFilter,
  selectAll,
  selectActive,
  selectCompleted,
  (filter, all, active, completed) => {
    const items = {
      all: all,
      active: active,
      completed: completed,
    };

    return items[filter];
  },
);

export const selectVisibleItemsCounter = createSelector(
  selectVisibleItems,
  (items) => items.length,
);
