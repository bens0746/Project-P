import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./shopingCart/cartSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const allCartReducer = combineReducers({
  allCart: cartSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, allCartReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
