import { BASE_URL } from "@/constants";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const countriesApi = createApi({
    reducerPath: "countriesApi",
    tagTypes: ["countries"],
    baseQuery: fetchBaseQuery({
        baseUrl: `https://api.countrystatecity.in/v1/`,
        prepareHeaders: (headers, { getState }) => {
            const token = localStorage.getItem("authorization") || null
            console.log("Prepring heders", token)
            if (token) {
                headers.set("Authorization", `Bearer ${JSON.parse(token)}`)
            }
            return headers;
        }
    }),
    endpoints: (builder) => ({
        getCountries: builder.query<void, void>({
            query: () => ({
                url: "countries",
                mode: "cors",
                method: "GET",
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                    'Accept': 'application/json'
                }
            })
        }),
        getStates: builder.query<void, { country_id: string }>({
            query: ({ country_id }) => ({
                url: `countries/${country_id}/states`,
                mode: "cors",
                method: "GET",
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                    'Accept': 'application/json'
                }
            })
        }),
    })
})


export const { useGetCountriesQuery, useLazyGetStatesQuery } = countriesApi