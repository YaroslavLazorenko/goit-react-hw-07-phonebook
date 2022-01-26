import { useSelector } from 'react-redux';
import ContactItem from '../ContactItem';
import { phonebookSelectors } from 'redux/phonebook';
import s from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(phonebookSelectors.getContactsItems);
  const filter = useSelector(phonebookSelectors.getContactsFilter);

  return (
    <ul className={s.list}>
      {contacts
        .filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))
        .map(contact => {
          return <ContactItem contact={contact} key={contact.name} />;
        })}
    </ul>
  );
};

export default ContactList;
