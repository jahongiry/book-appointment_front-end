import { createSlice } from "@reduxjs/toolkit";

const initialTestState = {
  id: 0,
  carImage:
    "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/homepage/families-gallery/2022/04_12/family_chooser_tecnica_m.png",
  name: "test",
  alt: "testalt",
  description: "testdescription",
  price: "1200",
};
/* eslint-disable no-param-reassign */
const mainpageSlice = createSlice({
  name: "mainpage",
  initialState: initialTestState,
  reducers: {
    moveToDetailsPage(state, action) {
      state.id = action.payload.id;
      state.carImage = action.payload.carImage;
      state.name = action.payload.name;
      state.description = action.payload.description;
      state.price = action.payload.price;
    },
  },
});

export const mainpageActions = mainpageSlice.actions;

export default mainpageSlice;
