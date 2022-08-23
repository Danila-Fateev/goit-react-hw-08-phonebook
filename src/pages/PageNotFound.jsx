import { NavLink } from 'react-router-dom';

export default function PageNotFound() {
  return (
    <p>
      Page Not Found.<NavLink to="/">Go to the main page</NavLink>
    </p>
  );
}
