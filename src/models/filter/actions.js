import customCreateAction from "../../utils/customCreateAction";
import { actionsMap } from "./constants";

export const reciveFilter = customCreateAction(actionsMap.recive);

export const setFilter = customCreateAction(actionsMap.set);
