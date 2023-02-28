import { actionsMap } from "./constants";
import recive from "../../utils/recive";

const initialState = {
  currentTheme: "dark",
};

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionsMap.recive:
      return recive(state, action.payload);
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
