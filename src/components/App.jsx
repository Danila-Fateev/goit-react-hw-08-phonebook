import { Routes, Route, Navigate } from 'react-router-dom';

import AppBar from './AppBar';
import RegisterView from './Authorizaton/RegisterView';
import LogInView from './Authorizaton/LogInView';
import ContactsPage from 'pages/ContactsPage';
import PageNotFound from 'pages/PageNotFound';

import authSelectors from 'redux/auth/authSelectors';
import authOperations from 'redux/auth/authOperations';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

export function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    !isFetchingCurrentUser && (
      <div
        style={{
          height: '100vh',
          fontSize: 20,
          color: '#010101',
          maxWidth: '1400px',
          margin: 'auto',
        }}
      >
        <AppBar />

        <Routes>
          <Route
            path="/"
            element={!isLoggedIn ? <Navigate to="/login" /> : <ContactsPage />}
          />
          <Route
            path="/register"
            element={isLoggedIn ? <Navigate to="/" /> : <RegisterView />}
          />
          <Route
            path="/login"
            element={isLoggedIn ? <Navigate to="/" /> : <LogInView />}
          />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    )
  );
}
