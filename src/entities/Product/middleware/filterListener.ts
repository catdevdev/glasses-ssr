import { AppDispatch, AppStore, RootState } from "@/app/store/store";
import { useAppDispatch } from "@/shared/hooks/redux";
import {
  addListener,
  createListenerMiddleware,
  TypedAddListener,
  TypedStartListening,
} from "@reduxjs/toolkit";
import { filtersSlice } from "../slices/filtersSlice";
import { refetchGlasses } from "../slices/glassesSlice";

// export const analyticsListener = createListenerMiddleware();

export const filterListener = createListenerMiddleware();

export type AppStartListening = TypedStartListening<RootState, AppDispatch>;

const startFilterListener = filterListener.startListening as AppStartListening;

// export const addAppListener = addListener as TypedAddListener<
//   RootState,
//   AppDispatch
// >;

// @ts-ignore
let previousDispatchCall = null;

startFilterListener({
  actionCreator: filtersSlice.actions.switchFilterOption,
  effect: (action, state) => {
    const { colours, shapes } = state.getState().filtersState.filterOptions;
    const { isLoading } = state.getState().glassesState;

    // @ts-ignore
    if (previousDispatchCall) {
      previousDispatchCall.abort();
    }

    previousDispatchCall = state.dispatch(
      refetchGlasses({
        colours: colours.selected,
        shapes: shapes.selected,
      })
    );
  },
});
