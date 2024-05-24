import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { useSelector } from "react-redux";
import { selectToken } from "./selectors";
import toast from "react-hot-toast";


axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const setAuthHeader = (token) => {
    axios.defaults.headers.common['Authorization']=`Bearer ${token}`;
}

const deleteAuthHeader = () => {
    axios.defaults.headers.post['Authorization']=``;
}
export const register = createAsyncThunk('auth/register', async (newUser, thunkAPI)=>{
try {
    const response = await axios.post('/users/signup', newUser);
    setAuthHeader(response.data.token);
    console.log(response)
    return response.data;
} catch (error) {
    toast.error('Something gone wrong...');
    thunkAPI.rejectWithValue(error.message);
}
});

export const login = createAsyncThunk('auth/login', async (user, thunkAPI)=> {
    try {
        const response = await axios.post('/users/login', user);
        setAuthHeader(response.data.token);
        return response.data;
    } catch (error) {
        thunkAPI.rejectWithValue(error.message);
    }
});

export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) =>{
    try {
        const response = await axios.post('/users/logout');
        deleteAuthHeader();
    } catch (error) {
        thunkAPI.rejectWithValue(error.message)
    }
})

export const refreshUser = createAsyncThunk('auth/refresh', async (_, thunkAPI)=>{
    const reduxState = thunkAPI.getState();
    const currentToken = reduxState.auth.token;
    setAuthHeader(currentToken);
    const response = await axios.get('/users/current');
    return response.data;
}, {
    condition(_, thunkAPI) {
        const reduxState = thunkAPI.getState();
        return reduxState.auth.token !== null;
    }
});

