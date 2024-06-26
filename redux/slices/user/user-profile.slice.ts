import { UserProfileProps } from "@/lib/types";
import { createSlice } from "@reduxjs/toolkit";

const initialState: UserProfileProps = {
    name: "",
    username: "",
    dateofbirth: "",
    email: "",
    country: "",
    state: "",
    bio: "",
    rate: "",
    profile_image: "",
    gender: ""
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
        setEmailHandler: (state, { payload }) => {
            state.email = payload
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
        setGenderHandler: (state, { payload }) => {
            state.gender = payload
        },
        // setCategories: (state, { payload }) => {
        //     state.list_of_categories = payload
        // },
    }
})


export const { setNameHandler, setBioHandler, setCountryHandler, setDobHandler, setRateHandler, setStateHandler, setUserNameHandler, setProfilePicHandler, setEmailHandler, setGenderHandler } = UserProfileSlice.actions


export default UserProfileSlice.reducer

