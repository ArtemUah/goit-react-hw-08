import { createAsyncThunk, createSelector } from "@reduxjs/toolkit";
import axios from "axios";

export const getContacts = createAsyncThunk('getcontacts/getAll', async (_, thunkAPI) => {
    try {
        const response = await axios.get('https://connections-api.herokuapp.com/contacts');
        return response.data;
    } catch (error) {
        thunkAPI.rejectWithValue(error.message);
    }
}, {
    condition (_,thunkAPI) {
        const reduxState = thunkAPI.getState();
        return reduxState.auth.token !== null;
    }
});

export const addContact = createAsyncThunk('https://connections-api.herokuapp.comcontacts/add', async (newContact, thunkAPI) => {
try {
    const response = await axios.post('https://connections-api.herokuapp.com/contacts', newContact);
    return response.data;
} catch (error) {
    thunkAPI.rejectWithValue(error.message)
}
});

export const deleteContact = createAsyncThunk('https://connections-api.herokuapp.comcontacts/delete', async (id, thunkAPI) =>{
    try {
        const response = await axios.delete(`https://connections-api.herokuapp.com/contacts/${id}`);
        return response.data;
    } catch (error) {
        thunkAPI.rejectWithValue(error.message)
    }
})

