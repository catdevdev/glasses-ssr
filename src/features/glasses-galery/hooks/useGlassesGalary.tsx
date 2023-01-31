import { fetchGlasses } from "@/entities/Product";
import { useAppDispatch, useAppSelector } from "@/shared/hooks/redux";

const useGalaryLazyLoading = () => {
  const dispatch = useAppDispatch();

  const { glasses, isLoading, isUpdatesLoading, hasMore } = useAppSelector(
    (state) => state.glassesState
  );

  const { colours, shapes } = useAppSelector(
    (state) => state.filtersState.filterOptions
  );

  const fetchMoreData = () => {
    if (!isLoading && hasMore) {
      dispatch(
        fetchGlasses({ colours: colours.selected, shapes: shapes.selected })
      );
    }
  };
  return { glasses, isUpdatesLoading, hasMore, fetchMoreData };
};

export default useGalaryLazyLoading;
