import { BASE_URL } from "@/constants";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const withdrawalApi = createApi({
  reducerPath: "withdrawalApi",
  tagTypes: ["withdraw_history"],
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}transactions/`,
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
    withdraw: builder.mutation<
      void,
      { amount: any; bank: any; account_name: any; account_number: any }
    >({
      query: (payload) => ({
        url: "withdraw",
        mode: "cors",
        method: "POST",
        body: payload,
        headers: {
          Accept: "application/json"
        }
      }),
      invalidatesTags: ["withdraw_history"]
    }),
    getWithdrawalHistory: builder.query<void, void>({
      query: () => ({
        url: "withdraws",
        mode: "cors",
        method: "GET",
        headers: {
          Accept: "application/json"
        }
      }),
      providesTags: ["withdraw_history"]
    })
  })
});

export const { useGetWithdrawalHistoryQuery, useWithdrawMutation } =
  withdrawalApi;
