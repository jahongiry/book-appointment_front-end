import { createSlice } from '@reduxjs/toolkit';

const initialTestState = { number: 1 };
/* eslint-disable no-param-reassign */
const testSlice = createSlice({
  name: 'test',
  initialState: initialTestState,
  reducers: {
    testing(state) {
      state.number += 1;
    },
  },
});
/* eslint-enable no-param-reassign */
export const testActions = testSlice.actions;

export default testSlice.reducer;
