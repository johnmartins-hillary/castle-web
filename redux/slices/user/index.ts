import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
    user: any; // Update this with your user data type
    authorization: string | null;
}

const initialState: UserState = {
    user: null,
    authorization: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<{ user: any }>) => {
            localStorage.setItem("user", JSON.stringify(action.payload.user))
            state.user = action.payload.user;
        },
        setToken: (state, action: PayloadAction<{ authorization: any }>) => {
            localStorage.setItem("authorization", JSON.stringify(action.payload.authorization));
            state.authorization = action.payload.authorization;
        },
        clearUser: (state) => {
            state.user = null;
            state.authorization = null;
        },
    },
});

export const { setUser, setToken, clearUser } = userSlice.actions;
export default userSlice.reducer;
