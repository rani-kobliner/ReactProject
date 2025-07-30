import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchData } from "../api";

export const fetchDataAsyncAction = createAsyncThunk("products/fetchData", async () => {
    const data = await fetchData();
    return data.products;
}
);

