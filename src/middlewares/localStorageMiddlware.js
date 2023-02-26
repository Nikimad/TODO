import { reciveTheme } from "../features/theme/themeSlice";
import { reciveListState } from "../features/list/listSlice";

const localStorageMiddleware = (store) => (next) => (action) => {
  if (action.type === "mount") {
    try {
      const state = JSON.parse(localStorage.getItem("state"));

      if (!state) return next(action);

      const { theme, list } = state;

      store.dispatch(reciveTheme(theme));
      store.dispatch(reciveListState(list));
    } catch {
      return next(action);
    }
  }
  if (action.type === "beforeunload") {
    try {
      const stringfyState = JSON.stringify(store.getState());

      localStorage.setItem("state", stringfyState);
    } catch {
      return next(action);
    }
  }

  return next(action);
};

export default localStorageMiddleware;
