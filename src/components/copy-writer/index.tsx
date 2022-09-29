// @packages
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

const CopyWriter = () => {
  const [text, setText] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>('');
  const [showMessage, setShowMessage] = useState<number>(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowMessage((prevState) => prevState + 1);
    }, 1000);

    if (showMessage >= text.length) clearInterval(interval);

    return () => clearInterval(interval);
  }, [showMessage >= text.length]);

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target: { value } } = event;

    setInputValue(value);
  };

  const handleOnAddUser = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setText([]);
    setShowMessage(1);
    setText(inputValue.split(' '));
    setInputValue('');
  };

  return (
    <Container maxWidth="md" sx={{ textAlign: 'center' }}>
      <Box component="form" sx={{ my: 4 }} onSubmit={handleOnAddUser}>
        <TextField
          size="small"
          onChange={handleOnChange}
          placeholder="Enter text here..."
          value={inputValue}
        />
        <Button variant="contained" sx={{ py: 0.9 }} type="submit">
          Add text
        </Button>
      </Box>
      <Box>
        {text.slice(0, showMessage).map((word) => (
          <Typography
            display="inline"
            key={word}
            sx={{ mr: 1, textTransform: 'capitalize' }}
            variant="h5"
          >
            {word}
          </Typography>
        ))}
      </Box>
    </Container>
  );
};

export default CopyWriter;
