// @packages
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import axios from 'axios';

const SearchableList = () => {
  const [data, setData] = useState<any>([]);
  const [inputValue, setInputValue] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('https://randomuser.me/api?results=10');

      setData(result.data.results);
    };

    fetchData();
  }, []);

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target: { value } } = event;

    setInputValue(value);
  };

  return (
    <Container sx={{ mt: 4 }} maxWidth="sm">
      <Box component="form">
        <TextField
          fullWidth
          onChange={handleOnChange}
          placeholder="Type here..."
          size="small"
          value={inputValue}
        />
      </Box>
      <List>
        {data.filter((user) => Object.values(user.name)
          .join(' ')
          .toLowerCase()
          .includes(inputValue.toLowerCase()))
          .map((result) => (
            <ListItem key={result.email}>
              <ListItemText primary={Object.values(result.name).join(' ')} />
            </ListItem>
          ))}
      </List>
    </Container>
  );
};

export default SearchableList;
