import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { Collections } from "../models/collection";

export const collectionsApi = createApi({
  reducerPath: "collectionsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://staging-api.bloobloom.com/user/v1/sales_channels/website",
  }),
  tagTypes: ["Glasses"],
  endpoints: (build) => ({
    fetchAll: build.query<Collections, void>({
      query: () => ({
        url: `/collections`,
      }),
    }),
  }),
});
