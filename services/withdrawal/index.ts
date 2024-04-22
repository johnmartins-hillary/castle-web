import { BASE_URL } from "@/constants";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { userApi } from "../user";

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
      {
        amount?: string;
        bank?: string;
        ss?: string;
        account_number?: string;
      }
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
      invalidatesTags: ["withdraw_history"],
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        await queryFulfilled;
        dispatch(userApi.util.invalidateTags(["user-data"]));
      }
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
