import { axiosInstance } from "@/shared/api/axiosInstance";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { Collection } from "../models/collections";
import { FiltersInitialState } from "../models/filters";
import {
  Glasses,
  GlassesInitialState,
  GlassesParams,
  GlassesResponse,
} from "../models/glasses";

// ● Colour: “black”, “tortoise”, “coloured”, “crystal”, “dark” and “bright”.
// ● Shape: “square”, “rectangle”, “round” and “cat-eye”

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    filterOptions: {
      colours: {
        options: ["black", "tortoise", "coloured", "crystal", "dark", "bright"],
        selected: [],
      },
      shapes: {
        options: ["square", "rectangle", "round", "cat-eye"],
        selected: [],
      },
    },
  } as FiltersInitialState,
  reducers: {
    addFilterOption: (
      state,
      action: PayloadAction<{
        filterType: keyof typeof state.filterOptions;
        option: string;
      }>
    ) => {
      state.filterOptions[action.payload.filterType].selected.push(
        action.payload.option
      );
    },
    removeFilterOption: (
      state,
      action: PayloadAction<{
        filterType: keyof typeof state.filterOptions;
        option: string;
      }>
    ) => {
      state.filterOptions[action.payload.filterType].selected =
        state.filterOptions[action.payload.filterType].selected.filter(
          (o) => o !== action.payload.option
        );
    },
    resetAllSelectedOptions: (state) => {
      Object.values(state.filterOptions).forEach((filterOption) => {
        filterOption.selected = [];
      });
    },
  },
});

export default filtersSlice.reducer;
