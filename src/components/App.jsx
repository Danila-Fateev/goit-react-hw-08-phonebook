import { nanoid } from 'nanoid';
import { useSelector, useDispatch } from 'react-redux';
import {
  deleteContacts,
  addContact,
  setFilter,
} from './features/contactsListReducers/contactsListReducers';

import PhonebookForm from './Phonebook/PhonebookForm';
import PhonebookList from './Phonebook/PhonebookList';
import PhonebookFilter from './Phonebook/PhonebookFilter';

export function App() {
  const listOfContacts = useSelector(state => state.contacts.contacts.items);
  const filter = useSelector(state => state.contacts.contacts.filter);
  const dispatch = useDispatch();

  const onSubmitForm = e => {
    e.preventDefault();

    const submitContactName = e.currentTarget.elements.name.value;
    const submitContactNumber = e.currentTarget.elements.number.value;

    const contact = {
      name: submitContactName,
      number: submitContactNumber,
      id: nanoid(),
    };

    if (
      !listOfContacts.find(
        el => el.name.toLowerCase() === contact.name.toLowerCase()
      )
    ) {
      e.target.reset();
      dispatch(addContact(contact));
      return;
    }
    e.target.reset();
    alert(
      `You already have contact with name '${contact.name}' or number '${contact.number}'`
    );
  };

  const changeFilter = e => {
    dispatch(setFilter(e.currentTarget.value));
  };

  const filterListByName = () => {
    const filteredContacts = listOfContacts.filter(el =>
      el.name.toLowerCase().includes(filter.toLowerCase())
    );

    return filteredContacts;
  };

  const deleteContact = e => {
    const itemID = e.target.parentNode.id;
    const itemFiltered = listOfContacts.find(el => el.id === itemID);
    dispatch(deleteContacts(itemFiltered));
  };

  const filteredItems = filterListByName();
  return (
    <div
      style={{
        height: '100vh',
        fontSize: 20,
        color: '#010101',
      }}
    >
      <h1>Phonebook</h1>
      <PhonebookForm onSubmitForm={onSubmitForm} />
      <h2>Contacts</h2>
      <PhonebookFilter changeFilter={changeFilter} value={filter} />

      <PhonebookList
        filteredItems={filteredItems}
        deleteContact={deleteContact}
      />
    </div>
  );
}
