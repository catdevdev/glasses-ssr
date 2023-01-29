import {
  AnyAction,
  combineReducers,
  configureStore,
  ThunkDispatch,
} from "@reduxjs/toolkit";
import {
  collectionsSlice,
  glassesSlice,
  filtersSlice,
} from "@/entities/Product";
import { createWrapper, HYDRATE } from "next-redux-wrapper";

const rootReducer = combineReducers({
  collectionsState: collectionsSlice.reducer,
  glassesState: glassesSlice.reducer,
  filtersState: filtersSlice.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
export type NextThunkDispatch = ThunkDispatch<RootState, void, AnyAction>;

export const wrapper = createWrapper<AppStore>(setupStore, { debug: true });
