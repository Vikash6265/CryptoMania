import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchCoin, fetchTrendingCoin } from "./coinService";

const coinSlice = createSlice({
    name : "coins",
    initialState : {
        coins : [],
        coin : null,
        isLoading : false,
        isError : false,
        isSuccess : false
    },
    reducers : {},
    extraReducers : (builder) =>{
        builder
        .addCase(fetchall.pending,(state,action)=>{
            state.isLoading = true;
            state.isError = false;
            state.isSuccess = false;
        })
        .addCase(fetchall.fulfilled,(state,action)=>{
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            state.coins = action.payload;
        })
        .addCase(fetchall.rejected,(state,action)=>{
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
        })

        .addCase(fetchSingle.pending,(state,action)=>{
            state.isLoading = true;
            state.isError = false;
            state.isSuccess = false;
        })
        .addCase(fetchSingle.fulfilled,(state,action)=>{
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            state.coin = action.payload;
        })
        .addCase(fetchSingle.rejected,(state,action)=>{
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
        })
    }
});

export default coinSlice.reducer;

export const fetchall = createAsyncThunk("FETCH/ALLTRENDING",async()=>{
    try {
        return await fetchTrendingCoin();
    } catch (error) {
        console.log(error);
    }
});

export const fetchSingle = createAsyncThunk("FETCH/SINGLECOIN",async(id)=>{
    console.log(id);
    try {
        return await fetchCoin(id);
    } catch (error) {
        console.log(error);
    }
});