// import { createSelector } from "@reduxjs/toolkit";
// import { ProductType } from "../../types/productType";
import { RootState } from "../store";

export const selectCartProductIdAmound = (state: RootState) =>
  state.cart.cartProducts;

// export const selectCartProducts = createSelector(
//   [selectProducts, selectCartProductIdAmound],
//   (products, cartProducts) => {
//     const result = products.map((product) => {
//       const cartBook = cartProducts.find(
//         (cartBook: { _id: string }) => cartBook._id === product._id,
//       );
//       return cartBook ? { ...product, amount: cartBook.amount } : null;
//     });

//     return result.filter((product) => product !== null) as ProductType[];
//   },
// );

// export const selectTotalPrice = createSelector(
//   [selectCartProducts],
//   (products) => {
//     const totalPrice = products.reduce((acc: number, item) => {
//       if (typeof item.amount === "number" && typeof item.price === "string") {
//         acc += item.amount * parseFloat(item.price);
//       }
//       return acc;
//     }, 0);

//     return totalPrice;
//   },
// );
