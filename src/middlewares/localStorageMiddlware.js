import { reciveTheme } from "../features/theme/themeSlice";
import { reciveListState } from "../features/list/listSlice";

const localStorageMiddleware = (store) => (next) => (action) => {
  if (action.type === "mount") {
    const state = JSON.parse(localStorage.getItem("state"));

    if (!state) return next(action);

    const { theme, list } = state;

    store.dispatch(reciveTheme(theme));
    store.dispatch(reciveListState(list));
  }
  if (action.type === 'beforeunload') {
    const stringfyState = JSON.stringify(store.getState());

    localStorage.setItem('state', stringfyState);
  }

  return next(action);
};

export default localStorageMiddleware;