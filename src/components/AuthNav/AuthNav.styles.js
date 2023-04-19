import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 200px;
`;

export const Link = styled(NavLink)`
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
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
