import { BASE_URL } from "@/constants";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const chatApi = createApi({
  reducerPath: "chatAPI",
  tagTypes: ["messages"],
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
      }),
      providesTags: ["messages"]
    }),

    sendMessage: builder.mutation<
      void,
      { touserId: number; message: string; roomid: number }
    >({
      query: (payload) => ({
        mode: "cors",
        url: "send-message",
        method: "POST",
        body: payload,
        headers: {
          Accept: "application/json"
        }
      }),
      // invalidatesTags: ["messages"]
    }),
    inChat: builder.mutation<void, { booking_ref: string; user_id: number }>({
      query: ({ booking_ref, user_id }) => ({
        mode: "cors",
        url: "chat-room-get/inchat",
        method: "POST",
        body: { booking_ref, user_id },
        headers: {
          Accept: "application/json"
        }
      })
    })
    // messaging:builder.mutation<void,{reciever_id:string,room_id:number}>({
    //   query:({reciever_id,room_id})=>({
    //     mode:"cors",
    //     url:`message/${room_id}/${reciever_id}`,
    //     method:"GET",
    //       headers:{
    //         'Accept':"application/json"
    //       }
    //   })
    // }),
  })
});

export const {
  useGetChatDetailsQuery,
  useInChatMutation,
  useSendMessageMutation
} = chatApi;
