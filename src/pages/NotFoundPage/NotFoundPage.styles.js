import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NotFoundBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  margin-left: auto;
  margin-right: auto;
`;

export const NotFoundText404 = styled.h2`
  padding: 10px;
  font-weight: 700;
  font-size: 36px;
  color: red;
`;

export const NotFoundText = styled.p`
  padding: 10px;
  font-weight: 500;
  font-size: 24px;
  color: #000;
`;

export const Link = styled(NavLink)`
  padding: 20px;
  font-weight: 500;
  font-size: 24px;
  color: navy;
  text-decoration: underline;
`;
