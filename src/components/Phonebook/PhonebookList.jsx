import { useSelector, useDispatch } from 'react-redux';
import { deleteContacts } from '../../redux/contactsListReducers/contactsListReducers';
import styles from './Phonebook.module.css';

export default function PhonebookList() {
  const listOfContacts = useSelector(state => state.contacts.contacts.items);
  const filter = useSelector(state => state.contacts.contacts.filter);
  const dispatch = useDispatch();

  const filterListByName = () => {
    return listOfContacts.filter(el =>
      el.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const deleteContact = e => {
    const itemID = e.target.parentNode.id;
    const itemFound = listOfContacts.find(el => el.id === itemID);
    dispatch(deleteContacts(itemFound));
  };

  const filteredItems = filterListByName();

  return (
    <ul
      style={{
        listStyle: 'none',
        padding: '25px',
        width: '500px',
      }}
    >
      {filteredItems.map(({ id, name, number }) => (
        <li key={id} className={styles.listItem} id={id}>
          {name}: {number}
          <button
            className={styles.itemBtn}
            type="button"
            onClick={deleteContact}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
