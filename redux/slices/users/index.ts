import { AllUsersProps } from "@/lib/types";
import { createSlice } from "@reduxjs/toolkit";

const initialState: AllUsersProps = {
    keyword: "",
    users: []
}


const UserSlice = createSlice({
    name: "searched-users-slice",
    initialState,
    reducers: {
        searchUsersHandler: (state, { payload }) => {
            state.keyword = payload
        },
        setUsersHandler: (state, { payload }) => {
            state.users = payload
        },
    }
})



export const { searchUsersHandler, setUsersHandler } = UserSlice.actions;


export default UserSlice.reducer