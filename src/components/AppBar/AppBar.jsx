// import { Outlet } from 'react-router-dom';
import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from 'hooks/useAuth';
import { AppBar, Toolbar, Container } from '@mui/material';
// import css from './AppBar.module.css';

export const HeaderAppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <>
      <AppBar
        position="sticky"
        component="header"
        sx={{
          fontfamily: 'Raleway',
        }}
      >
        <Container maxWidth={'sm'}>
          <Toolbar
            disableGutters
            aria-label="ToolBar"
            sx={{
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Navigation />
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
          </Toolbar>
        </Container>
      </AppBar>
      {/* <Outlet /> */}
    </>

    // <header className={css.header}>
    //   <Navigation />
    //   {isLoggedIn ? <UserMenu /> : <AuthNav />}
    // </header>
  );
};
