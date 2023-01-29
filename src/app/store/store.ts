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

const reducer = (state, action) => {
  console.log(action);
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    };
    if (state.count) nextState.count = state.count; // preserve count value on client side navigation
    return nextState;
  } else {
    return rootReducer(state, action);
  }
};

export const setupStore = () => {
  return configureStore({
    reducer,
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
export type NextThunkDispatch = ThunkDispatch<RootState, void, AnyAction>;

export const wrapper = createWrapper<AppStore>(setupStore, { debug: true });
