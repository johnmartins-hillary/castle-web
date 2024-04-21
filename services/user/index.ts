import { BASE_URL } from "@/constants";
import {
    PortfolioProp,
    SocialLinkProp,
    UserDataProps,
    UserProfileProps
} from "@/lib/types";
import { setUser } from "@/redux/slices/user";
import {
    setBioHandler,
    setCountryHandler,
    setEmailHandler,
    setNameHandler,
    setProfilePicHandler,
    setRateHandler,
    setStateHandler,
    setUserNameHandler
} from "@/redux/slices/user/user-profile.slice";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const userApi = createApi({
    reducerPath: "userApi",
    tagTypes: [
        "user-data",
        "profile-update",
        "portfolios",
        "socials",
        "links",
        "photos",
        "profile_image",
        "categories"
    ],
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
        getUserDetails: builder.query({
            query: () => ({
                url: "user",
                method: "GET",
                mode: "cors",
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                    Accept: "application/json"
                }
            }),
            providesTags: ["user-data"],
            async onQueryStarted(args, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;
                    console.log("user data 1.0", data);
                    dispatch(setUser({ user: data?.user }));
                    dispatch(setNameHandler(data?.user?.name));
                    dispatch(setUserNameHandler(data?.user?.username));
                    dispatch(setBioHandler(data?.user?.bio));
                    dispatch(setCountryHandler(data?.user?.country));
                    dispatch(setStateHandler(data?.user?.state));
                    dispatch(setRateHandler(data?.user?.rate));
                    dispatch(setProfilePicHandler(data?.user?.profile_image));
                    dispatch(setEmailHandler(data?.user?.email));
                } catch (error) {
                    console.log("get user data error", error);
                }
            }
        }),

        updateUserProfile: builder.mutation<void, UserProfileProps>({
            query: ({
                name,
                bio,
                country,
                username,
                dateofbirth,
                state,
                rate,
                gender
            }) => ({
                url: "profile/update",
                method: "POST",
                mode: "cors",
                body: {
                    name,
                    bio,
                    country,
                    username,
                    dateofbirth,
                    state,
                    rate,
                    gender
                },
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                    Accept: "application/json"
                }
            }),
            invalidatesTags: ["user-data"]
        }),

        uploadProfilePic: builder.mutation<any, any>({
            query: (profile_image) => {
                const formData = new FormData();
                formData.append("profile_image", profile_image);
                formData.append("Content-Type", profile_image.type);
                formData.append("profile_image", profile_image);
                return {
                    url: "profile/update_avater",
                    method: "POST",
                    mode: "cors",
                    body: formData
                };
            },
            invalidatesTags: ["user-data"]
        }),
        verifyProfile: builder.mutation<void, { photo_id_front: any, photo_id_back: any }>({
            query: ({ photo_id_back, photo_id_front }: any) => {
                const formData = new FormData()
                formData.append("photo_id_front", photo_id_front)
                formData.append("Content-Type", photo_id_front.type)
                formData.append("photo_id_back", photo_id_back)
                return {
                    url: "user/verification/request",
                    method: "POST",
                    mode: "cors",
                    body: formData,
                    // headers:{
                    //     "Content-type": "multipatha",
                    // Accept: "application/json" 
                    // }
                };
            }
        }),

        // User's portfolio
        getUsersPortfolios: builder.query<void, void>({
            query: () => ({
                url: "profile/portfolio",
                mode: "cors",
                method: "GET",
                headers: {
                    "Content-type": "application/json",
                    Accept: "application/json"
                }
            }),
            providesTags: ["portfolios"]
        }),
        createUsersPortfolios: builder.mutation<void, PortfolioProp>({
            query: ({ role, company, end_date, start_date, works_there }: any) => {
                return {
                    url: "profile/portfolio",
                    mode: "cors",
                    body: { role, company, start_date, end_date, works_there },
                    method: "POST",
                    headers: {
                        "Content-type": "application/json",
                        Accept: "application/json"
                    }
                };
            },
            invalidatesTags: ["portfolios"]
        }),
        deleteUsersPortfolios: builder.mutation<void, { id: any }>({
            query: ({ id }) => {
                return {
                    url: "delete/portfolio",
                    mode: "cors",
                    body: { id: id },
                    method: "DELETE",
                    headers: {
                        "Content-type": "application/json",
                        Accept: "application/json"
                    }
                };
            },
            invalidatesTags: ["portfolios"]
        }),

        // User's Socials
        getUserSocials: builder.query<void, void>({
            query: () => ({
                url: "profile/social",
                mode: "cors",
                method: "GET",
                headers: {
                    "Content-type": "application/json",
                    Accept: "application/json"
                }
            }),
            providesTags: ["socials"]
        }),
        uploadSocialLink: builder.mutation<void, SocialLinkProp>({
            query: ({ platform, url }) => {
                return {
                    url: "profile/social",
                    method: "POST",
                    mode: "cors",
                    body: { platform, url },
                    headers: {
                        "Content-type": "application/json; charset=UTF-8",
                        Accept: "application/json"
                    }
                };
            },
            invalidatesTags: ["socials"]
        }),

        deleteUsersSocials: builder.mutation<void, { id: any }>({
            query: ({ id }) => {
                return {
                    url: "delete/social",
                    mode: "cors",
                    body: { id: id },
                    method: "DELETE",
                    headers: {
                        "Content-type": "application/json",
                        Accept: "application/json"
                    }
                };
            },
            invalidatesTags: ["socials"]
        }),

        // User's links
        getUsersLinks: builder.query<void, void>({
            query: () => ({
                url: "profile/link",
                mode: "cors",
                method: "GET",
                headers: {
                    "Content-type": "application/json",
                    Accept: "application/json"
                }
            }),
            providesTags: ["links"]
        }),
        createUserLink: builder.mutation<void, { platform: string; url: string }>({
            query: ({ platform, url }) => ({
                url: "profile/link",
                mode: "cors",
                method: "POST",
                body: { platform, url },
                headers: {
                    "Content-type": "application/json",
                    Accept: "application/json"
                }
            }),
            invalidatesTags: ["links"]
        }),
        deleteUsersLink: builder.mutation<void, { id: any }>({
            query: ({ id }) => {
                return {
                    url: "delete/link",
                    mode: "cors",
                    body: { id: id },
                    method: "DELETE",
                    headers: {
                        "Content-type": "application/json",
                        Accept: "application/json"
                    }
                };
            },
            invalidatesTags: ["links"]
        }),
        getUsersPhotos: builder.query<void, void>({
            query: () => ({
                url: "profile/photograph",
                mode: "cors",
                method: "GET",
                headers: {
                    "Content-type": "application/json",
                    Accept: "application/json"
                }
            }),
            providesTags: ["photos"]
        }),
        createUserPhoto: builder.mutation<void, { image: any }>({
            query: ({ image }) => {
                const formData = new FormData();
                formData.append("Content-Type", image.type);
                formData.append("image", image);
                return {
                    url: "profile/photograph",
                    mode: "cors",
                    method: "POST",
                    body: formData
                };
            },
            invalidatesTags: ["photos"]
        }),
        deleteUserPhoto: builder.mutation<void, { id: any }>({
            query: ({ id }) => ({
                url: "delete/photo",
                mode: "cors",
                method: "DELETE",
                body: { id: id },
                headers: {
                    "Content-type": "application/json",
                    Accept: "application/json"
                }
            }),
            invalidatesTags: ["photos"]
        }),
        getUsersCategories: builder.query<void, void>({
            query: () => ({
                url: "profile/category",
                mode: "cors",
                method: "GET",
                headers: {
                    "Content-type": "application/json",
                    Accept: "application/json"
                }
            }),
            providesTags: ['categories']
        }),
        addCategory: builder.mutation<void, { category: any }>({
            query: ({ category }) => ({
                url: "profile/category",
                mode: "cors",
                method: "POST",
                body: { category_title: category },
                headers: {
                    "Content-type": "application/json",
                    Accept: "application/json"
                }
            }),
            invalidatesTags: ["categories"]
        })
    })
});

export const {
    useGetUserDetailsQuery,
    useUpdateUserProfileMutation,
    useUploadProfilePicMutation,
    useUploadSocialLinkMutation,
    useVerifyProfileMutation,
    useGetUsersPortfoliosQuery,
    useCreateUsersPortfoliosMutation,
    useGetUserSocialsQuery,
    useCreateUserLinkMutation,
    useGetUsersLinksQuery,
    useGetUsersPhotosQuery,
    useCreateUserPhotoMutation,
    useDeleteUserPhotoMutation,
    useDeleteUsersLinkMutation,
    useDeleteUsersPortfoliosMutation,
    useDeleteUsersSocialsMutation,
    useAddCategoryMutation,
    useGetUsersCategoriesQuery,
} = userApi;
