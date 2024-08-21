import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { errorMessage } from '../../constants';
import { Data, ProductsState } from '../../types';
import { fetchData } from './ActionCreators';

const initialState: ProductsState = {
  products: [],
  isLoading: false,
  error: '',
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchData.fulfilled, (state, action: PayloadAction<Data>) => {
        state.isLoading = false;
        state.products = action.payload;
      })
      .addCase(fetchData.rejected, (state) => {
        state.error = errorMessage;
        state.isLoading = false;
      })
      .addDefaultCase(() => {});
  },
});

export default productsSlice.reducer;
