import { configureStore } from "@reduxjs/toolkit";
import { booksApi } from "./services/booksApi.js";

export const store = configureStore({
  reducer: {
    //booksApi.reducer is the generated reducer that stores query/cache state
    //this registers the cache and state in the store
    [booksApi.reducerPath]: booksApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(booksApi.middleware),
});
