import { createSlice } from "@reduxjs/toolkit";
import { addContact, deleteContact, getContacts } from "./operations";
import { logout } from "../auth/operations";

const contactsSlice = createSlice({
    name:'contacts',
    initialState: {
        items: [],
        loading: false,
        error: null
      },
      extraReducers: builder => builder.addCase(getContacts.fulfilled, (state, action)=>{
        state.loading = false;
        state.error = null;
        state.items = action.payload;
      }).addCase(getContacts.pending, (state) =>{
        state.loading = true;
        state.error = null;
      }).addCase(addContact.fulfilled, (state, action) => {
        state.items.push(action.payload);
        state.error = null;
        state.loading = false;
      }).addCase(getContacts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      }).addCase(addContact.pending, (state) => {
        state.error = null;
        state.loading = true;
      }).addCase(deleteContact.fulfilled, (state, action) => {
        state.error = null;
        state.loading = false;
        const idx = state.items.findIndex(item => item.id === action.payload.id);
        state.items.splice(idx, 1);
      }).addCase(addContact.rejected, (state, action) =>{
        state.loading = false;
        state.error = action.payload;
      }).addCase(deleteContact.pending, (state) => {
        state.loading = true;
        state.error = null;
      }).addCase(logout.fulfilled, (state,action)=>{
        state.items = [];
        state.loading = false;
        state.error = false;
      }).addCase(deleteContact.rejected, (state,action) => {
        state.loading = false;
        state.error = action.payload;
      }).addCase(logout.pending, (state)=>{
        state.loading = false;
        state.error = null;
      }).addCase(logout.rejected, (state,action) => {
        state.loading = false;
        state.error = action.payload;
      })
});

export const contactsReducer = contactsSlice.reducer;
