import { fetchGlasses, filtersSlice } from "@/entities/Product";
import { FilterOptionsInput } from "@/entities/Product/models/filters";
import { useAppDispatch, useAppSelector } from "@/shared/hooks/redux";
import { useState } from "react";

const useGlassesFilter = () => {
  const dispatch = useAppDispatch();
  const { filterOptions } = useAppSelector((state) => state.filtersState);

  const keys = Object.keys(filterOptions) as Array<keyof typeof filterOptions>;
  const filterOptionsInitialState = keys.map((key) => {
    return {
      filterType: key,
      isOpen: false,
    };
  });

  const [filters, setFilters] = useState(filterOptionsInitialState);

  const openCloseFilter = (filterType: keyof typeof filterOptions) => {
    setFilters((prevFilters) =>
      prevFilters.map((filter) => {
        if (filter.filterType === filterType) {
          return {
            ...filter,
            isOpen: !filter.isOpen,
          };
        }
        return filter;
      })
    );
  };

  const convert = (data: { options: string[]; selected: string[] }) =>
    data.options.map((option) => ({
      label: option,
      isActive: data.selected.includes(option),
    }));

  const selectOption = (filterType: FilterOptionsInput) => (option: string) => {
    dispatch(
      filtersSlice.actions.switchFilterOption({
        filterType,
        option,
      })
    );
  };

  return { filterOptions, filters, openCloseFilter, convert, selectOption };
};

export default useGlassesFilter;
