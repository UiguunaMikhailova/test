import { combineReducers, configureStore } from '@reduxjs/toolkit';
import FormSlice from './reducers/FormSlice';
import ProductsSlice from './reducers/ProductsSlice';

const rootReducers = combineReducers({ ProductsSlice, FormSlice });

export const setupStore = () =>
  configureStore({
    reducer: rootReducers,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  });

export type RootState = ReturnType<typeof rootReducers>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
