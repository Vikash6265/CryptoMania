import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name : "cart",
    initialState : {
        cartItems : [],
    },
    reducers : {
        addToCart : (state,action) => {
            return {
                ...state,
                cartItems : [action.payload,...state.cartItems]
            }
        },

        removeCart : (state,action) =>{
            return {
                ...state,
                cartItems : state.cartItems.filter((item)=> item.id !== action.payload)
            }
        }
    },
    extraReducers : (builder) =>{}
});

export const {addToCart,removeCart} = cartSlice.actions;
export default cartSlice.reducer;