// import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios'

const BASE_URL = "http://127.0.0.1:3000/api/v1"

// action creators  

const ALL_CARS = 'ALL_CARS';
const SINGLE_CAR = 'SINGLE_CAR';
const ADD_CAR = 'ADD_CAR';
const DELETE_CAR = 'DELETE_CAR'

// Initial state

const initialState = {
 cars: [],
 car: {}
};

// get data from api    

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



export const addCar = async ({ name, description, price, image , userid }) => {
  try {
    const response = await axios.post(`${BASE_URL}/add_car`, {
      name: name,
      description: description,
      owner: userid,
      cost: price,
      image_url: image,
    });
  } catch (error) {
    console.log(error);
  }
}

export const deleteCar = async (id) => {
  const response = await axios.delete(`${BASE_URL}/cars/${id}`)
  return response.data;
}
// actions

export const fetchSingleCar = (id) => {
  return async (dispatch) => {
    const response = await fetchCarDetails(id);
    dispatch({
      type: SINGLE_CAR,
      payload: response
    })
  }
}

export const deleteCarAction = (id) => {
  return async (dispatch) => {
    await deleteCar(id);
    dispatch({
      type: DELETE_CAR
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

export const createNewCar = (data) => async (dispatch) => {
  const response = await addCar(data);
  dispatch({
    type: ADD_CAR,
    payload: response
  })
}

// Reducer

const carsReducer = (state = initialState , {type , payload}) => {
      switch (type) {
        case ALL_CARS:
          return {
            ...state, 
             cars: payload
          }
  
        case SINGLE_CAR:
          return {
            ...state.car,
            car: payload
          }

        case ADD_CAR:
           return {
            ...state , payload
           }   

          default: 
          return state
      }
}


export default carsReducer
