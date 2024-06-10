import { configureStore } from '@reduxjs/toolkit';
import contatosReducer from './contatosSlice';

export const store = configureStore({
  reducer: {
    contatos: contatosReducer,
  },
});

