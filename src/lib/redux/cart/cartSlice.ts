import { Draft, PayloadAction, createSlice } from "@reduxjs/toolkit";

export const storageKey = "cart";

type CartProductsType = {
  _id: string;
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
    addToCart: (state: Draft<CartSliceType>, action: PayloadAction<string>) => {
      state.cartProducts.push({ _id: action.payload, amount: 1 });
    },
    deleteFromCart: (
      state: Draft<CartSliceType>,
      action: PayloadAction<string>,
    ) => {
      state.cartProducts = state.cartProducts.filter(
        (product) => product._id !== action.payload,
      );
    },
    increaceAmount: (
      state: Draft<CartSliceType>,
      action: PayloadAction<string>,
    ) => {
      state.cartProducts = state.cartProducts.map((product) =>
        product._id === action.payload
          ? { ...product, amount: product.amount + 1 }
          : product,
      );
    },
    decreaceAmount: (
      state: Draft<CartSliceType>,
      action: PayloadAction<string>,
    ) => {
      state.cartProducts = state.cartProducts.map((product) =>
        product._id === action.payload
          ? { ...product, amount: product.amount - 1 }
          : product,
      );
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const { addToCart, deleteFromCart, increaceAmount, decreaceAmount } =
  cartSlice.actions;
