import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Text = styled.p`
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.43;
  letter-spacing: 0.01071em;
  text-align: center;
  text-decoration: underline;
  text-decoration-color: currentcolor;
  text-decoration-color: rgba(25, 118, 210, 0.4);
`;

export const Link = styled(NavLink)`
  color: #1976d2;
  margin-left: 5px;
`;
