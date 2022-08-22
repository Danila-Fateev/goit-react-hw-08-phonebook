import PhonebookForm from './Phonebook/PhonebookForm';
import PhonebookList from './Phonebook/PhonebookList';
import PhonebookFilter from './Phonebook/PhonebookFilter';
import RegisterView from './Authorizaton/RegisterView';
import LogInView from './Authorizaton/LogInView';
import UserMenu from './Authorizaton/UserMenu';

import authSelectors from 'redux/auth/authSelectors';
import { useSelector } from 'react-redux';

export function App() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <div
      style={{
        height: '100vh',
        fontSize: 20,
        color: '#010101',
      }}
    >
      {isLoggedIn ? (
        <UserMenu />
      ) : (
        <div>
          <RegisterView />
          <LogInView />
        </div>
      )}

      <h1>Phonebook</h1>
      <PhonebookForm />
      <h2>Contacts</h2>
      <PhonebookFilter />

      <PhonebookList />
    </div>
  );
}
