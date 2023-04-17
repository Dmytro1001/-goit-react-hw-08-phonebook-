import { ContactForm } from '../ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactList';
import { ContactItem } from '../Contact/Contact';
import { Filter } from '../Filter/Filter';
import { Wrapper } from './UserContacts.styles.js';
import { fetchContacts } from 'redux/contacts/operationsContacts';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoading, selectError } from 'redux/contacts/selectors';
import { useEffect } from 'react';

export default function UserContacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Wrapper>
      <div>
        <h1>Phonebook</h1>
        <ContactForm />
      </div>
      <ContactList>
        <Filter />
        {isLoading && !error && (
          <p>Please wait while the data is being checked.</p>
        )}
        <ContactItem />
      </ContactList>
    </Wrapper>
  );
}
