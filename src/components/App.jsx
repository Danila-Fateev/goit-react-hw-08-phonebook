import authSelectors from 'redux/auth/authSelectors';
import { useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';

import PhonebookForm from './Phonebook/PhonebookForm';
import PhonebookList from './Phonebook/PhonebookList';
import PhonebookFilter from './Phonebook/PhonebookFilter';
import AuthNav from './Authorizaton/AuthNav';
import UserMenu from './Authorizaton/UserMenu';
import RegisterView from './Authorizaton/RegisterView';
import LogInView from './Authorizaton/LogInView';

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
      {isLoggedIn ? <UserMenu /> : <AuthNav />}

      <h1>Phonebook</h1>
      <PhonebookForm />
      <h2>Contacts</h2>
      <PhonebookFilter />
      <PhonebookList />

      <Routes>
        <Route path="/register" element={RegisterView} />
        <Route path="/login" element={LogInView} />
      </Routes>
    </div>
  );
}
