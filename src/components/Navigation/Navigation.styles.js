import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  /* align-content: center; */
  justify-content: center;
`;

export const HomePageLink = styled(NavLink)`
  -webkit-box-flex: 1;
  flex-grow: 1;
  text-decoration: none;
  color: rgb(236, 239, 241);
  font-weight: 500;
  margin-right: 20px;
`;

export const ContactsLink = styled(NavLink)`
  -webkit-box-flex: 1;
  flex-grow: 1;
  text-decoration: none;
  color: rgb(236, 239, 241);
  font-size: 22px;
  font-weight: 500;
`;
