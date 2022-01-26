import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import * as actions from './phonebook-actions';

const initialItemsState = [];
const initialFilterState = '';

const itemsReducer = createReducer(initialItemsState, {
  [actions.addContact]: (state, { payload }) => [...state, payload],
  [actions.deleteContact]: (state, { payload }) => state.filter(({ id }) => id !== payload),
  [actions.fetchContactsSuccess]: (_, { payload }) => payload,
});

const filterReducer = createReducer(initialFilterState, {
  [actions.changeFilter]: (_, { payload }) => payload,
});

const isLoadingReducer = createReducer(false, {
  [actions.fetchContactsRequest]: () => true,
  [actions.fetchContactsSuccess]: () => false,
  [actions.fetchContactsError]: () => false,
});

const errorReducer = createReducer(null, {
  [actions.fetchContactsError]: (_, { payload }) => payload,
  [actions.fetchContactsRequest]: () => null,
});

export default combineReducers({
  items: itemsReducer,
  filter: filterReducer,
  isLoading: isLoadingReducer,
  error: errorReducer,
});
