import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks/useAuth';
import { AccountCircle } from '@mui/icons-material';
import LogoutIcon from '@mui/icons-material/Logout';

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
      <Button
        size="medium"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleMenu}
        sx={{
          backgroundColor: 'white',
          marginLeft: '5px',
          '&:hover': {
            color: 'white',
            backgroundColor: '#1976d2',
            ':hover': {
              color: 'white',
              backgroundColor: '#1976d2',
              border: '2px solid #ffffff',
            },
            ':focus': {
              color: 'white',
              backgroundColor: '#1976d2',
              border: '2px solid #ffffff',
            },
          },
        }}
        startIcon={<AccountCircle />}
      >
        <Typography
          component="h3"
          sx={{
            fontfamily: 'Roboto',
            textTransform: 'capitalize',
          }}
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
        <Typography component="h3" sx={{ fontfamily: 'Roboto', margin: '5px' }}>
          Nickname: {user.name}
        </Typography>
        <Typography component="h3" sx={{ fontfamily: 'Roboto', margin: '5px' }}>
          Email: {user.email}
        </Typography>

        <MenuItem
          onClick={() => dispatch(logOut())}
          sx={{
            backgroundColor: '#e7e7e7',
            color: '#2196f3',
            border: '1px solid #2196f3',
            borderRadius: '10px',
            margin: '5px',
            justifyContent: 'center',

            '&:hover': {
              color: 'white',
              backgroundColor: '#2196f3',
            },
            ':focus': { color: 'white', backgroundColor: '#2196f3' },
          }}
          // endIcon={<LogoutIcon />}
        >
          <Typography
            component="h3"
            sx={{ fontfamily: 'Roboto', marginRight: '5px' }}
          >
            Log out
          </Typography>
          <LogoutIcon />
        </MenuItem>
      </Menu>
    </Box>
  );
};
