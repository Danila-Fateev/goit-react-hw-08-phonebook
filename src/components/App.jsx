import PhonebookForm from './Phonebook/PhonebookForm';
import PhonebookList from './Phonebook/PhonebookList';
import PhonebookFilter from './Phonebook/PhonebookFilter';
import RegisterView from './Authorizaton/RegisterView';
import LogInView from './Authorizaton/LogInView';

export function App() {
  return (
    <div
      style={{
        height: '100vh',
        fontSize: 20,
        color: '#010101',
      }}
    >
      <RegisterView />
      <LogInView />
      <h1>Phonebook</h1>
      <PhonebookForm />
      <h2>Contacts</h2>
      <PhonebookFilter />

      <PhonebookList />
    </div>
  );
}
