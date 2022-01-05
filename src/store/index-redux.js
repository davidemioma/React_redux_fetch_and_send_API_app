import { configureStore } from "@reduxjs/toolkit";
import cartBtnSlice from "./cart-btn";
import cartSlice from "./cart-slice";

const store = configureStore({
  reducer: { cartBtn: cartBtnSlice.reducer, cart: cartSlice.reducer },
});

export const cartBtnActions = cartBtnSlice.actions;

export const cartActions = cartSlice.actions;

export default store;
