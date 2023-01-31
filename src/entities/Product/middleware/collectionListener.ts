import { AppDispatch, AppStore, RootState } from "@/app/store/store";
import { useAppDispatch } from "@/shared/hooks/redux";
import {
  addListener,
  createListenerMiddleware,
  TypedAddListener,
  TypedStartListening,
} from "@reduxjs/toolkit";
import { collectionsSlice } from "../slices/collectionsSlice";
import { filtersSlice } from "../slices/filtersSlice";
import { refetchGlasses } from "../slices/glassesSlice";

export const collectionListener = createListenerMiddleware();

export type AppStartListening = TypedStartListening<RootState, AppDispatch>;

const startCollectionListener =
  collectionListener.startListening as AppStartListening;

// @ts-ignore
let previousDispatchCall = null;

startCollectionListener({
  actionCreator: collectionsSlice.actions.setSelectedCollection,
  effect: (action, state) => {
    const { colours, shapes } = state.getState().filtersState.filterOptions;

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
