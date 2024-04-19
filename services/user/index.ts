import { BASE_URL } from "@/constants";
import { RootState } from "@/lib/store";
import { UserDataProps, UserProfileProps } from "@/lib/types";
import { setUser } from "@/redux/slices/user";
import { setBioHandler, setCountryHandler, setNameHandler, setProfilePicHandler, setRateHandler, setStateHandler, setUserNameHandler } from "@/redux/slices/user/user-profile.slice";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
    reducerPath: "userApi",
    tagTypes: ['user-data', 'profile-update'],
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

            uploadProfilePic: builder.mutation({
                query: (payload) => {
                    const formData = new FormData()
                    // formData.append("profile_image", payload);
                    console.log("image payload", payload)
                    return {
                        url: "profile/update_avater",
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
        }
    )
})


export const { useGetUserDetailsQuery, useUpdateUserProfileMutation, useUploadProfilePicMutation,useUploadSocialLinkMutation } = userApi