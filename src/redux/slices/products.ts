import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

const base_url = "https://fakestoreapi.com/";

interface ProductState {
  status: string;
  products: any[];
}

const initialState: ProductState = {
  status: "",
  products: [],
};

export const fetchProducts = createAsyncThunk("fetch/products", async () => {
  const response = await axios.get(`${base_url}products`);
  return response.data;
});

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "idle";
      })
      .addCase(
        fetchProducts.fulfilled,
        (state, action: PayloadAction<any[]>) => {
          state.products = action.payload;
          state.status = "loading";
        }
      )
      .addCase(fetchProducts.rejected, (state) => {
        state.status = "error";
      });
  },
});

export default productSlice.reducer;
