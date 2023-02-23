import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filter: "all",
  items: [],
};

const listSlice = createSlice({
  name: "list",
  initialState,
  reducers: {
    reciveListState(state, { payload }) {
      const { filter, items } = payload;
      state.filter = filter;
      state.items = items;
    },
    addItem(state, { payload }) {
      state.items = [
        {
          text: payload,
          completed: false,
          isEditing: false,
          id: Date.now(),
        },
        ...state.items,
      ];
    },
  },
});

export const { reciveListState, addItem } = listSlice.actions;

export default listSlice.reducer;
