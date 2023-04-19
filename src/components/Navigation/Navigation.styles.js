import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HomePageLink = styled(NavLink)`
  flex-grow: 1;
  text-decoration: none;
  color: rgb(236, 239, 241);
  margin-right: 20px;
  &.active {
    color: #ffee33;
  }
`;

export const ContactsLink = styled(NavLink)`
  flex-grow: 1;
  text-decoration: none;
  color: rgb(236, 239, 241);
  font-size: 22px;
  font-weight: 500;
  &.active {
    font-weight: 700;
    color: #ffee33;
  }
`;
