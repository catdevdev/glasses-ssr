import { kyInstance } from "@/shared/api/kyInstance";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { Collections } from "../models/collection";

// /collections

const fetchGlasses = createAsyncThunk(
  "glasses/fetchGlasses",
  async (page, thunkAPI) => {
    const response = await kyInstance.get(`/collections/${type}/glasses`);
    return response.data;
  }
);

const setError = (state, action) => {
  state.status = "rejected";
  state.error = action.payload;
};

const collectionsSlice = createSlice({
  name: "collections",
  initialState: {
    collection: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    addTodo(state, action) {
      state.collection.push(action.payload);
    },
    toggleComplete(state, action) {
      const toggledTodo = state.todos.find(
        (todo) => todo.id === action.payload.id
      );
      toggledTodo.completed = !toggledTodo.completed;
    },
    removeTodo(state, action) {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
    },
  },
  extraReducers: {
    [fetchTodos.pending]: (state) => {
      state.status = "loading";
      state.error = null;
    },
    [fetchTodos.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.todos = action.payload;
    },
    [fetchTodos.rejected]: setError,
    [deleteTodo.rejected]: setError,
    [toggleStatus.rejected]: setError,
  },
});

export const collectionsApi = createApi({
  reducerPath: "collectionsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://staging-api.bloobloom.com/user/v1/sales_channels/website",
  }),
  tagTypes: ["Glasses"],
  endpoints: (build) => ({
    fetchAll: build.query<Collections, void>({
      query: () => ({
        url: `/collections`,
      }),
    }),
  }),
});
