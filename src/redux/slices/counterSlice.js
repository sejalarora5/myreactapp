import { createSlice } from '@reduxjs/toolkit'

export const initialStateValues = {
  counter: 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState: initialStateValues,
  reducers: {
    increment: (state) => {
      state.counter += 1
    },
    decrement: (state) => {
      state.counter -= 1
    },
  },
})

export const { increment, decrement, } = counterSlice.actions
export const counterReducer = counterSlice.reducer;
