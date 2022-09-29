// @packages
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

const FormValidation = () => {
  const [state, setState] = useState<any>([]);
  const [message, setMessages] = useState<string | null>(null);
  const [inputValue, setInputValue] = useState({
    username: '',
    password: '',
  });

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target: { name, value } } = event;

    setMessages(null);

    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const messages = {
      userExists: 'Username already exists',
      charactersLong: 'Password must be more tha 6 characters',
      userRegistered: 'User successfully created',
    };

    const userNameAlreadyExists = state
      .find((item) => item.username.toLowerCase() === inputValue.username.toLowerCase());

    if (userNameAlreadyExists) {
      setMessages(messages.userExists);
    } else if (inputValue.password.length < 5) {
      setMessages(messages.charactersLong);
    } else {
      setState([...state, { username: inputValue.username, password: inputValue.password }]);
      setInputValue({ username: '', password: '' });
      setMessages(messages.userRegistered);
    }
  };

  return (
    <Container maxWidth="xs" sx={{ mt: 5, textAlign: 'center' }}>
      <Typography variant="h5">
        Login
      </Typography>
      <Box component="form" onSubmit={handleOnSubmit}>
        <TextField
          fullWidth
          name="username"
          onChange={handleOnChange}
          placeholder="Username"
          size="small"
          sx={{ display: 'block', mt: 2 }}
          value={inputValue.username}
        />
        <TextField
          fullWidth
          name="password"
          onChange={handleOnChange}
          placeholder="Password"
          size="small"
          sx={{ display: 'block', mt: 1 }}
          value={inputValue.password}
        />
        {message && (
          <Typography sx={{ mt: 2 }}>
            {message}
          </Typography>
        )}
        <Button
          sx={{ mt: 2 }}
          type="submit"
          variant="contained"
        >
          Submit
        </Button>
      </Box>
    </Container>
  );
};

export default FormValidation;
