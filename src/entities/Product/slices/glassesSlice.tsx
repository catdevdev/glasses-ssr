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

import axios from "axios";

import qs from "qs";
import { abort } from "process";

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
      },
      page: {
        limit: 15,
        number: getState().glassesState.page,
      },
    };

    const source = axios.CancelToken.source();
    thunkAPI.signal.addEventListener("abort", () => {
      source.cancel();
    });

    const response = await axiosInstance.get<GlassesResponse>(
      `/collections/${"spectacles-men"}/glasses`,
      {
        params,
        paramsSerializer: {
          serialize: (params) => {
            return qs.stringify(params, { arrayFormat: "repeat" });
          },
        },
        cancelToken: source.token,
      }
    );

    return response.data;
  }
);

export const refetchGlasses = createAsyncThunk(
  "glasses/refetchGlasses",
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
      },
      page: {
        limit: 15,
        number: 1,
      },
    };

    const source = axios.CancelToken.source();
    thunkAPI.signal.addEventListener("abort", () => {
      source.cancel();
    });

    const response = await axiosInstance.get<GlassesResponse>(
      `/collections/${"spectacles-men"}/glasses`,
      {
        params,
        paramsSerializer: {
          serialize: (params) => {
            return qs.stringify(params, { arrayFormat: "repeat" });
          },
        },
        cancelToken: source.token,
      }
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
    isUpdatesLoading: false,
    hasMore: true,
    error: null,
  } as GlassesInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchGlasses.pending, (state, _) => {
      state.isLoading = true;
    });
    builder.addCase(fetchGlasses.fulfilled, (state, action) => {
      if (action.payload.glasses.length === 0) {
        state.hasMore = false;
        state.isLoading = false;
        return;
      }
      state.glasses = state.glasses.concat(action.payload.glasses);
      state.page += 1;
      state.isLoading = false;
    });
    builder.addCase(fetchGlasses.rejected, (state, action) => {
      state.error = action.error.message;
      state.isLoading = false;
    });

    //

    builder.addCase(refetchGlasses.pending, (state, _) => {
      state.isLoading = true;
      state.isUpdatesLoading = true;
    });
    builder.addCase(refetchGlasses.fulfilled, (state, action) => {
      state.glasses = action.payload.glasses;
      state.page = 2;

      state.isLoading = false;
      state.isUpdatesLoading = false;
      state.hasMore = true;
    });
    builder.addCase(refetchGlasses.rejected, (state, action) => {
      state.error = action.error.message;
      state.isLoading = false;
      state.isUpdatesLoading = false;
    });
  },
});

export { glassesSlice };
