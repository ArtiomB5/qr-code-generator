import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { AppReducer } from "./reducers/AppReducer";

export const appStore = createStore(AppReducer, applyMiddleware(thunk));
