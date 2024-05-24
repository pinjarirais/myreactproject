import { createAsyncThunk, createSlice, isRejectedWithValue } from "@reduxjs/toolkit";

export const getalluser = createAsyncThunk("gitusers", async (args, {isRejectedWithValue})=>{
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    try {
        const data = response.json();
        return data;
    } catch (error) {
        return isRejectedWithValue("API Call Rejected")
    }
});

export const apicallSlice = createSlice({
    name: "usercall",
    initialState:{
        users: [],
        loading: false,
        error: null,
    },
    extraReducers: (builder) => {
        builder.addCase(getalluser.pending, (state) => {
          state.loading = true;  
        })
        .addCase(getalluser.fulfilled, (state, action) =>{
            state.loading = false; 
            state.users = action.payload;
        })
        .addCase(getalluser.rejected, (state, action) =>{
            state.loading = false;
            state.error = action.payload;  
        })
    },


});

export default apicallSlice.reducer;