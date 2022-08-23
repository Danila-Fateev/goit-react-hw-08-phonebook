import { useSelector } from 'react-redux';
import { Route } from 'react-router-dom';
import authSelectors from 'redux/auth/authSelectors';

export default function PrivateRoute() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
}
