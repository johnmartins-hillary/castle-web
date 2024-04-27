import { BASE_URL } from "@/constants";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const categoryApi = createApi({
  reducerPath: "categoryApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}`,
    prepareHeaders: (headers, { getState }) => {
      const token = localStorage.getItem("authorization") || null;
      if (token) {
        headers.set("Authorization", `Bearer ${JSON.parse(token)}`);
      }
      return headers;
    }
  }),

  endpoints: (builder) => ({
    getCategoryList: builder.query<void, void>({
      query: () => ({
        url: "category-list",
        method: "GET",
        mode: "cors",
        headers: {
          Accept: "application/json"
        }
      })
    })
  })
});

export const { useGetCategoryListQuery} = categoryApi;
