import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from 'hooks/useAuth';
import { AppBar, Toolbar, Container } from '@mui/material';

export const HeaderAppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <>
      <AppBar
        position="sticky"
        component="header"
        sx={{
          fontfamily: 'Roboto',
          minWidth: '420px',
        }}
      >
        <Container maxWidth={'lg'}>
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
    </>
  );
};
