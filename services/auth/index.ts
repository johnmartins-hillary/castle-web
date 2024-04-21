import { BASE_URL } from "@/constants"
import { UserDataProps } from "@/lib/types";
import { IGenericResponse, SignInProps, SignUpProps } from "@/redux/types"
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { userApi } from "../user";
import { clearUser } from "@/redux/slices/user";


export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({
        baseUrl: `${BASE_URL}auth/`,
        prepareHeaders: (headers, { getState }) => {
            const token = localStorage.getItem("authorization") || null
            if (token) {
                headers.set("Authorization", `Bearer ${JSON.parse(token)}`)
            }
            return headers;
        }
    }),
    endpoints: (builder) => ({
        signUp: builder.mutation<void, SignUpProps>({
            query: (payload) => ({
                url: "register",
                method: "POST",
                body: payload,
                mode: "cors",
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                    'Accept': 'application/json'
                }
            }),
            async onQueryStarted(args, { dispatch, queryFulfilled }) {
                try {
                    await queryFulfilled;
                    await dispatch(userApi.endpoints.getUserDetails.initiate(null))
                } catch (error) {
                    console.log("Sign Up User error", error)
                }
            }
        }),
        signInUser: builder.mutation<{ access_token: string, status: string }, SignInProps>({
            query: (payload) => ({
                url: "login",
                method: "POST",
                body: payload,
                mode: "cors",
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                    'Accept': 'application/json'
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
        }),
        googleAuth: builder.query<void, void>({
            query: () => ({
                url: "google",
                method: "GET",
                mode: "cors",
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                    'Accept': 'application/json'
                }
            }),
            async onQueryStarted(args, { dispatch, queryFulfilled }) {
                try {
                    await queryFulfilled;
                    await dispatch(userApi.endpoints.getUserDetails.initiate(null))
                } catch (error) {
                    console.log("Google Auth User error", error)
                }
            }
        }),
        googleAuthCallBack: builder.query<void, { location: string }>({
            query: ({ location }) => ({
                url: `google/callback${location}`,
                method: "GET",
                mode: "cors",
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                    'Accept': 'application/json'
                }
            }),
            async onQueryStarted(args, { dispatch, queryFulfilled }) {
                try {
                    await queryFulfilled;
                    await dispatch(userApi.endpoints.getUserDetails.initiate(null))
                } catch (error) {
                    console.log("Google Callback User error", error)
                }
            }
        }),
        logOutUser: builder.mutation<void, void>({
            query: () => ({
                url: "logout",
                method: "POST",
                mode: "cors",
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                    'Accept': 'application/json'
                }
            }),
            async onQueryStarted(args, { dispatch, queryFulfilled }) {
                try {
                    await queryFulfilled;
                    await dispatch(clearUser())
                    localStorage.clear()
                } catch (error) {
                    console.log("Google Callback User error", error)
                }
            }

        })
    }),
})


export const { useSignUpMutation, useSignInUserMutation, useGoogleAuthQuery, useGoogleAuthCallBackQuery, useLazyGoogleAuthCallBackQuery, useLogOutUserMutation } = authApi

