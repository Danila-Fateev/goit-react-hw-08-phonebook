import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';

import PhonebookForm from './Phonebook/PhonebookForm';
import PhonebookList from './Phonebook/PhonebookList';
import PhonebookFilter from './Phonebook/PhonebookFilter';

export function App() {
  const [contacts, setContacts] = useState(
    window.localStorage.getItem('storageContacts')
      ? JSON.parse(window.localStorage.getItem('storageContacts'))
      : []
  );

  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('storageContacts', JSON.stringify(contacts));
  }, [contacts]);

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
      !contacts.find(el => el.name.toLowerCase() === contact.name.toLowerCase())
    ) {
      e.target.reset();
      setContacts([contact, ...contacts]);
      return;
    }
    e.target.reset();
    alert(
      `You already have contact with name '${contact.name}' or number '${contact.number}'`
    );
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const filterListByName = () => {
    const filteredContacts = contacts.filter(el =>
      el.name.toLowerCase().includes(filter.toLowerCase())
    );

    return filteredContacts;
  };

  const deleteContact = e => {
    const itemID = e.target.parentNode.id;
    const itemFiltered = contacts.filter(el => el.id === itemID);
    const contactIndex = contacts.indexOf(...itemFiltered);
    const listContacts = [...contacts];
    listContacts.splice(contactIndex, 1);

    setContacts(listContacts);
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
