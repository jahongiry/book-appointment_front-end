import { configureStore } from "@reduxjs/toolkit";
import mainpageSlice from "./mainpage_reducer";

const store = configureStore({
  reducer: { mainPage: mainpageSlice.reducer },
});

export default store;
