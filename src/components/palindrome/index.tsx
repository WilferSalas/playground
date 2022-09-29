// @packages
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import React, { FC, useState } from 'react';
import TextField from '@mui/material/TextField';

const Palindrome: FC = () => {
  const [isPalindrome, setIsPalindrome] = useState<null | boolean>(null);
  const [inputValue, setInputValue] = useState<string>('');

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target: { value } } = event;

    setIsPalindrome(null);
    setInputValue(value);
  };

  const handleOnSubmit = (event: React.FormEvent<HTMLInputElement>) => {
    const reversedInputValue = [...inputValue].reverse().join('');

    event.preventDefault();

    if (inputValue === reversedInputValue) {
      setIsPalindrome(true);
    } else {
      setIsPalindrome(false);
    }
  };

  const helperTextValue = () => {
    if (isPalindrome !== null && isPalindrome) return 'It is palindrome!';
    if (isPalindrome !== null && !isPalindrome) return 'It is not a palindrome :(';

    return null;
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        height: 'calc(100vh - 30px)',
        justifyContent: 'center',
      }}
    >
      <Box component="form" onSubmit={handleOnSubmit} sx={{ display: 'block' }}>
        <TextField
          id="outlined-basic"
          onChange={handleOnChange}
          placeholder="Write here..."
          value={inputValue}
          variant="outlined"
          helperText={helperTextValue()}
        />
        <Button
          sx={{ height: 55 }}
          type="submit"
          variant="contained"
        >
          Submit
        </Button>
      </Box>
    </Container>
  );
};

export default Palindrome;
