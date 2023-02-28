import customCreateAction from "../../utils/customCreateAction";
import { actionsMap } from "./constants";

export const reciveTheme = customCreateAction(actionsMap.recive);

export const toggleTheme = customCreateAction(actionsMap.toggle);
