import { configureStore , combineReducers } from "@reduxjs/toolkit";
import carsReducer from "./mainpage_reducer";

const rootReducer = combineReducers({
  cars: carsReducer,
})

const store = configureStore({
 reducer: rootReducer
});

export default store;
