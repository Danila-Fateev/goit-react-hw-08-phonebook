import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';

import PhonebookForm from './Phonebook/PhonebookForm';
import PhonebookList from './Phonebook/PhonebookList';
import PhonebookFilter from './Phonebook/PhonebookFilter';

export function App() {
  const array = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];

  const [contacts, setContacts] = useState(array);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const parsedContacts = JSON.parse(localStorage.getItem('storageContacts'));
    setContacts(parsedContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem('storageContacts', JSON.stringify(contacts));
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
