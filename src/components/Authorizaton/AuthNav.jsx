import { NavLink } from 'react-router-dom';
import styles from '../Phonebook/Phonebook.module.css';

export default function AuthNav() {
  return (
    <ul className={styles.authLinksList}>
      <li>
        <NavLink to="/register" className={styles.authLinksLink}>
          Register
        </NavLink>
      </li>
      <li>
        <NavLink to="/login" className={styles.authLinksLink}>
          Login
        </NavLink>
      </li>
    </ul>
  );
}
