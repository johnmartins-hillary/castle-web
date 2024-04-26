import { BASE_URL } from "@/constants";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { chatApi } from "../chat";

export const bookingApi = createApi({
  reducerPath: "bookingApi",
  tagTypes: ["bookings"],
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}appointment/`,
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
    bookConsultant: builder.mutation<
      void,
      { agentId: any; timeInMin: any; mode: any }
    >({
      query: (payload) => ({
        url: "book",
        method: "POST",
        body: payload,
        mode: "cors",
        headers: {
          Accept: "application/json"
        }
      })
    }),
    acceptBooking: builder.query<void, { ref: any }>({
      query: ({ ref }) => ({
        url: `accept/${ref}`,
        method: "GET",
        mode: "cors",
        headers: {
          Accept: "application/json"
        }
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        await queryFulfilled;
        dispatch(bookingApi.util.invalidateTags(["bookings"]));
      }
    }),
    rejectBooking: builder.query<void, { ref: any }>({
      query: ({ ref }) => ({
        url: `reject/${ref}`,
        method: "GET",
        mode: "cors",
        headers: {
          Accept: "application/json"
        }
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        await queryFulfilled;
        dispatch(bookingApi.util.invalidateTags(["bookings"]));
      }
    }),
    cancelBooking: builder.query<void, { ref: any }>({
      query: ({ ref }) => ({
        url: `cancel/${ref}`,
        method: "GET",
        mode: "cors",
        headers: {
          Accept: "application/json"
        }
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        await queryFulfilled;
        dispatch(bookingApi.util.invalidateTags(["bookings"]));
      }
    }),
    getBookingHistory: builder.query<void, void>({
      query: () => ({
        url: "history",
        method: "GET",
        mode: "cors",
        headers: {
          Accept: "application/json"
        }
      }),
      providesTags: ["bookings"]
    }),
    endAppointment: builder.mutation<void, { booking_ref: any }>({
      query: (payload) => ({
        url: "end",
        method: "POST",
        body: payload,
        mode: "cors",
        headers: {
          Accept: "application/json"
        }
      }),
   async onQueryStarted(_,{dispatch,queryFulfilled}){
      await queryFulfilled;
      dispatch(chatApi.util.invalidateTags(['messages']))
      }      
    })
  })
});

export const {
  useBookConsultantMutation,
  useLazyAcceptBookingQuery,
  useLazyCancelBookingQuery,
  useLazyRejectBookingQuery,
  useEndAppointmentMutation,
  useGetBookingHistoryQuery,
  useLazyGetBookingHistoryQuery,
} = bookingApi;
