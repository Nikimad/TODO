import { createStore } from "@reduxjs/toolkit";
import { rootReducer } from "../models";
import { loadState, saveState } from "../utils/localStorageHandlers";
import  throttle  from "lodash/throttle";

const state = loadState();

export const store = createStore(rootReducer, state);

store.subscribe(throttle(() => {
  saveState(store.getState());
}), 1000);
