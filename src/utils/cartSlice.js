import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    // actions are like small API's which are used to communicate with the redux store
    // addItem is an action and the function is reducer which is taking two params state and action and now it will modify our state based on the action

    // we're mutating our store/directly modifying our store
    addItem: (state, action) => {
      // Vanilla Redux (older redux) => don't mutate the state , return was mandatory earlier
      //const newState = [...state];
      //newState.items.push(action, payload);
      //return newState;

      // Redux Toolkit - we have to mutate the state in this according to the action, returning is not mandatory
      //BTS - redux is mutating itself and not asking the developers to do it - uses Immer BTS
      state.items.push(action.payload);
    },
    // we don't need action in below reducers
    removeItem: (state) => {
      state.items.pop();
    },
    clearCart: (state) => {
      // RTK says either mutate the existing state or return a new state
      // state.items.length = 0; // mutate the state which is also state = []
      // return a new state
      return { items: [] }; //- this new array array will be replaced inside originalstate

      // state = [] doesn't work, because we're just changing the reference here and not modifying(mutating) the state- go through Immer.js for more details. Here we're not changing the original state, here we're changing the local state only
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
