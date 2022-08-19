import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../../redux/contactsListReducers/filterReducers';

export default function PhonebookFilter() {
  const filter = useSelector(state => state.filter.filter);
  const dispatch = useDispatch();

  const changeFilter = e => dispatch(setFilter(e.target.value));

  return (
    <label>
      Find contacts by name
      <input type="text" onChange={changeFilter} value={filter} />
    </label>
  );
}
