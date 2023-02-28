import { combineReducers } from "@reduxjs/toolkit";
import theme from "./theme/theme";
import filter from "./filter/filter";
import list from "./list/list";

export const rootReducer = combineReducers({
  theme,
  filter,
  list,
});
