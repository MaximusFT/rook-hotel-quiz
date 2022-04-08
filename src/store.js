import { createReducer, combineReducers, configureStore } from '@reduxjs/toolkit';
import rhymeApi from './rhyme';

const initialState = [];

const rhymeReducer = createReducer(initialState, builder => {
  builder.addMatcher(rhymeApi.endpoints.getRhyme.matchFulfilled, (state, data) => {
    if (data?.meta?.arg?.originalArgs?.rel_rhy) {
      console.log('%c@-> data.payload', 'background: hsl(151,100%,35%); color: #fff', data.payload); // prettier-ignore
      return { ...state, [data?.meta?.arg?.originalArgs?.rel_rhy]: data.payload };
    }
    console.log('%c@-> state', 'background: hsl(151,100%,35%); color: #fff', state); // prettier-ignore
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
