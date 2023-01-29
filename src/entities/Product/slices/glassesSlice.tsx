import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { Collection } from "../models/collection";
import { Glasses } from "../models/glasses";

export const glassesApi = createApi({
  reducerPath: "glassesApi",
  baseQuery: fetchBaseQuery({
    baseUrl:
      "https://staging-api.bloobloom.com/user/v1/sales_channels/website/collections/",
  }),
  tagTypes: ["Glasses"],
  endpoints: (build) => ({
    fetchAll: build.query<Glasses[], Collection>({
      query: ({ configuration_name }) => ({
        url: `/${configuration_name}/glasses`,
      }),
      providesTags: (result) => ["Glasses"],
    }),
  }),
});
