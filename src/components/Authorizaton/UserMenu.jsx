import { useDispatch, useSelector } from 'react-redux';
import authSelectors from 'redux/auth/authSelectors';
import authOperations from 'redux/auth/authOperations';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);

  return (
    <div>
      <p>Welcome {name}</p>
      <button type="button" onClick={() => dispatch(authOperations.logOut())}>
        Logout
      </button>
    </div>
  );
}
