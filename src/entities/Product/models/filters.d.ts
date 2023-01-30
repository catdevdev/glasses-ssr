interface FilterCategory {
  options: string[];
  selected: string[];
}

export interface FilterArgument {
  colours: string[];
  shapes: string[];
}

export interface FiltersInitialState {
  filterOptions: {
    colours: FilterCategory;
    shapes: FilterCategory;
  };
}

export type FilterOptionsInput = keyof FilterArgument;
