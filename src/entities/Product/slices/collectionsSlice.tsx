import { axiosInstance } from "@/shared/api/axiosInstance";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CollectionsInitialState } from "../models/collections";
import { CollectionsResponse } from "../models/collections";

const fetchCollections = createAsyncThunk(
  "glasses/fetchGlasses",
  async (type: string, thunkAPI): Promise<CollectionsResponse> => {
    const response = await axiosInstance.get<CollectionsResponse>(
      `/collections/${type}/glasses`
    );

    return response.data;
  }
);

const collecitonsSlice = createSlice({
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

export { collecitonsSlice };
