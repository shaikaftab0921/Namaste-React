import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:'cart',
    initialState:{
        items:[],
        totalAmount: 0,
    },
    reducers:{
        addItem:(state,action) =>{
             state.items.push(action.payload);
             const {price}=action.payload;
             state.totalAmount+=price;
        },
        clearCart:(state)=>{
            state.items=[];
        }
    }
});

export const { addItem, clearCart }=cartSlice.actions;
export default cartSlice.reducer;