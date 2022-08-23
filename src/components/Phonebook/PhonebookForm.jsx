import styles from './Phonebook.module.css';
import {
  useAddContactMutation,
  useGetContactsQuery,
} from 'redux/services/contacts';
import { Button, TextField } from '@mui/material';

export default function PhonebookForm() {
  const [addContact] = useAddContactMutation();
  const { data } = useGetContactsQuery();
  const onSubmitForm = e => {
    e.preventDefault();

    const submitContactName = e.currentTarget.elements.name.value;
    const submitContactNumber = e.currentTarget.elements.number.value;

    const contact = {
      name: submitContactName,
      number: submitContactNumber,
    };

    if (
      !data.find(el => el.name.toLowerCase() === contact.name.toLowerCase())
    ) {
      e.target.reset();
      addContact(contact);
      return;
    }
    alert(
      `You already have contact with name '${contact.name}' or number '${contact.number}'`
    );
  };

  return (
    <form className={styles.form} onSubmit={onSubmitForm}>
      <fieldset>
        <legend>Add contact</legend>
        <TextField
          required
          label="Name"
          variant="outlined"
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          className={styles.labelForm}
        />
        <TextField
          required
          label="Phone"
          variant="outlined"
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          className={styles.labelForm}
        />
        <Button variant="contained" type="submit">
          Add contact
        </Button>
      </fieldset>
    </form>
  );
}
