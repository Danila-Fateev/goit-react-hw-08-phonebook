import styles from './Phonebook.module.css';
import { useDeleteContactMutation } from 'redux/services/contacts';

export default function PhonebookListElement({ filteredeItem }) {
  const { id, name, phone } = filteredeItem;
  const [deleteContactFunction, result] = useDeleteContactMutation();

  const deleteContact = e => {
    const itemID = e.target.parentNode.id;
    deleteContactFunction(itemID);
  };

  return (
    <li className={styles.listItem} id={id}>
      {name}: {phone}
      <button
        className={styles.itemBtn}
        type="button"
        onClick={deleteContact}
        disabled={result.isLoading}
      >
        Delete
      </button>
    </li>
  );
}
