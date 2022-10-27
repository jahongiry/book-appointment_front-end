import { createSlice } from "@reduxjs/toolkit";

const initialTestState = { number: 1 };

const testSlice = createSlice({
  name: "test",
  initialState: initialTestState,
  reducers: {
    testing(state) {
      state.number++;
    },
  },
});

export const testActions = testSlice.actions;

export default testSlice.reducer;
