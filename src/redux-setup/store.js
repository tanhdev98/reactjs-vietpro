import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./reducers/cart"
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: "tanhdev98",
    storage,
}

const persistedCartReducer = persistReducer(persistConfig, cartReducer);

const store = configureStore({
    reducer: {
        Cart: persistedCartReducer,
    },
});

export const persistor = persistStore(store);
export default store;