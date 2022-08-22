import PhonebookForm from '../components/Phonebook/PhonebookForm';
import PhonebookList from '../components//Phonebook/PhonebookList';
import PhonebookFilter from '../components//Phonebook/PhonebookFilter';

export default function ContactsPage() {
  return (
    <main>
      <h1>Phonebook</h1>
      <PhonebookForm />
      <h2>Contacts</h2>
      <PhonebookFilter />
      <PhonebookList />
    </main>
  );
}
