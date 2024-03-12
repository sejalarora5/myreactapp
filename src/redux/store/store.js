import { applyMiddleware, createStore } from "redux";
import fetchUserDataReducer from "../reducers/fetchUserDataReducer";
import { thunk } from "redux-thunk";

const store = createStore(fetchUserDataReducer, applyMiddleware(thunk))
export default store