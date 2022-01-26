import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import * as actions from './phonebook-actions';
import { fetchContacts, postContacts } from './phonebook-operations';

const initialItemsState = [];
const initialFilterState = '';

const itemsReducer = createReducer(initialItemsState, {
  [actions.addContact]: (state, { payload }) => [...state, payload],
  [actions.deleteContact]: (state, { payload }) => state.filter(({ id }) => id !== payload),
  [fetchContacts.fulfilled]: (_, { payload }) => payload,
  [postContacts.fulfilled]: (state, { payload }) => [...state, payload],
});

const filterReducer = createReducer(initialFilterState, {
  [actions.changeFilter]: (_, { payload }) => payload,
});

const isLoadingReducer = createReducer(false, {
  [fetchContacts.pending]: () => true,
  [fetchContacts.fulfilled]: () => false,
  [fetchContacts.rejected]: () => false,
  [postContacts.pending]: () => true,
  [postContacts.fulfilled]: () => false,
  [postContacts.rejected]: () => false,
});

const errorReducer = createReducer(null, {
  [fetchContacts.rejected]: (_, { payload }) => payload,
  [fetchContacts.pending]: () => null,
  [postContacts.rejected]: (_, { payload }) => payload,
  [postContacts.pending]: () => null,
});

export default combineReducers({
  items: itemsReducer,
  filter: filterReducer,
  isLoading: isLoadingReducer,
  error: errorReducer,
});
