import authSelectors from 'redux/auth/authSelectors';
import { useSelector } from 'react-redux';

import AuthNav from './Authorizaton/AuthNav';
import UserMenu from './Authorizaton/UserMenu';

export default function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <header>
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
      <hr />
    </header>
  );
}
