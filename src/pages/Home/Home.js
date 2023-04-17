import { useAuth } from 'hooks/useAuth';
import {
  HomePageContainer,
  WelcomeMessage,
  LoginLink,
  TextContainer,
  Text,
} from './Home.styles';

export default function Home() {
  const { isLoggedIn } = useAuth();

  return (
    <div>
      <HomePageContainer>
        <WelcomeMessage> Welcome to Phonebook! </WelcomeMessage>
        {!isLoggedIn && (
          <TextContainer>
            {' '}
            <p>
              {' '}
              Please,
              <LoginLink to="/register">sign up</LoginLink>
              or
              <LoginLink to="/login">sign in</LoginLink>
              to continue.
            </p>
          </TextContainer>
        )}
        {isLoggedIn && (
          <Text>
            {' '}
            You can manage your phonebook{' '}
            <LoginLink to="/contacts">here.</LoginLink>{' '}
          </Text>
        )}
      </HomePageContainer>
    </div>
  );
}
