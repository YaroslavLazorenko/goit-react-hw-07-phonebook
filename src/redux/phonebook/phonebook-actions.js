import { nanoid } from 'nanoid';
import { createAction } from '@reduxjs/toolkit';

export const addContact = createAction('phonebook/add', (name, number) => ({
  payload: {
    id: nanoid(),
    name,
    number,
  },
}));
export const deleteContact = createAction('phonebook/delete');
export const changeFilter = createAction('phonebook/changeFilter');

export const fetchContactsRequest = createAction('phonebook/fetchContactsRequest');
export const fetchContactsSuccess = createAction('phonebook/fetchContactsSuccsess');
export const fetchContactsError = createAction('phonebook/fetchContactsError');
