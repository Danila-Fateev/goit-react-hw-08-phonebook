import { Routes, Route } from 'react-router-dom';

import AppBar from './AppBar';
import RegisterView from './Authorizaton/RegisterView';
import LogInView from './Authorizaton/LogInView';
import ContactsPage from 'pages/ContactsPage';
import authOperations from 'redux/auth/authOperations';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

export function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <div
      style={{
        height: '100vh',
        fontSize: 20,
        color: '#010101',
      }}
    >
      <AppBar />
      <Routes>
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/register" element={<RegisterView />} />
        <Route path="/login" element={<LogInView />} />
      </Routes>
    </div>
  );
}
