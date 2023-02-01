import styles from "./index.module.scss";
import Header from "../Header";

import { ReactNode, useState } from "react";
import NavigationBar from "../NavigationBar";
import FilterBar from "../FiltersBar";
import { useAppDispatch, useAppSelector } from "@/shared/hooks/redux";
import { filtersSlice } from "@/entities/Product";
import { FilterOptionsInput } from "@/entities/Product/models/filters";

import SidebarsGroup from "../SidebarsGroup";
import useGlassesFilter from "@/features/glasses-filter/hooks/useGlassesFilter";

interface WrapperProps {
  children: ReactNode | ReactNode[];
}

const Wrapper = ({ children }: WrapperProps) => {
  const { filterOptions, filters, openCloseFilter, convert, selectOption } =
    useGlassesFilter();

  return (
    <div>
      <Header />
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
