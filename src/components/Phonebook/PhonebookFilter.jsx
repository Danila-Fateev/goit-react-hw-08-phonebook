import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../../redux/contactsListReducers/filterReducers';
import TextField from '@mui/material/TextField';

export default function PhonebookFilter() {
  const filter = useSelector(state => state.filter.filter);
  const dispatch = useDispatch();

  const changeFilter = e => dispatch(setFilter(e.target.value));

  return (
    <TextField
      label="Find contacts by name"
      focused
      type="text"
      onChange={changeFilter}
      value={filter}
    />
  );
}
