import { useAuth } from 'hooks/useAuth';
import { Nav, HomePageLink, ContactsLink } from './Navigation.styles';
import { RiContactsBookLine } from 'react-icons/ri';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Nav>
      <HomePageLink to="/">
        <RiContactsBookLine size={30} />
      </HomePageLink>
      {isLoggedIn && <ContactsLink to="/contacts">PhoneBook</ContactsLink>}
    </Nav>
  );
};
