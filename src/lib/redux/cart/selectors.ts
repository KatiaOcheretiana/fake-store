import { createSelector } from "@reduxjs/toolkit";

import { ProductType } from "../../types/productType";
import { selectProducts } from "../products/selectors";
import { RootState } from "../store";

export const selectCartProductIdAmound = (state: RootState) =>
  state.cart.cartProducts;

export const selectCartProducts = createSelector(
  [selectProducts, selectCartProductIdAmound],
  (products, cartProducts) => {
    const result = products.map((product) => {
      const cartProduct = cartProducts.find(
        (cartProduct: { id: number }) => cartProduct.id === product.id,
      );
      return cartProduct ? { ...product, amount: cartProduct.amount } : null;
    });

    return result.filter((product) => product !== null) as ProductType[];
  },
);

export const selectTotalAmount = createSelector(
  [selectCartProductIdAmound],
  (cartProducts) => {
    return cartProducts.reduce((total, product) => total + product.amount, 0);
  },
);

export const selectTotalPrice = createSelector(
  [selectCartProducts],
  (cartProducts) => {
    const total = cartProducts.reduce((acc, product) => {
      const amount = product.amount || 0;
      return acc + amount * product.price;
    }, 0);

    return total.toFixed(2);
  },
);
