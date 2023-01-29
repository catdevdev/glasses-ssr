import { AnyAction, combineReducers, configureStore } from "@reduxjs/toolkit";
import { collectionsApi, glassesApi } from "@/entities/Product";
import { createWrapper, HYDRATE } from "next-redux-wrapper";

const rootReducer = combineReducers({
  [collectionsApi.reducerPath]: collectionsApi.reducer,
  [glassesApi.reducerPath]: glassesApi.reducer,
});

export const reducer = (
  state: ReturnType<typeof rootReducer>,
  action: AnyAction
) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    };
    return nextState;
  } else {
    return rootReducer(state, action);
  }
};

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(
        collectionsApi.middleware,
        glassesApi.middleware
      ),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];

export const wrapper = createWrapper<AppStore>(setupStore, { debug: true });
