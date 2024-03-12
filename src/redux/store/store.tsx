import { applyMiddleware, createStore } from "redux";
import fetchUserDataReducer from "../reducers/fetchUserDataReducer";
import { thunk } from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "../slices/counterSlice";
// const store = createStore(fetchUserDataReducer, applyMiddleware(thunk))
export const store = configureStore({
    reducer: {
      counter: counterReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>

export default store
