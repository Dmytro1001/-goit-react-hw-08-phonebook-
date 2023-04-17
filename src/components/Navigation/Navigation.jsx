import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';
import css from './Navigation.module.css';
import { RiContactsBookLine } from 'react-icons/ri';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <NavLink className={css.link} to="/">
        <RiContactsBookLine size={30} />
      </NavLink>
      {isLoggedIn && (
        <NavLink className={css.link} to="/contacts">
          PhoneBook
        </NavLink>
      )}
    </nav>
  );
};
