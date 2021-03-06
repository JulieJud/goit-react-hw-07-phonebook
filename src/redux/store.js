import { configureStore } from '@reduxjs/toolkit';

import phonebookReducer from './phonebook/phonebook-reducers';

export const store = configureStore({
  reducer: {
    phonebook: phonebookReducer,
  },
  devTools: process.env.NODE_ENV === 'development',
});

export default store;
