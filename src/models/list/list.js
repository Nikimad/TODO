import { actionsMap } from "./constants";

const initialState = {
  items: [],
};

const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionsMap.add:
      return {
        ...state,
        items: [
          {
            text: action.payload,
            completed: false,
            isEditing: false,
            id: Date.now(),
          },
          ...state.items,
        ],
      };
    case actionsMap.delete:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };
    case actionsMap.toggleItem:
      return {
        ...state,
        items: state.items.map((item) => {
          if (item.id === action.payload) {
            item = {
              ...item,
              completed: !item.completed,
            };
          }
          return item;
        }),
      };
    case actionsMap.editItem:
      return {
        ...state,
        items: state.items.map((item) => {
          if (item.id === action.payload) {
            item = {
              ...item,
              isEditing: !item.isEditing,
            };
          }
          return item;
        }),
      };
    case actionsMap.updateItem:
      return {
        ...state,
        items: state.items.map((item) => {
          if (item.id === action.payload.id) {
            item = {
              ...item,
              text: action.payload.text,
            };
          }
          return item;
        }),
      };
    case actionsMap.toggleAll:
      const itemsCount = state.items.length;
      const completedCount = state.items.reduce((counter, task) => {
        counter += task.completed ? 1 : 0;
        return counter;
      }, 0);
      const newState = {};

      if (itemsCount !== completedCount) {
        newState.items = state.items.map((item) => {
          if (!item.completed) {
            item = {
              ...item,
              completed: !item.completed,
            };
          }
          return item;
        });
      }

      if (itemsCount === completedCount) {
        newState.items = state.items.map((item) => {
          item = {
            ...item,
            completed: !item.completed,
          };
          return item;
        });
      }

      return {
        ...state,
        ...newState,
      };
    case actionsMap.deleteCompleted:
      return {
        ...state,
        items: state.items.filter((item) => !item.completed),
      };
    default:
      return state;
  }
};

export default listReducer;
