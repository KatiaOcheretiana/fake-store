import { Draft, PayloadAction, createSlice } from "@reduxjs/toolkit";

export const storageKey = "cart";

type CartProductsType = {
  id: number;
  amount: number;
};

type CartSliceType = {
  cartProducts: CartProductsType[];
};

const getInitialCart = (): CartProductsType[] => {
  const cartProducts = localStorage.getItem(storageKey);
  return cartProducts !== null ? JSON.parse(cartProducts) : [];
};

const initialState: CartSliceType = {
  cartProducts: getInitialCart(),
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state: Draft<CartSliceType>, action: PayloadAction<number>) => {
      state.cartProducts.push({ id: action.payload, amount: 1 });
    },
    deleteFromCart: (
      state: Draft<CartSliceType>,
      action: PayloadAction<number>,
    ) => {
      state.cartProducts = state.cartProducts.filter(
        (product) => product.id !== action.payload,
      );
    },
    increaceAmount: (
      state: Draft<CartSliceType>,
      action: PayloadAction<number>,
    ) => {
      state.cartProducts = state.cartProducts.map((product) =>
        product.id === action.payload
          ? { ...product, amount: product.amount + 1 }
          : product,
      );
    },
    decreaceAmount: (
      state: Draft<CartSliceType>,
      action: PayloadAction<number>,
    ) => {
      state.cartProducts = state.cartProducts.map((product) =>
        product.id === action.payload
          ? { ...product, amount: product.amount - 1 }
          : product,
      );
    },

    cleanCart: (state: Draft<CartSliceType>) => {
      state.cartProducts = [];
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const {
  addToCart,
  deleteFromCart,
  increaceAmount,
  decreaceAmount,
  cleanCart,
} = cartSlice.actions;
