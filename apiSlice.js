import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://randomuser.me/api/" }),
  endpoints: (builder) => ({
    getContacts: builder.query({
      query: () => "?results=30&inc=name,phone&nat=us&seed=abc",
    }),
  }),
});

export const { useGetContactsQuery } = apiSlice;
