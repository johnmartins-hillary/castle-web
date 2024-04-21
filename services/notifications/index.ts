import { BASE_URL } from "@/constants";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const notificationApi = createApi({
    reducerPath: "notification",
    baseQuery: fetchBaseQuery({
        baseUrl: `${BASE_URL}`,
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
            getNotifications: builder.query<void, void>({
                query: () => ({
                    url: "notifications",
                    mode: "cors",
                    method: "GET",
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                        'Accept': 'application/json'
                    }
                })
            })
        }
    )
})


export const { useGetNotificationsQuery } = notificationApi