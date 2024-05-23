import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authService from "./authService";

const userExits = JSON.parse(localStorage.getItem("user"));

const authSlice = createSlice({
    name : "auth",
    initialState : {
        user : userExits ? userExits : null,
        isLoading : false,
        isError : false,
        isSuccess : false,
        message : "",
    },
    reducers : {},
    extraReducers : (builder) =>{
        builder
        .addCase(registerUser.pending,(state,action)=>{
            state.isLoading = true;
            state.isError = false;
            state.isSuccess = false;
            state.message = "";
        })
        .addCase(registerUser.fulfilled,(state,action)=>{
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            state.user = action.payload;
            state.message = "";
        })
        .addCase(registerUser.rejected,(state,action)=>{
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.message = action.payload;
        })

        .addCase(logInUser.pending,(state,action)=>{
            state.isLoading = true;
            state.isError = false;
            state.isSuccess = false;
            state.message = "";
        })
        .addCase(logInUser.fulfilled,(state,action)=>{
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            state.user = action.payload;
            state.message = "";
        })
        .addCase(logInUser.rejected,(state,action)=>{
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.message = action.payload;
        })

        .addCase(logOutUser.fulfilled,(state,action)=>{
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = false;
            state.message = "";
            state.user = null;
        });
    }
});

export default authSlice.reducer;

export const registerUser = createAsyncThunk("REGISTER/USER",async(formData,thunkAPI)=>{
   try {
    return await authService.register(formData);
   } catch (error) {
    const message = error.response.data.message;
    return thunkAPI.rejectWithValue(message);
   }
});

export const logInUser = createAsyncThunk("LOGIN/USER",async(formData,thunkAPI)=>{
    console.log(formData);
    try {
        return await authService.login(formData);
    } catch (error) {
       const message = error.response.data.message;
       return thunkAPI.rejectWithValue(message);
    }
});

export const logOutUser = createAsyncThunk("LOGOUT/USER",async()=>{
    localStorage.removeItem("user");
})