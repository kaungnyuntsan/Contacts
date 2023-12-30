import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://randomuser.me/api/" }),
  endpoints: (builder) => ({
    getContacts: builder.query({
      query: () => "?results=2&exc=login",
    }),
  }),
});

export const { useGetContactsQuery } = apiSlice;
