import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const appStore = configureStore({
  //big reducer
  reducer: {
    //small reducers
    cart: cartReducer,
  },
});

export default appStore;
