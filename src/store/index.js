import { configureStore , combineReducers, applyMiddleware } from "@reduxjs/toolkit";
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import carsReducer from "./mainpage_reducer";
import { userReducer } from "./user_reducer";
import reservationReducer from "./reservationReducer";

const rootReducer = combineReducers({
  cars: carsReducer,
  user: userReducer,
  reservations: reservationReducer,
})

const store = configureStore({
 reducer: rootReducer
} , 
applyMiddleware(thunk , logger));

export default store;
