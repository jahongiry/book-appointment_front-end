import { configureStore } from '@reduxjs/toolkit';
import testingReducer from './test_reducer';

const store = configureStore({
  reducer: { test: testingReducer },
});

export default store;
