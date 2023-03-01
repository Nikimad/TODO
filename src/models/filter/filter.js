import { actionsMap } from "./constants";

const initialState = {
  currentFilter: "all",
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
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
