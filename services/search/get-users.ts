import { BASE_URL } from "@/constants";
import { AllUsersProps, SingleUserProps } from "@/lib/types";
import { setSingleUser } from "@/redux/slices/single-user";
import { setUsersHandler } from "@/redux/slices/users";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
interface ApiResponse<T> {
    data: T
}

interface Prop {
    data?: any
}
export const usersApi = createApi({
    reducerPath: "usersApi",
    tagTypes: ['users', 'single-users', 'searched-users'],
    baseQuery: fetchBaseQuery({
        baseUrl: `${BASE_URL}`,
        mode: "cors",
        prepareHeaders: (headers, { getState }) => {
            const token = localStorage.getItem("authorization") || null
            if (token) {
                headers.set("Authorization", `Bearer ${JSON.parse(token)}`)
            }
            return headers;
        }
    }),
    endpoints: (builder) => (
        {
            getUsers: builder.query<void, AllUsersProps>({
                query: ({ page_no }) => ({
                    url: `users?page=${page_no}`,
                    method: "GET",
                    mode: "cors",
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                        'Accept': 'application/json'
                    }
                }),
                providesTags: ['users']
            }),

            getSingleUser: builder.query<void, SingleUserProps>({
                query: ({ id }) => ({
                    url: `user/${id}`,
                    method: "GET",
                    mode: "cors",
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                        'Accept': 'application/json'
                    }
                }),
                async onQueryStarted(args, { dispatch, queryFulfilled }) {
                    try {
                        const { data } = await queryFulfilled;
                        dispatch(setSingleUser(data))
                    } catch (error) {
                        console.log("Single User error", error)
                    }
                }
            }),
            searchUsers: builder.query<void, AllUsersProps>({
                query: ({ keyword }) => ({
                    url: `users/search?queries=${keyword}`,
                    method: "GET",
                    mode: "cors",
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                        'Accept': 'application/json'
                    }
                }),
            })
        }
    )
})


export const { useGetUsersQuery, useGetSingleUserQuery, useSearchUsersQuery } = usersApi