import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { phonebookActions } from 'redux/phonebook';
import s from './ContactItem.module.css';

const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();

  return (
    <li className={s.contactItem}>
      <span className={s.contactText}>
        {contact.name}: {contact.number}
      </span>
      <button
        className={s.button}
        onClick={() => dispatch(phonebookActions.deleteContact(contact.id))}
      >
        Delete
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
};

export default ContactItem;
