import { combineReducers } from "redux";
import { uiReducer } from "./uiReducer";
import { weatherReducer } from "./weatherReducer";


export const rootReducer=combineReducers({
weather:weatherReducer,
ui:uiReducer
});
