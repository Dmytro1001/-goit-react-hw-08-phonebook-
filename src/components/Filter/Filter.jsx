import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { selectContactsFilter } from 'redux/contacts/selectors';
import { setFilter } from 'redux/contacts/filtersSlice';
import { Box, Container, InputAdornment, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectContactsFilter);

  const changeFilter = e => {
    dispatch(setFilter(e.currentTarget.value));
  };
  return (
    <>
      <Container>
        <Box
          sx={{
            marginTop: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <TextField
            margin="normal"
            size="small"
            id="filter"
            label="Find contacts by name"
            name="filter"
            value={filter}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            onChange={changeFilter}
          />
        </Box>
      </Container>
    </>
  );
};

Filter.protoType = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
