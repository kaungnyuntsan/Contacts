import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://randomuser.me/api/" }),
  endpoints: (builder) => ({
    getContacts: builder.query({
      query: () => "?results=30&exc=login,id,gender,registered&nat=us",
    }),
    // getDetailContacts: builder.query({
    //   query: () => "?results=5&exc=login,id,gender,registered,cell&seed=abc",
    // }),
  }),
});

export const { useGetContactsQuery } = apiSlice;
