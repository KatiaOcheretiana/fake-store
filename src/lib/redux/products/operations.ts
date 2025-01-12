import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";

import { api } from "../../axiosConfig/api";
import { ProductType } from "../../types/productType";

export const getProducts = createAsyncThunk<
  ProductType[],
  void,
  { rejectValue: { message: string } }
>("products/getProducts", async (_, thunkAPI) => {
  try {
    const res = await api.get<{ products: ProductType[] }>("/products");
    return res.data.products;
  } catch (err) {
    const error = err as AxiosError<{ message: string }>;
    return thunkAPI.rejectWithValue({
      message: error.response?.data?.message || "An error occurred",
    });
  }
});
