import { useSelector, useDispatch } from 'react-redux';
import { phonebookActions } from 'redux/phonebook';
import { phonebookSelectors } from 'redux/phonebook';
import s from './Filter.module.css';

const Filter = () => {
  const filterValue = useSelector(phonebookSelectors.getContactsFilter);
  const dispatch = useDispatch();

  return (
    <>
      <p className={s.title}>Find contacts by name</p>
      <input
        className={s.inputField}
        type="text"
        name="filter"
        placeholder="Enter name"
        value={filterValue}
        onChange={e => dispatch(phonebookActions.changeFilter(e.target.value))}
      ></input>
    </>
  );
};

export default Filter;
