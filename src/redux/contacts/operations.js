import { createAsyncThunk, createSelector } from "@reduxjs/toolkit";
import axios from "axios";
import { selectContacts } from "./selectors";
import { selectFilteredName } from "../filters/selectors";
import { setAuthHeader } from "../auth/operations";

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const getContacts = createAsyncThunk('getcontacts/getAll', async (_, thunkAPI) => {
    try {
        const reduxState = thunkAPI.getState();
        const currentToken = reduxState.auth.token;
        setAuthHeader(currentToken);
        const response = await axios.get('/contacts');
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

export const addContact = createAsyncThunk('contacts/add', async (newContact, thunkAPI) => {
try {
    // const reduxState = thunkAPI.getState();
    // const currentToken = reduxState.auth.token;
    // console.log(currentToken);
    // setAuthHeader(currentToken);
    const response = await axios.post('/contacts', newContact);
    return response.data;
} catch (error) {
    thunkAPI.rejectWithValue(error.message)
}
});

export const deleteContact = createAsyncThunk('contacts/delete', async (id, thunkAPI) =>{
    try {
        const response = await axios.delete(`/contacts/${id}`);
        return response.data;
    } catch (error) {
        thunkAPI.rejectWithValue(error.message)
    }
})

