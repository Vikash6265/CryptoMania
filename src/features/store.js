import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice";
import coinReducer from "./coin/coinSlice";
import cartReducer from "./cart/cartSlice";

const store = configureStore({
    reducer : {
        auth : authReducer,
        coins : coinReducer,
        cart : cartReducer,
    }
});

export default store;