import styles from './Phonebook.module.css';
import {
  useGetContactsQuery,
  useDeleteContactMutation,
} from 'redux/services/contacts';

export default function PhonebookList() {
  const { data, error, isLoading } = useGetContactsQuery();
  const [deleteContactFunction, result] = useDeleteContactMutation();

  // const filterListByName = () => {
  //   return listOfContacts.filter(el =>
  //     el.name.toLowerCase().includes(filter.toLowerCase())
  //   );
  // };

  const deleteContact = e => {
    const itemID = e.target.parentNode.id;
    deleteContactFunction(itemID);
  };

  // const filteredItems = filterListByName();

  return (
    <ul
      style={{
        listStyle: 'none',
        padding: '25px',
        width: '500px',
      }}
    >
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        data.map(({ id, name, phone }) => (
          <li key={id} className={styles.listItem} id={id}>
            {name}: {phone}
            <button
              className={styles.itemBtn}
              type="button"
              onClick={deleteContact}
            >
              Delete
            </button>
            ;
          </li>
        ))
      ) : null}
    </ul>
  );
}
