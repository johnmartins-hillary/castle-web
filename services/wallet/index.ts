import { BASE_URL } from "@/constants";
import { FundWalletProps } from "@/lib/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { url } from "inspector";

export const walletApi = createApi({
    reducerPath: "walletApi",
    tagTypes: ['wallet'],
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
            initializeWalletDeposit: builder.mutation<void, FundWalletProps>({
                query: (payload) => ({
                    url: "transactions/deposit/initialize",
                    method: "POST",
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                        'Accept': "application/json",
                    },
                    body: payload,
                    mode: "cors",

                })
            }),

            verifyDeposit: builder.query<void, { reference: string | null }>({
                query: ({ reference }) => ({
                    url: `transactions/deposit/verify?reference=${reference}`,
                    mode: "cors",
                    method: "GET",
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                        'Accept': "application/json",
                    },
                }),
            }),

            getWithdrawalHistory: builder.query({
                query: () => ({
                    url: "transactions/withdraws",
                    method: "POST",
                    mode: "cors",
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                        'Accept': "application/json",
                    },
                })
            })
        }
    )
})


export const { useInitializeWalletDepositMutation, useGetWithdrawalHistoryQuery,useLazyVerifyDepositQuery } = walletApi