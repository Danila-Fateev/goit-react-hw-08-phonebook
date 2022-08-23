import { Routes, Route, Navigate } from 'react-router-dom';

import AppBar from './AppBar';
import RegisterView from './Authorizaton/RegisterView';
import LogInView from './Authorizaton/LogInView';
import ContactsPage from 'pages/ContactsPage';
import authOperations from 'redux/auth/authOperations';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import authSelectors from 'redux/auth/authSelectors';

export function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

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
        <Route
          path="/contacts"
          element={!isLoggedIn ? <Navigate to="/login" /> : <ContactsPage />}
        />
        <Route
          path="/register"
          element={isLoggedIn ? <Navigate to="/contacts" /> : <RegisterView />}
        />
        <Route
          path="/login"
          element={isLoggedIn ? <Navigate to="/contacts" /> : <LogInView />}
        />
      </Routes>
    </div>
  );
}
