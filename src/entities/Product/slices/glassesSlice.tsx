import { AppStore } from "@/app/store/store";
import { axiosInstance } from "@/shared/api/axiosInstance";
import {
  AnyAction,
  createAsyncThunk,
  createSlice,
  Dispatch,
  PayloadAction,
} from "@reduxjs/toolkit";

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { Collection } from "../models/collections";
import { FilterArgument } from "../models/filters";
import {
  Glasses,
  GlassesInitialState,
  GlassesParams,
  GlassesResponse,
} from "../models/glasses";

export const fetchGlasses = createAsyncThunk(
  "glasses/fetchGlasses",
  async (
    { colours, shapes }: FilterArgument,
    thunkAPI
  ): Promise<GlassesResponse> => {
    const getState = thunkAPI.getState as AppStore["getState"];

    const params: GlassesParams = {
      sort: {
        type: "",
        order: "",
      },
      filters: {
        lens_variant_prescriptions: [],
        lens_variant_types: [],
        frame_variant_home_trial_available: false,
        glass_variant_frame_variant_colour_tag_configuration_names: colours,
        glass_variant_frame_variant_frame_tag_configuration_names: shapes,
        // ●  Colour: “black”, “tortoise”, “coloured”, “crystal”, “dark” and “bright”.
        // ● Shape: “square”, “rectangle”, “round” and “cat-eye”
      },
      page: {
        limit: 5,
        number: getState().glassesState.page,
      },
    };

    const response = await axiosInstance.get<GlassesResponse>(
      `/collections/${"spectacles-men"}/glasses`,
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
    error: null,
  } as GlassesInitialState,
  reducers: {},
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

export { glassesSlice };
