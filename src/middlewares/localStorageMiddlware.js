import { reciveTheme } from "../features/theme/themeSlice";

const localStorageMiddleware = (store) => (next) => (action) => {
  if (action.type === "mount") {
    const state = JSON.parse(localStorage.getItem("state"));

    if (!state) return next(action);

    const { theme } = state;

    store.dispatch(reciveTheme(theme));
  }
  if (action.type === 'beforeunload') {
    const stringfyState = JSON.stringify(store.getState());

    localStorage.setItem('state', stringfyState);
  }

  return next(action);
};

export default localStorageMiddleware;