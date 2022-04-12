import { createReducer, combineReducers, configureStore } from '@reduxjs/toolkit';
import rhymeApi from './rhyme';

const initialState = [];

const rhymeReducer = createReducer(initialState, builder => {
  builder.addMatcher(rhymeApi.endpoints.getRhyme.matchFulfilled, (state, data) => {
    if (data?.meta?.arg?.originalArgs?.rel_rhy) {
      return { ...state, [data?.meta?.arg?.originalArgs?.rel_rhy]: data.payload };
    }
    return state;
  });
});

const rootReducer = combineReducers({
  [rhymeApi.reducerPath]: rhymeApi.reducer,
  rhyme: rhymeReducer,
});

export const setupStore = preloadedState => {
  return configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(rhymeApi.middleware),
    preloadedState,
  });
};
