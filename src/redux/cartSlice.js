import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cartList: [],
    },
    reducers: {
        addProduct: (state, action) => {
            const { id } = action.payload;
            const productIndex = state.cartList.findIndex((p) => p.id === id);
            
            if (productIndex !== -1) {
                state.cartList[productIndex].amount += 1;
            } else {
                state.cartList.push({ ...action.payload, amount: 1 });
            }
        },
        removeProduct: (state, action) => {
            const { id } = action.payload;
            const productIndex = state.cartList.findIndex((p) => p.id === id);
            
            if (productIndex !== -1) {
                state.cartList[productIndex].amount -= 1;
                if (state.cartList[productIndex].amount <= 0) {
                    state.cartList.splice(productIndex, 1);
                }
            }
        },
        deleteProduct: (state, action) => {
            state.cartList = state.cartList.filter(p => p.id !== action.payload);
        },
        deleteAllProducts: (state) => {
            state.cartList = []; 
        }
    }
});

export const { addProduct, removeProduct, deleteProduct, deleteAllProducts } = cartSlice.actions;

export default cartSlice.reducer;