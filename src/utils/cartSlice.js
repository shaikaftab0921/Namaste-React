import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:'cart',
    initialState:{
        items:[],
        totalAmount: 0,
    },
    reducers:{
        addItem:(state,action) =>{
            const{id,count, price }=action.payload;
             state.items.map((item)=>{
                console.log(item);
                    if(id===item.id){
                        item.count=count;
                        state.totalAmount+=price;
                        return;
                    }
             });
             console.log('--->',state.items);
             state.items.push(action.payload);
             state.totalAmount+=price;
        },
        removeItem:(state,action)=>{
            
        },
        clearCart:(state)=>{
            state.items=[];
        }
    }
});

export const { addItem, clearCart, removeItem }=cartSlice.actions;
export default cartSlice.reducer;