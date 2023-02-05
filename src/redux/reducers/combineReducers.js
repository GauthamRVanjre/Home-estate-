import { combineReducers } from "redux";
import LoginReducer from "./LoginReducer";
import favoritesPageReducer from "./favoritesPageReducer";

export const combinedReducers = combineReducers({
  login: LoginReducer,
  favorites: favoritesPageReducer,
});
