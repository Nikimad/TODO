export const selectFilter = (state) => state.list.filter;

export const selectAll = (state) => state.list.items;

export const selectActive = (state) =>
  state.list.items.filter((item) => !item.completed);

export const selectCompleted = (state) =>
  state.list.items.filter((item) => item.completed);

export const selectActiveCounter = (state) => selectActive(state).length;

export const selectCompletedCounter = (state) => selectCompleted(state).length;

export const selectVisibleItems = (state) => {
    const filter = selectFilter(state);
    const getItemsMap = {
        "all": () => selectAll(state),
        "active": () => selectActive(state),
        "completed": () => selectCompleted(state),
    };
    return getItemsMap[filter]();
};