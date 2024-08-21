import { ReactNode } from 'react';

type Data = CardProps[];

type CardProps = {
  key?: number;
  id: number;
  title: string;
  price: string;
  category: string;
  image: string;
  description: string;
};

type CardForm = {
  title: string;
  description: string;
  price: string;
  file: string;
};

type FormInputs = {
  title: string;
  description: string;
  price: string;
  file?: FileList;
};

type LayoutProps = {
  children: ReactNode;
};

type ProductsState = {
  products: CardProps[];
  isLoading: boolean;
  error: string;
};

type FormState = {
  formCards: CardForm[];
  isSavingForm: boolean;
  formTitle: string;
  formDescription: string;
  formPrice: string;
};

export type {
  CardProps,
  CardForm,
  LayoutProps,
  FormInputs,
  ProductsState,
  FormState,
  Data,
};
