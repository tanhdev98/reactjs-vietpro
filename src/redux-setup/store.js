import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./reducers/cart"
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import authReducer from "./reducers/auth";

const persistConfig = {
    key: "tanhdev98",
    storage,
}

const persistedCartReducer = persistReducer(persistConfig, cartReducer);
const persistedAuthReducer = persistReducer(persistConfig, authReducer);

const store = configureStore({
    reducer: {
        Cart: persistedCartReducer,
        Auth: persistedAuthReducer,
    },
});

export const persistor = persistStore(store);
export default store;