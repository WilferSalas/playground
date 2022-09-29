// @packages
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

const Followers = () => {
  const [users, setUsers] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>('');

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target: { value } } = event;

    setInputValue(value);
  };

  const handleOnAddUser = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (inputValue.length > 0) {
      setUsers([...users, inputValue]);
      setInputValue('');
    }
  };

  return (
    <Container maxWidth="md" sx={{ textAlign: 'center' }}>
      <Box component="form" sx={{ my: 4 }} onSubmit={handleOnAddUser}>
        <TextField
          size="small"
          onChange={handleOnChange}
          placeholder="Enter user here..."
          value={inputValue}
        />
        <Button variant="contained" sx={{ py: 0.9 }} type="submit">
          Add user
        </Button>
      </Box>
      <Box>
        <Typography variant="h5">
          User List
        </Typography>
        <List>
          {users.map((user) => (
            <ListItem key={user} sx={{ textAlign: 'center', py: 0.2 }}>
              <ListItemText primary={user} sx={{ textTransform: 'capitalize' }} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Container>
  );
};

export default Followers;
