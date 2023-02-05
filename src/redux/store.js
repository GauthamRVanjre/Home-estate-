import { createStore } from "redux";
import LoginReducer from "./reducers/LoginReducer";

export const store = createStore(LoginReducer);
