import { createAsyncThunk } from '@reduxjs/toolkit';
import * as phonebookApi from 'services/phonebook-api';

export const fetchContacts = createAsyncThunk(
  'phonebook/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      const contacts = await phonebookApi.fetchContacts();
      return contacts;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
