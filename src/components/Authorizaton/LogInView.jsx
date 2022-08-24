import { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from '../../redux/auth/authOperations';
import styles from '../Phonebook/Phonebook.module.css';
import { TextField, Button } from '@mui/material';

export default function LogInView() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <TextField
          label="E-mail"
          variant="outlined"
          type="email"
          name="email"
          onChange={handleChange}
        />
        <TextField
          label="Password"
          variant="outlined"
          type="password"
          name="password"
          onChange={handleChange}
        />
        <Button variant="contained" type="submit" className={styles.authBtn}>
          Login
        </Button>
      </form>
    </div>
  );
}
