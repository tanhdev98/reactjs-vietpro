import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    customer: null,
    accessToken: null,
}

const authReducer = createSlice({
    name: "authReducer",
    initialState,
    reducers: {
        loginSuccess: (state, action) => {
            state.accessToken = action.payload.accessToken;
            state.customer = action.payload.customer;
        },
        logout: (state, action) => {
            state.accessToken = null;
            state.customer = null;
        },
        updateCustomerInfo: (state, action) => {
            state.customer = { ...state.customer, ...action.payload };
        },
    }
})

export const { loginSuccess, logout, updateCustomerInfo } = authReducer.actions;
export default authReducer.reducer;