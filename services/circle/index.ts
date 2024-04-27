import { BASE_URL } from "@/constants";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const circleApi = createApi({
    reducerPath: "circle-api",
    tagTypes: ['my-circle'],
    baseQuery: fetchBaseQuery({
        baseUrl: `${BASE_URL}user/circle/`,
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
            getCircle: builder.query<void, void>({
                query: () => ({
                    url: "all",
                    mode: "cors",
                    method: "GET",
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                        'Accept': 'application/json'
                    }
                }),
                providesTags: ["my-circle"],
            }),

            addToCricle: builder.mutation<void, { user_id: string }>({
                query: ({ user_id }) => ({
                    url: "add",
                    mode: "cors",
                    method: "POST",
                    body: { user_id: user_id },
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                        'Accept': 'application/json'
                    }
                }),
                invalidatesTags: ['my-circle']
            }),
            removeFromCricle: builder.mutation<void, { user_id: string }>({
                query: ({ user_id }) => ({
                    url: "remove",
                    mode: "cors",
                    method: "DELETE",
                    body: { user_id: user_id },
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                        'Accept': 'application/json'
                    }
                }),
                invalidatesTags: ['my-circle']
            }),
            isInCircle: builder.query<void, { user_id: any }>({
                query: ({ user_id }) => ({
                    url: `check?user_id=${user_id}`,
                    mode: "cors",
                    method: "GET",
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                        'Accept': 'application/json'
                    }
                }),
            }),
        }
    )
})


export const { useGetCircleQuery, useAddToCricleMutation, useIsInCircleQuery,useRemoveFromCricleMutation } = circleApi