import customCreateAction from "../../utils/customCreateAction";
import { actionsMap } from "./constants";

export const addItem = customCreateAction(actionsMap.add);

export const deleteItem = customCreateAction(actionsMap.delete);

export const toggleItem = customCreateAction(actionsMap.toggleItem);

export const editItem = customCreateAction(actionsMap.editItem);

export const updateItem = customCreateAction(actionsMap.updateItem);

export const toggleAll = customCreateAction(actionsMap.toggleAll);

export const deleteCompleted = customCreateAction(actionsMap.deleteCompleted);
