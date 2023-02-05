import { createStore } from "redux";
import { combinedReducers } from "./reducers/combineReducers";
import LoginReducer from "./reducers/LoginReducer";

export const store = createStore(combinedReducers);
