import { configureStore , combineReducers } from "@reduxjs/toolkit";
import carsReducer from "./mainpage_reducer";
import { userReducer } from "./user_reducer";

const rootReducer = combineReducers({
  cars: carsReducer,
  user: userReducer,

})

const store = configureStore({
 reducer: rootReducer
});

export default store;
