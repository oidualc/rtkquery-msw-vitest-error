import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000" }),
  endpoints: (build) => ({
    getPosts: build.query<any, void>({
      query: () => "/posts",
    }),
  }),
});

export const { useGetPostsQuery } = api;
