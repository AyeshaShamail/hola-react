import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    // actions are like small API's which are used to communicate with the redux store
    // addItem is an action and the function is reducer which is taking two params state and action and now it will modify our state based on the action

    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    // we don't need action in below reducers
    removeItem: (state) => {
      state.items.pop();
    },
    clearCart: (state) => {
      state.items.length = 0;
    },
  },
});

export default cartSlice;
