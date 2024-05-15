import { createSlice } from "@reduxjs/toolkit"

export const loginUser=createAsyncThunk(
    'user/loginUser',
    async(userCredentials)=>{
        const request =
    }
);

const useSlice = createSlice({
    name: "user",
    initialState: {
        loading: false,
        user: null,
        error: null
    }
})

export default useSlice.reducer;