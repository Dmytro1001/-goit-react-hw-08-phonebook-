import { useSelector } from 'react-redux';

import { selectUserContacts } from 'redux/contacts/selectors';

const useContacts = () => useSelector(selectUserContacts);

export { useContacts };
