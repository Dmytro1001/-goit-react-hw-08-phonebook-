import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks/useAuth';
import { AccountCircle } from '@mui/icons-material';
import { Box, Button, Menu, MenuItem, Typography } from '@mui/material';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <div>
        <Button
          size="medium"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleMenu}
          sx={{
            backgroundColor: 'white',
            marginLeft: '5px',
          }}
          startIcon={<AccountCircle />}
        >
          <Typography
            component="h3"
            sx={{ fontfamily: 'Raleway', textTransform: 'capitalize' }}
          >
            Welcome, {user.name}
          </Typography>
        </Button>
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <Typography
            component="h3"
            sx={{ fontfamily: 'Raleway', margin: '5px' }}
          >
            {user.email}
          </Typography>

          <MenuItem
            onClick={() => dispatch(logOut())}
            sx={{
              backgroundColor: 'lightBlue',
              borderRadius: '10px',
              margin: '5px',
              justifyContent: 'center',

              '&:hover': {
                color: 'white',
                backgroundColor: 'blue',
              },
            }}
          >
            <Typography component="h3" sx={{ fontfamily: 'Raleway' }}>
              Log out
            </Typography>
          </MenuItem>
        </Menu>
      </div>
    </Box>
    // <div className={css.wrapper}>
    //   <p className={css.username}>Welcome, {user.name}</p>
    //   <button type="button" onClick={() => dispatch(logOut())}>
    //     Logout
    //   </button>
    // </div>
  );
};
