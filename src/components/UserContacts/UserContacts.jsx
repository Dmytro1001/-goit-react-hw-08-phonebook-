import { ContactForm } from '../ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactList';
import { ContactItem } from '../Contact/Contact';
import { Button } from '@mui/material';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { Filter } from '../Filter/Filter';
import { Container } from './UserContacts.styles.js';
import { fetchContacts } from 'redux/contacts/operationsContacts';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoading, selectError } from 'redux/contacts/selectors';
import { useEffect, useState } from 'react';
import { Typography } from '@mui/material';

export default function UserContacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const [modal, setModal] = useState(false);

  const handleOpen = () => setModal(true);
  const handleClose = () => setModal(false);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <Button onClick={handleOpen} startIcon={<PersonAddIcon />}>
        Add Contacts
      </Button>
      {modal && <ContactForm onClose={handleClose} />}

      <ContactList>
        <Typography component="h1" variant="h5">
          Contacts
        </Typography>
        <Filter />
        {isLoading && !error && (
          <p>Please wait while the data is being checked.</p>
        )}
        <ContactItem />
      </ContactList>
    </Container>
  );
}
