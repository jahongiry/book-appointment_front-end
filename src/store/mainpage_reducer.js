// import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios'

const BASE_URL = "http://127.0.0.1:3000/api/v1"

// action creators  

const ALL_CARS = 'ALL_CARS';
const SINGLE_CAR = 'SINGLE_CAR';

// Initial state

const initialState = {
 cars: [],
 car: {}
};

// actions     

export const fetchCars = async () => {
    const response = await axios.get(`${BASE_URL}/all_cars`);
    // console.log(response)
    return response.data;
};

export const fetchCarDetails = async (id) => {
  const response = await axios.get(`${BASE_URL}/show_car/${id}`);
  // console.log(response);
  return response.data;
}

// get data from API

export const fetchSingleCar = (id) => {
  return async (dispatch) => {
    const response = await fetchCarDetails(id);
    dispatch({
      type: SINGLE_CAR,
      payload: response
    })
  }
}


export const fetchAllCars = () => (async (dispatch) => {
  const cars = await fetchCars();
  dispatch({
    type: ALL_CARS,
    payload: cars,
  });
});

// Reducer

const carsReducer = (state = initialState , action) => {
      switch (action.type) {
        case ALL_CARS:
          return {
            ...state, 
             cars: action.payload
          }
  
        case SINGLE_CAR:
          return {
            ...state.car,
            car: action.payload
          }

          default: 
          return state
      }
}


export default carsReducer
