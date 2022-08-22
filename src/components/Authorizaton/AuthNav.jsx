import { NavLink } from 'react-router-dom';

export default function AuthNav() {
  return (
    <div>
      <NavLink to="/register" />
      <NavLink to="/login" />
    </div>
  );
}
