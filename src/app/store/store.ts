import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { collectionsApi, glassesApi } from "@/entities/Product";

const rootReducer = combineReducers({
  [collectionsApi.reducerPath]: collectionsApi.reducer,
  [glassesApi.reducerPath]: glassesApi.reducer,
});

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
