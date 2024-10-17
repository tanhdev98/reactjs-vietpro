import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./reducers/cart"

const store = configureStore({
    reducer: {
        Cart: cartReducer,
    },
});
export default store; 
