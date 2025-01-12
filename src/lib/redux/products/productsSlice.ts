import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { ProductType } from "../../types/productType";
import { getProducts } from "./operations";

interface ProductsStateType {
  products: [] | ProductType[];
  isLoading: boolean;
  error: null | string;
}

const initialState: ProductsStateType = {
  products: [],
  isLoading: false,
  error: null,
};
const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })

      .addCase(
        getProducts.fulfilled,
        (state, action: PayloadAction<ProductType[]>) => {
          state.products = action.payload;
          state.isLoading = false;
          state.error = null;
        },
      )

      .addCase(getProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload?.message || "Failed to fetch products";
      });
  },
});

export const productsReducer = productsSlice.reducer;
