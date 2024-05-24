import { createSlice } from "@reduxjs/toolkit";
import { login, logout, refreshUser, register } from "./operations";

const authSlice = createSlice({
    name:'auth',
    initialState:{
        user: {
            name: null,
            email: null,
        },
        token: null,
        isLoggedIn: false,
        isRefreshing: false,
        error: null,
    },
    extraReducers: builder => builder.addCase(register.pending, (state) => {
        state.isLoggedIn = false;
        state.error = null;
        state.isRefreshing = false;
    }).addCase(register.fulfilled, (state, action) =>{
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.user.name = action.payload.user.name;
        state.user.email = action.payload.user.email;
    }).addCase(register.rejected, (state,action) => {
        state.isLoggedIn = false;
        state.isRefreshing = false;
        state.error = action.payload;
    }).addCase(login.pending, (state) => {
        state.error = null;
        state.isLoggedIn = false;
        state.isRefreshing = false;
    }).addCase(login.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.error = null;
        state.isLoggedIn = true;
        state.token = action.payload.token;
        state.error = null;
    }).addCase(login.rejected, (state, action) => {
        state.isLoggedIn = false;
        state.isRefreshing = false;
        state.error = action.payload;
    }).addCase(logout.pending, (state) =>{
        state.isLoggedIn = false;
        state.error = null;
    }).addCase(logout.fulfilled, (state) =>{
        state.user = {
            name: null,
            email: null,
        };
        state.token = null;
        state.isLoggedIn = false;
        state.error = null;
    }).addCase(logout.rejected, (state, action) =>{
        state.error = action.payload;
        state.isLoggedIn = false;
        state.isRefreshing = false;
    }).addCase(refreshUser.pending, (state) =>{
        state.isRefreshing = true;
        state.isLoggedIn = false;
        state.error = null;
    }).addCase(refreshUser.fulfilled, (state, action)=>{
        state.isRefreshing = false;
        state.user = action.payload;
        state.isLoggedIn = true;
    }).addCase(refreshUser.rejected, (state, action)=>{
        state.isRefreshing = false;
        state.isLoggedIn = false;
        state.error = action.payload;
    })
})

export const authReducer = authSlice.reducer;