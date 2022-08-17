import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../../redux/contactsListReducers/contactsListReducers';

export default function PhonebookFilter() {
  const filter = useSelector(state => state.contacts.contacts.filter);
  const dispatch = useDispatch();

  const changeFilter = e => dispatch(setFilter(e.currentTarget.value));

  return (
    <label>
      Find contacts by name
      <input type="text" onChange={changeFilter} value={filter} />
    </label>
  );
}
