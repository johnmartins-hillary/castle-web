import { BASE_URL } from "@/constants"
import { UserDataProps } from "@/lib/types";
import { IGenericResponse, SignInProps, SignUpProps } from "@/redux/types"
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { userApi } from "../user";


export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({
        baseUrl: `${BASE_URL}auth/`,
    }),
    endpoints: (builder) => ({
        signUp: builder.mutation<void, SignUpProps>({
            query: (payload) => ({
                url: "register",
                method: "POST",
                body: payload,
                mode: "cors",
                headers: {
                    'Content-type': 'application/json; charset=UTF-8'
                }
            }),
            // transformResponse: (result: { data: { user: UserDataProps } }) => {
            //     result.data.user
            // },
            // async onQueryStarted(args, { dispatch, queryFulfilled }) {
            //     try {
            //         const { data } = await queryFulfilled;
            //         dispatch(setUser(data))
            //     } catch (error) {
            //         console.log("Sign Up Error",error)
            //     }
            // }
        }),
        signInUser: builder.mutation<{ access_token: string, status: string }, SignInProps>({
            query: (payload) => ({
                url: "login",
                method: "POST",
                body: payload,
                mode: "cors",
                headers: {
                    'Content-type': 'application/json; charset=UTF-8'
                }
            }),
            async onQueryStarted(args, { dispatch, queryFulfilled }) {
                try {
                    await queryFulfilled;
                    await dispatch(userApi.endpoints.getUserDetails.initiate(null))
                } catch (error) {
                    console.log("Login User error", error)
                }
            }
        })
    })
})


export const { useSignUpMutation, useSignInUserMutation } = authApi

