import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FilterOptionsInput, FiltersInitialState } from "../models/filters";

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
        filterType: FilterOptionsInput;
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
    switchFilterOption: (
      state,
      action: PayloadAction<{
        filterType: FilterOptionsInput;
        option: string;
      }>
    ) => {
      const filterType = state.filterOptions[action.payload.filterType];
      const selected = filterType.selected;
      const option = action.payload.option;
      if (selected.includes(option)) {
        filterType.selected = selected.filter((o) => o !== option);
      } else {
        filterType.selected.push(option);
      }
    },
    resetAllSelectedOptions: (state) => {
      Object.values(state.filterOptions).forEach((filterOption) => {
        filterOption.selected = [];
      });
    },
  },
});

export { filtersSlice };

// filterOptions: {
// colours: {
//   options: ["black", "tortoise", "coloured", "crystal", "dark", "bright"],
//   selected: [],
// },
// shapes: {
//   options: ["square", "rectangle", "round", "cat-eye"],
//   selected: [],
// },
// },

// *first data :*
// colours: {
//   options: ["black", "tortoise", "coloured", "crystal", "dark", "bright"],
//   selected: [],
// },

// *second data :*
// shapes: {
//   options: ["square", "rectangle", "round", "cat-eye"],
//   selected: [],
// },

// *third data:*

// options: {
//   label: string;
//   isActive: string;
// }[];

// *can you generate handler to transfer first data or second data to third data. Make universal handler

// function transferData(data) {
//   const options = data.options.map((option) => ({
//     label: option,
//     isActive: data.selected.includes(option),
//   }));
//   return { options };
// }
