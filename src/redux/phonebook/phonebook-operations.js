import * as phonebookActions from './phonebook-actions';
import * as phonebookApi from '../../services/phonebook-api';

export const fetchContacts = () => async dispatch => {
  dispatch(phonebookActions.fetchContactsRequest());

  try {
    const contacts = await phonebookApi.fetchContacts();
    dispatch(phonebookActions.fetchContactsSuccess(contacts));
  } catch (error) {
    dispatch(phonebookActions.fetchContactsError(error));
  }
};
