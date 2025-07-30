import { createSlice } from "@reduxjs/toolkit";
import { fetchDataAsyncAction } from "./thunk";

const productsSlice = createSlice({
    name: "products",
    initialState: {
        productsList: [],
        loading: false,
    },
    reducers: {      

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchDataAsyncAction.pending, (state) => {
                state.loading = true;
                state.productsList = [];
            })
            .addCase(fetchDataAsyncAction.fulfilled, (state, action) => {
                state.loading = false;
                state.productsList = action.payload;
            })
            .addCase(fetchDataAsyncAction.rejected, (state) => {
                state.loading = false;
                state.productsList = [];
            });
    }
});

export default productsSlice.reducer;