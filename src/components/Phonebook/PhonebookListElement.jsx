import PropTypes from 'prop-types';
import styles from './Phonebook.module.css';
import { useDeleteContactMutation } from 'redux/services/contacts';
import Button from '@mui/material/Button';

export default function PhonebookListElement({ filteredeItem }) {
  const { id, name, number } = filteredeItem;
  const [deleteContactFunction, result] = useDeleteContactMutation();

  const deleteContact = e => {
    const itemID = e.target.parentNode.id;
    deleteContactFunction(itemID);
  };

  return (
    <li className={styles.listItem} id={id}>
      {name}: {number}
      <Button
        className={styles.itemBtn}
        variant="contained"
        color="error"
        type="button"
        onClick={deleteContact}
        disabled={result.isLoading}
      >
        Delete
      </Button>
    </li>
  );
}

PhonebookListElement.propTypes = {
  filteredeItem: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
};
