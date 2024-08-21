import { createAsyncThunk } from '@reduxjs/toolkit';
import { getData } from '../../requests';

export const fetchData = createAsyncThunk(
  'products/fetchAll',
  async (url: string, thunkAPI) => {
    try {
      const result = getData(url);
      console.log(result);
      return result;
    } catch (e) {
      console.log((e as Error).message);
      return thunkAPI.rejectWithValue((e as Error).message);
    }
  }
);
