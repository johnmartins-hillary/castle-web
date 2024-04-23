import { BASE_URL } from "@/constants";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const chatApi = createApi({
  reducerPath: "chatAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}`,
    mode: "cors",
    prepareHeaders: (headers, { getState }) => {
      const token = localStorage.getItem("authorization") || null;
      if (token) {
        headers.set("Authorization", `Bearer ${JSON.parse(token)}`);
      }
      return headers;
    }
  }),
  endpoints: (builder) => ({
    getChatDetails: builder.query<void, { id: any; booking_ref: any }>({
      query: ({ id, booking_ref }) => ({
        url: `chat-room/${id}?booking_ref=${booking_ref}`,
        mode: "cors",
        method: "GET",
        headers: {
          Accept: "application/json"
        }
      })
    })
  })
});

export const { useGetChatDetailsQuery } = chatApi;
