import { UserProfileProps } from "@/lib/types";
import { createSlice } from "@reduxjs/toolkit";

const initialState: UserProfileProps = {
    name: "",
    username: "",
    dateofbirth: "",
    country: "",
    state: "",
    bio: "",
    rate: "",
    profile_image: ""
}


const UserProfileSlice = createSlice({
    name: "user-profile-slice",
    initialState,
    reducers: {
        setNameHandler: (state, { payload }) => {
            state.name = payload
        },
        setUserNameHandler: (state, { payload }) => {
            state.username = payload
        },
        setDobHandler: (state, { payload }) => {
            state.dateofbirth = payload
        },
        setCountryHandler: (state, { payload }) => {
            state.country = payload
        },
        setStateHandler: (state, { payload }) => {
            state.state = payload
        },
        setBioHandler: (state, { payload }) => {
            state.bio = payload
        },
        setRateHandler: (state, { payload }) => {
            state.rate = payload
        },
        setProfilePicHandler: (state, { payload }) => {
            state.profile_image = payload
        },
    }
})


export const { setNameHandler, setBioHandler, setCountryHandler, setDobHandler, setRateHandler, setStateHandler, setUserNameHandler,setProfilePicHandler } = UserProfileSlice.actions


export default UserProfileSlice.reducer

