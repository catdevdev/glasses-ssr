import { axiosInstance } from "@/shared/api/axiosInstance";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CollectionsInitialState } from "../models/collections";
import { CollectionsResponse } from "../models/collections";

export const fetchCollections = createAsyncThunk(
  "collections",
  async (_, thunkAPI): Promise<CollectionsResponse> => {
    const response = await axiosInstance.get<CollectionsResponse>(
      `/collections`
    );

    return response.data;
  }
);

const collectionsSlice = createSlice({
  name: "collections",
  initialState: {
    collections: [],
    error: null,
  } as CollectionsInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCollections.fulfilled, (state, action) => {
      state.collections = action.payload.collections;
    });
    builder.addCase(fetchCollections.rejected, (state, action) => {
      state.error = action.error.message;
    });
  },
});

export { collectionsSlice };
