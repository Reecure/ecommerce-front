import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { RootState } from "../store";
import getAllProduct from "../../utils/queries/get-all-products";
import { ProductConnection } from "../../utils/shema";
import fetchApi from "../../utils/fetch-api";
import { normalizeProduct } from "../../utils/normalize";
import { IProduct } from "../../@types/product";

type ReturnType = { products: ProductConnection };

export const fetchProdsById = createAsyncThunk(
  "users/fetchProdsByStatus",
  async (): Promise<IProduct[]> => {
    const { data } = await fetchApi<ReturnType>({ query: getAllProduct });
    const products =
      data.products.edges.map(({ node: product }) => {
        return normalizeProduct(product);
      }) ?? [];
    return products;
  }
);

interface prodsSliceState {
  prods: IProduct[];
  status: "loading" | "success" | "error";
}

const initialState: prodsSliceState = {
  prods: [],
  status: "loading",
};

const prodsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builer) => {
    builer.addCase(fetchProdsById.pending, (state) => {
      state.prods = [];
      state.status = "loading";
    });
    builer.addCase(fetchProdsById.fulfilled, (state, action) => {
      state.prods = action.payload;
      state.status = "success";
    });
    builer.addCase(fetchProdsById.rejected, (state) => {
      state.prods = [];
      state.status = "error";
    });
  },
});

export const selectProds = (state: RootState) => state.products;

export default prodsSlice.reducer;
