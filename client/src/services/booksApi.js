import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const booksApi = createApi({
  reducerPath: "booksApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/v1/books" }),
  endpoints: (builder) => ({
    getAllBooks: builder.query({
      query: () => ({ url: "/" }),
    }),
    addBook: builder.mutation({
      query: (bookData) => ({
        url: "/",
        method: "POST",
        body: bookData,
      }),
    }),
  }),
});

export const { useGetAllBooksQuery, useAddBookMutation } = booksApi;
