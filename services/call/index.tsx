import { BASE_URL } from "@/constants";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const callApi = createApi({
  reducerPath: "callApi",
  tagTypes: ["calls"],
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}call/`,
    mode: "cors",
    prepareHeaders: (headers, { getState }) => {
      const token = localStorage.getItem("authorization") || null;
      if (token) {
        headers.set("Authorization", `Bearer ${JSON.parse(token)}`);
      }
      return headers;
    }
  }),
  endpoints: builder => ({
    startCall: builder.mutation<
      void,
      { offer: any; booking_ref: any; receiver_id: any }
    >({
      query: payload => ({
        url: "start",
        mode: "cors",
        method: "POST",
        body: payload,
        headers: {
          Accept: "application/json"
        }
      })
    }),
    answerCall: builder.mutation<void, { answer: any; booking_ref: any }>({
      query: payload => ({
        url: "answer",
        mode: "cors",
        method: "POST",
        body: payload,
        headers: {
          Accept: "application/json"
        }
      })
    }),
    endCall: builder.mutation<void, { booking_ref: any }>({
      query: payload => ({
        url: "end",
        mode: "cors",
        method: "POST",
        body: payload,
        headers: {
          Accept: "application/json"
        }
      })
    })
  })
});

export const {
  useStartCallMutation,
  useAnswerCallMutation,
  useEndCallMutation
} = callApi;
