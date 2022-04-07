import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const rhymeApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.datamuse.com" }),
  tagTypes: [],
  endpoints: (builder) => ({
    getRhyme: builder.query({
      query: (params) => ({ url: "/words", method: "get", params })
    })
  })
});

export const { useGetRhymeQuery } = rhymeApi;
