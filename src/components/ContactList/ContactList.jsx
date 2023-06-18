import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter, deleteContact } from '../../redux/slice';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );

  return (
    <ul>
      {filteredContacts.map(({ name, number, id }) => {
        return (
          <li key={id}>
            <p>
              {name}: {number}
            </p>
            <button
              class={css.contactListItemBtn}
              type="button"
              onClick={() => dispatch(deleteContact(id))}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};
