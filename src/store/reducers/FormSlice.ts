import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CardForm, FormInputs, FormState } from '../../types';

const initialState: FormState = {
  formCards: [],
  isSavingForm: false,
  formTitle: '',
  formDescription: '',
  formPrice: '',
};

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setFormInputs(state, action: PayloadAction<Omit<FormInputs, 'file'>>) {
      state.formTitle = action.payload.title;
      state.formDescription = action.payload.description;
      state.formPrice = action.payload.price;
    },
    resetFormInputs(state) {
      state.formTitle = '';
      state.formDescription = '';
      state.formPrice = '';
    },
    toggleIsSaveForm(state, action: PayloadAction<boolean>) {
      state.isSavingForm = action.payload;
    },
    addFormCard(state, action: PayloadAction<CardForm>) {
      state.formCards = [...state.formCards, action.payload];
    },
  },
});

export default formSlice.reducer;
