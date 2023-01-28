import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { Collections } from "../models/collection";
import { Glasses } from "../models/glasses";

export const collectionsApi = createApi({
  reducerPath: "collectionsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://staging-api.bloobloom.com/user/v1/sales_channels/website",
  }),
  tagTypes: ["Glasses"],
  endpoints: (build) => ({
    fetchAll: build.query<Collections, {}>({
      query: () => ({
        url: `/collections`,
      }),
    }),
  }),
});
