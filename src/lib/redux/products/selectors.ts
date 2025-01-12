import { createSelector } from "@reduxjs/toolkit";

import { ProductType } from "../../types/productType";
import { RootState } from "../store";

type ProductsResultType = [] | ProductType[];

export const selectProducts = (state: RootState): ProductsResultType =>
  state.products.products;

export const selectIsLoading = (state: RootState): boolean =>
  state.products.isLoading;

export const selectCategories = createSelector([selectProducts], (products) => {
  return [...new Set(products.map((product) => product.category))];
});
