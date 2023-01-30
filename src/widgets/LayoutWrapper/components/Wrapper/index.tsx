import styles from "./index.module.scss";
import Header from "../Header";

import { ReactNode, useState } from "react";
import NavigationBar from "../NavigationBar";
import FilterBar from "../FiltersBar";
import { useAppDispatch, useAppSelector } from "@/shared/hooks/redux";
import { filtersSlice } from "@/entities/Product";
import { FilterOptionsInput } from "@/entities/Product/models/filters";

import SidebarsGroup from "../SidebarsGroup";

interface WrapperProps {
  children: ReactNode | ReactNode[];
}

const Wrapper = ({ children }: WrapperProps) => {
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

  const dispatch = useAppDispatch();

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

  ///

  const [activeMain, setActiveMain] = useState(false);
  const [activeSub, setActiveSub] = useState(false);

  return (
    <div>
      <Header />
      <div
        onClick={() => {
          setActiveMain(!activeMain);
        }}
      >
        123123
      </div>
      <div
        onClick={() => {
          setActiveSub(!activeSub);
        }}
      >
        99999
      </div>
      <SidebarsGroup />

      <NavigationBar
        openCloseColors={() => openCloseFilter("colours")}
        openCloseShapes={() => openCloseFilter("shapes")}
      />
      {filters.map((filter) => (
        <FilterBar
          key={filter.filterType}
          isOpen={filter.isOpen}
          title={filter.filterType}
          options={convert(filterOptions[filter.filterType])}
          selectOption={selectOption(filter.filterType)}
        />
      ))}

      {children}
    </div>
  );
};

export default Wrapper;
