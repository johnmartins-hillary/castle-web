import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: []
}

const singleUserSlice = createSlice({
    name: "single-user-slice",
    initialState,
    reducers: {
        setSingleUser: (state, { payload }) => {
            state.data = payload
        }
    }
})


export const { setSingleUser } = singleUserSlice.actions;

export default singleUserSlice.reducer