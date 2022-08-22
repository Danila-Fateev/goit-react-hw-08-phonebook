import { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from '../../redux/auth/authOperations';

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
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>
          E-mail
          <input
            type="email"
            name="email"
            onChange={handleChange}
            placeholder="Enter your e-mail"
          />
        </label>
        <label>
          Password
          <input
            type="password"
            name="password"
            onChange={handleChange}
            placeholder="Enter your username"
          />
        </label>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
