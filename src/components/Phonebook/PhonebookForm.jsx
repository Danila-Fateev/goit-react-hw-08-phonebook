import { nanoid } from 'nanoid';
import { useSelector, useDispatch } from 'react-redux';
import styles from './Phonebook.module.css';
import { addContact } from '../../redux/contactsListReducers/contactsListReducers';

export default function PhonebookForm() {
  const listOfContacts = useSelector(state => state.contacts.contacts.items);
  const dispatch = useDispatch();

  const onSubmitForm = e => {
    e.preventDefault();

    const submitContactName = e.currentTarget.elements.name.value;
    const submitContactNumber = e.currentTarget.elements.number.value;

    const contact = {
      name: submitContactName,
      number: submitContactNumber,
      id: nanoid(),
    };

    if (
      !listOfContacts.find(
        el => el.name.toLowerCase() === contact.name.toLowerCase()
      )
    ) {
      e.target.reset();
      dispatch(addContact(contact));
      return;
    }
    alert(
      `You already have contact with name '${contact.name}' or number '${contact.number}'`
    );
  };

  return (
    <form className={styles.form} onSubmit={onSubmitForm}>
      <label className={styles.labelForm}>
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className={styles.labelForm}>
        Number
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button className={styles.btnForm} type="submit">
        Add contact
      </button>
    </form>
  );
}
