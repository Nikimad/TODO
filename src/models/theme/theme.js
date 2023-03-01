import { actionsMap } from "./constants";

const initialState = {
  currentTheme: "dark",
};

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionsMap.toggle:
      return {
        ...state,
        currentTheme: state.currentTheme === "dark" ? "light" : "dark",
      };
    default:
      return state;
    }
};

export default themeReducer;
