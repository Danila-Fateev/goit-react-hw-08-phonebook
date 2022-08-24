import { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from '../../redux/auth/authOperations';
import styles from '../Phonebook/Phonebook.module.css';
import { TextField, Button } from '@mui/material';

export default function RegisterView() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
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
    dispatch(authOperations.register({ name, email, password }));
  };

  return (
    <div>
      <h1>Registration</h1>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Username"
          variant="outlined"
          type="text"
          name="name"
          onChange={handleChange}
        />
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
          Register
        </Button>
      </form>
    </div>
  );
}
