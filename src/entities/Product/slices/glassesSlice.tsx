import { axiosInstance } from "@/shared/api/axiosInstance";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { Collection } from "../models/collections";
import {
  Glasses,
  GlassesInitialState,
  GlassesParams,
  GlassesResponse,
} from "../models/glasses";

const fetchGlasses = createAsyncThunk(
  "glasses/fetchGlasses",
  async (type: string, thunkAPI): Promise<GlassesResponse> => {
    const params: GlassesParams = {
      sort: {
        type: "",
        order: "",
      },
      filters: {
        lens_variant_prescriptions: [],
        lens_variant_types: [],
        frame_variant_home_trial_available: false,
        glass_variant_frame_variant_colour_tag_configuration_names: [],
        glass_variant_frame_variant_frame_tag_configuration_names: [],
        // ●  Colour: “black”, “tortoise”, “coloured”, “crystal”, “dark” and “bright”.
        // ● Shape: “square”, “rectangle”, “round” and “cat-eye”
      },
      page: {
        limit: 0,
        number: 0,
      },
    };

    const response = await axiosInstance.get<GlassesResponse>(
      `/collections/${type}/glasses`,
      { params }
    );

    return response.data;
  }
);

const glassesSlice = createSlice({
  name: "glasses",
  initialState: {
    page: 1,
    glasses: [],
    isLoading: false,
    error: undefined,
  } as GlassesInitialState,
  reducers: {
    addGlasses: (state, action: PayloadAction<Glasses[]>) => {
      state.glasses = state.glasses.concat(action.payload);
      state.page += 1;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchGlasses.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchGlasses.fulfilled, (state, action) => {
      state.glasses = state.glasses.concat(action.payload.glasses);
      state.page += 1;
      state.isLoading = false;
    });
    builder.addCase(fetchGlasses.rejected, (state, action) => {
      state.error = action.error.message;
      state.isLoading = false;
    });
  },
});

export default glassesSlice.reducer;
