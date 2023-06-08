import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "./slices/products";
import CartReducer from "./slices/cart";

const store = configureStore({
  reducer: {
    products: ProductReducer,
    cartItems: CartReducer,
  },
});

export default store;
