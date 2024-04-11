import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "@/constants";
import { GoogleSignUpProps } from "@/lib/types";
import { CarsleApiRequest } from "../../../utilities/client-request";

// export const getGoogleSignUpLink = createAsyncThunk(
//     "user/auth/google-sign-up",
//     async (props: GoogleSignUpProps, { rejectWithValue }) => {
//         try {
//             const response = await fetch(`${BASE_URL}auth/google`);
//             if (!response.ok) {
//                 throw new Error("Failed to fetch Google sign-up link");
//             }

//             const data = await response.json();
//             console.log("Google Response", data);

//             return data; // This will be the payload of the action when fulfilled
//         } catch (error: any) {
//             console.error("Google Error", error);
//             return rejectWithValue(error.message || "Failed to fetch Google sign-up link");
//         }
//     }
// );

export const getGoogleSignUpLink = async (props: GoogleSignUpProps) => {
    try {

    } catch (error) {
        const response = await fetch(`${BASE_URL}auth/google`);
        if (!response.ok) {
            throw new Error("Failed to fetch Google sign-up link");
        }

        const data = await response.json();
        props.setLink(data)
    }
}

export const googleSignUpCallback = createAsyncThunk("user/auth/google-sign-up-callback", async () => {
    try {

    } catch (error) {
        console.error("Google Error", error);
    }
})

