// import PropTypes from 'prop-types';
import DeleteIcon from '@mui/icons-material/Delete';
import CreateIcon from '@mui/icons-material/Create';
import {
  Grid,
  IconButton,
  ListItem,
  Avatar,
  ListItemAvatar,
  Stack,
} from '@mui/material';
import { useDispatch } from 'react-redux';
import { Name, Number, Container, List } from './Contact.styles';
import { deleteContact } from 'redux/contacts/operationsContacts';
import { useContacts } from 'hooks/useContacts';

export const ContactItem = () => {
  const dispatch = useDispatch();
  const contacts = useContacts();
  function stringToColor(string) {
    let hash = 0;
    let i;
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = '#';

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    return color;
  }

  function stringAvatar(name) {
    let nameFirstLetters = '';
    if (name.includes(' ')) {
      nameFirstLetters = `${name.toUpperCase().split(' ')[0][0]}${
        name.toUpperCase().split(' ')[1][0]
      }`;
    } else {
      nameFirstLetters = `${name.toUpperCase().split(' ')[0][0]}`;
    }
    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children: nameFirstLetters,
    };
  }

  return (
    <Container>
      <List>
        <Grid
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {contacts.map(({ id, name, number }) => (
            <ListItem key={id}>
              <ListItemAvatar>
                <Avatar {...stringAvatar(`${name}`)} />
              </ListItemAvatar>

              <Name>{name}:</Name>
              <Number>{number}</Number>

              <Stack direction="row" spacing={1} sx={{ ml: 5 }}>
                <IconButton
                  edge="start"
                  aria-label="change"
                  id={id}
                  color="primary"
                >
                  <CreateIcon />
                </IconButton>
                <IconButton
                  edge="end"
                  aria-label="delete"
                  id={id}
                  color="error"
                  onClick={() => dispatch(deleteContact(id))}
                >
                  <DeleteIcon />
                </IconButton>
              </Stack>
            </ListItem>
          ))}
        </Grid>
      </List>
    </Container>
  );
};

// ContactItem.propType = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       numder: PropTypes.string.isRequired,
//     })
//   ).isRequired,
//   onDelete: PropTypes.func.isRequired,
// };
