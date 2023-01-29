interface FilterCategory {
  options: string[];
  selected: string[];
}

export interface FiltersInitialState {
  filterOptions: {
    colours: FilterCategory;
    shapes: FilterCategory;
  };
}
