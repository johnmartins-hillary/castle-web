import { BASE_URL } from "@/constants";
import { PortfolioProp, UserDataProps, UserProfileProps } from "@/lib/types";
import { setUser } from "@/redux/slices/user";
import { setBioHandler, setCountryHandler, setEmailHandler, setNameHandler, setProfilePicHandler, setRateHandler, setStateHandler, setUserNameHandler } from "@/redux/slices/user/user-profile.slice";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
    reducerPath: "userApi",
    tagTypes: ['user-data', 'profile-update', 'portfolios'],
    baseQuery: fetchBaseQuery({
        baseUrl: `${BASE_URL}`,
        mode: "cors",
        prepareHeaders: (headers, { getState }) => {
            const token = localStorage.getItem("authorization") || null
            console.log("Prepring heders", token)
            if (token) {
                headers.set("Authorization", `Bearer ${JSON.parse(token)}`)
            }
            return headers;
        }
    }),
    endpoints: (builder) => (
        {
            getUserDetails: builder.query({
                query: () => ({
                    url: "user",
                    method: "GET",
                    mode: "cors",
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                        'Accept': 'application/json'

                    }
                }),
                providesTags: ["user-data"],
                async onQueryStarted(args, { dispatch, queryFulfilled }) {
                    try {
                        const { data } = await queryFulfilled;
                        console.log("user data 1.0", data)
                        dispatch(setUser({ user: data?.user }))
                        dispatch(setNameHandler(data?.user?.name))
                        dispatch(setUserNameHandler(data?.user?.username))
                        dispatch(setBioHandler(data?.user?.bio))
                        dispatch(setCountryHandler(data?.user?.country))
                        dispatch(setStateHandler(data?.user?.state))
                        dispatch(setRateHandler(data?.user?.rate))
                        dispatch(setProfilePicHandler(data?.user?.profile_image))
                        dispatch(setEmailHandler(data?.user?.email))
                    } catch (error) {
                        console.log("get user data error", error)
                    }
                }
            }),

            updateUserProfile: builder.mutation<void, UserProfileProps>({
                query: (payload) => ({
                    url: "profile/update",
                    method: "POST",
                    mode: "cors",
                    body: payload,
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                        'Accept': "application/json"
                    }
                }),
                invalidatesTags: ['user-data']
            }),

            uploadProfilePic: builder.mutation<any, any>({
                query: (profile_image) => {
                    const formData = new FormData();
                    formData.append("profile_image", profile_image);
                    console.log(formData, profile_image)
                    return {
                        url: "profile/update_avater",
                        method: "POST",
                        mode: "cors",
                        body: formData,
                        // formData:true,
                        headers: {
                            'Content-type': 'multipart/form-data',
                            // 'Accept': "application/json"
                        },
                    }
                },
                invalidatesTags: ['user-data']
            }),
            uploadSocialLink: builder.mutation({
                query: (payload) => {
                    return {
                        url: "profile/social",
                        method: "POST",
                        mode: "cors",
                        body: payload,
                        headers: {
                            'Content-type': 'application/json; charset=UTF-8',
                            'Accept': "application/json"
                        }
                    }
                },
                invalidatesTags: ['user-data']
            }),
            verifyProfile: builder.mutation({
                query: (body) => {
                    return {
                        url: "user/verification/request",
                        method: "POST",
                        body,
                        mode: 'cors',
                        headers: {
                            'Content-type': 'application/json; charset=UTF-8',
                            'Accept': "application/json",

                        }
                    }
                }
            }),
            getUsersPortfolios: builder.query<void, void>({
                query: () => ({
                    url: "profile/portfolio",
                    mode: "cors",
                    method: "GET",
                    headers: {
                        'Content-type': 'multipart/form-data',
                        'Accept': "application/json"
                    },
                }),
                providesTags: ['portfolios']
            }),
            createUsersPortfolios: builder.mutation<void, PortfolioProp>({
                query: (payload) => ({
                    url: "profile/portfolio",
                    mode: "cors",
                    body: payload,
                    method: "POST",
                    headers: {
                        'Content-type': 'multipart/form-data',
                        'Accept': "application/json"
                    },
                }),
                invalidatesTags: ['portfolios']
            }),
        }
    )
})


export const { useGetUserDetailsQuery, useUpdateUserProfileMutation, useUploadProfilePicMutation, useUploadSocialLinkMutation, useVerifyProfileMutation, useGetUsersPortfoliosQuery, useCreateUsersPortfoliosMutation } = userApi