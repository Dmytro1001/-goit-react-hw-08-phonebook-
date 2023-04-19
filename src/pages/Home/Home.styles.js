import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 75vh;
`;

export const WelcomeMessage = styled.h1`
  color: rgb(3, 155, 229);
  font-size: 60px;
  font-family: 'Raleway', sans-serif;
  margin-top: 30px;
`;

export const LoginLink = styled(NavLink)`
  text-decoration: none;
  color: rgb(3, 155, 229);
  margin: 0 3px;
  position: relative;
  &:after {
    content: '';
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #1976d2;
    transform-origin: bottom right;
    transition: transform 0.35s ease-out;
  }
  &:hover:after,
  &.active:after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`;

export const TextContainer = styled.div`
  font-size: 24px;
  font-family: 'Roboto', sans-serif;
`;
export const Text = styled.p`
  font-size: 24px;
  font-family: 'Roboto', sans-serif;
`;
