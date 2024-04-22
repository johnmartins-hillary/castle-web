import { BASE_URL } from "@/constants";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const bookingApi = createApi({
  reducerPath: "bookingApi",
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
      })
    }),
    rejectBooking: builder.query<void, { ref: any }>({
      query: ({ ref }) => ({
        url: `reject/${ref}`,
        method: "GET",
        mode: "cors",
        headers: {
          Accept: "application/json"
        }
      })
    }),
    cancelBooking: builder.query<void, { ref: any }>({
      query: ({ ref }) => ({
        url: `cancel/${ref}`,
        method: "GET",
        mode: "cors",
        headers: {
          Accept: "application/json"
        }
      })
    }),
    getBookingHistory: builder.query<void, void>({
      query: () => ({
        url: "history",
        method: "GET",
        mode: "cors",
        headers: {
          Accept: "application/json"
        }
      })
    }),
    endAppointment: builder.mutation<void, { booking_ref: any }>({
      query: (payload) => ({
        url: "appointment/end",
        method: "POST",
        body: payload,
        mode: "cors",
        headers: {
          Accept: "application/json"
        }
      })
    })
  })
});

export const {
  useBookConsultantMutation,
  useLazyAcceptBookingQuery,
  useLazyCancelBookingQuery,
  useLazyRejectBookingQuery,
  useEndAppointmentMutation,
  useGetBookingHistoryQuery
} = bookingApi;