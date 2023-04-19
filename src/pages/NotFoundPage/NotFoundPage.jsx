import {
  NotFoundBox,
  NotFoundText404,
  Link,
  NotFoundText,
} from './NotFoundPage.styles';

const NotFoundPage = () => {
  return (
    <NotFoundBox>
      <NotFoundText404>404</NotFoundText404>
      <NotFoundText>Page not found</NotFoundText>
      <NotFoundText>
        Please go back to the<Link to="/">HOME PAGE</Link>
      </NotFoundText>
    </NotFoundBox>
  );
};

export default NotFoundPage;
