import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filter: "all",
  items: [],
};

const updateItem = (items, updatedItem) =>
  items.map((item) => {
    if (item.id === updatedItem.id) {
      item = { ...updatedItem };
    }
    return item;
  });

const listSlice = createSlice({
  name: "list",
  initialState,
  reducers: {
    reciveListState(state, { payload }) {
      const { filter, items } = payload;
      state.filter = filter ?? "all";
      state.items = items ?? [];
    },
    setFilter(state, { payload }) {
      state.filter = payload;
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
    toggleItemCompletedStatus(state, { payload }) {
      const item = state.items.find((todo) => todo.id === payload);
      item.completed = !item.completed;
      state.items = updateItem(state.items, item);
    },
    toggleItemIsEditingStatus(state, { payload }) {
      const item = state.items.find((todo) => todo.id === payload);
      item.isEditing = !item.isEditing;
      state.items = updateItem(state.items, item);
    },
    updateItemText(state, { payload }) {
      const item = state.items.find((todo) => todo.id === payload.id);
      item.text = payload.text;
      state.items = updateItem(state.items, item);
    },
    deleteItem(state, { payload }) {
      state.items = state.items.filter((item) => item.id !== payload);
    },
    deleteCompleted(state) {
      state.items = state.items.filter((item) => !item.completed);
    },
    toggleAll(state) {
      const itemsCount = state.items.length;
      const completedCount = state.items.reduce((counter, task) => {
        counter += task.completed ? 1 : 0;
        return counter;
      }, 0);

      if (itemsCount !== completedCount) {
        state.items = state.items.map((item) => {
          if (!item.completed) {
            item.completed = !item.completed;
          }
          return item;
        });
      }

      if (itemsCount === completedCount) {
        state.items = state.items.map((item) => {
          item.completed = !item.completed;
          return item;
        });
      }
    },
  },
});

export const {
  reciveListState,
  setFilter,
  addItem,
  deleteItem,
  deleteCompleted,
  toggleItemCompletedStatus,
  toggleItemIsEditingStatus,
  updateItemText,
  toggleAll,
} = listSlice.actions;

export default listSlice.reducer;
