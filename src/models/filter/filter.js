import { actionsMap } from "./constants";
import recive from "../../utils/recive";

const initialState = {
  currentFilter: "all",
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionsMap.recive:
      return recive(state, action.payload);
    case actionsMap.set:
      return {
        ...state,
        currentFilter: action.payload,
      };
    default:
      return state;
  }
};

export default filterReducer;
