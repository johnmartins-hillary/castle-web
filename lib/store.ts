import singleUser from "@/redux/slices/single-user";
import userReducer from "@/redux/slices/user";
import userProfileSlice from "@/redux/slices/user/user-profile.slice";
import { authApi } from "@/services/auth";
import { usersApi } from "@/services/search/get-users";
import { userApi } from "@/services/user";
import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "@/redux/slices/users/index";
import { walletApi } from "@/services/wallet";
import walletSlice from "@/redux/slices/wallet/index";
import { notificationApi } from "@/services/notifications";
import { circleApi } from "@/services/circle";
import { countriesApi } from "@/services/countries";
import { bookingApi } from "@/services/booking";
import { withdrawalApi } from "@/services/withdrawal";
import { chatApi } from "@/services/chat";
import chats from "@/redux/slices/chats";
import { callApi } from "@/services/call";
import { categoryApi } from "@/services/category";
import { counponApi } from "@/services/coupon";
export const makeStore = () => {
  return configureStore({
    reducer: {
      [authApi.reducerPath]: authApi.reducer,
      [userApi.reducerPath]: userApi.reducer,
      [usersApi.reducerPath]: usersApi.reducer,
      [walletApi.reducerPath]: walletApi.reducer,
      [notificationApi.reducerPath]: notificationApi.reducer,
      [circleApi.reducerPath]: circleApi.reducer,
      [countriesApi.reducerPath]: countriesApi.reducer,
      [bookingApi.reducerPath]: bookingApi.reducer,
      [withdrawalApi.reducerPath]: withdrawalApi.reducer,
      [chatApi.reducerPath]: chatApi.reducer,
      [callApi.reducerPath]: callApi.reducer,
      [categoryApi.reducerPath]: categoryApi.reducer,
      [counponApi.reducerPath]: counponApi.reducer,
      userState: userReducer,
      userprofile: userProfileSlice,
      singleUser: singleUser,
      users: usersSlice,
      wallet: walletSlice,
      chat: chats
    },
    middleware: (getDefualtMiddleware) =>
      getDefualtMiddleware().concat(
        authApi.middleware,
        userApi.middleware,
        usersApi.middleware,
        walletApi.middleware,
        notificationApi.middleware,
        circleApi.middleware,
        countriesApi.middleware,
        bookingApi.middleware,
        withdrawalApi.middleware,
        chatApi.middleware,
        callApi.middleware,
        categoryApi.middleware,
        counponApi.middleware
      )
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

// import userReducer from "@/redux/slices/user"
// import { authApi } from "@/services/auth"
// import { userApi } from "@/services/user"
// import { combineReducers, configureStore } from "@reduxjs/toolkit"
// import { persistReducer, persistStore } from 'redux-persist'
// import storage from "redux-persist/lib/storage"
// export const makeStore = () => {
//     const persistConfig = {
//         key: "root",
//         storage
//     }

//     const rootReducer = combineReducers({
//         [userApi.reducerPath]: userApi.reducer,
//     })
//     const persistedReducer = persistReducer(persistConfig, rootReducer)
//     return configureStore({
//         reducer: {
//             [authApi.reducerPath]: authApi.reducer,
//             user: persistedReducer,
//             userState: userReducer
//         },
//         middleware: (getDefualtMiddleware) => getDefualtMiddleware().concat(authApi.middleware,userApi.middleware)
//     })
// }

// export type AppStore = ReturnType<typeof makeStore>
// export type RootState = ReturnType<AppStore['getState']>
// export type AppDispatch = AppStore['dispatch']
