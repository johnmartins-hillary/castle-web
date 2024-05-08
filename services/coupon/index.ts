import { BASE_URL } from "@/constants";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const counponApi = createApi({
  reducerPath: "counponApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}coupons/`,
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
    generateCoupon: builder.mutation<void, void>({
      query: () => ({
        url: "generate",
        method: "POST",
        mode: "cors",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Accept: "application/json"
        }
      })
    })
  })
});

export const { useGenerateCouponMutation } = counponApi;
