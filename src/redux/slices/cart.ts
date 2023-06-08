import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartState {
  cart: any;
  status: string;
}

const initialState: CartState = {
  cart: JSON.parse(localStorage.getItem("cart") ?? "[]") ?? [],
  status: "",
};

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<any>) {
      const itemIndex = state.cart.findIndex(
        (item: any) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.cart[itemIndex].qty += 1;
      } else {
        const product = { ...action.payload, qty: 1 };
        state.cart.push(product);
      }

      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    removeFromCart(state, action: PayloadAction<any>) {
      const updatedCart = state.cart.filter(
        (p: any) => p.id !== action.payload.id
      );
      state.cart = updatedCart;
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    removeAll(state) {
      state.cart = [];
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },

    reduceProduct(state, action: PayloadAction<any>) {
      const itemIndex = state.cart.findIndex(
        (item: any) => item.id === action.payload.id
      );

      if (state.cart[itemIndex].qty > 1) {
        state.cart[itemIndex].qty -= 1;
      } else if (state.cart[itemIndex].qty === 1) {
        const updatedCart = state.cart.filter(
          (p: any) => p.id !== action.payload.id
        );
        state.cart = updatedCart;
      }
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    incrementProduct(state, action: PayloadAction<any>) {
      const itemIndex = state.cart.findIndex(
        (item: any) => item.id === action.payload.id
      );
      if (state.cart[itemIndex].qty >= 1) {
        state.cart[itemIndex].qty += 1;
      }
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  removeAll,
  reduceProduct,
  incrementProduct,
} = CartSlice.actions;
export default CartSlice.reducer;
