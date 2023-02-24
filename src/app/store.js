import { configureStore } from "@reduxjs/toolkit";
import theme from "../features/theme/themeSlice";
import list from "../features/list/listSlice";
import localStorageMiddleware from "../middlewares/localStorageMiddlware";

export const store = configureStore({
  reducer: {
    theme,
    list,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(localStorageMiddleware),
});
