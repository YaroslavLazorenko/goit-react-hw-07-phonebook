import { createSelector } from '@reduxjs/toolkit';

export const getContactsItems = state => state.contacts.items;

export const getContactsFilter = state => state.contacts.filter;

export const getFilteredContactsItems = createSelector(
  [getContactsItems, getContactsFilter],
  (contacts, filter) =>
    contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase())),
);
