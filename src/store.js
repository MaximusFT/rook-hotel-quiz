import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { rhymeApi } from "./rhyme";

const rootReducer = combineReducers({
  [rhymeApi.reducerPath]: rhymeApi.reducer
});

export const setupStore = (preloadedState) => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(rhymeApi.middleware),
    preloadedState
  });
};
