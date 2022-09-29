// @packages
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import React, { useState, FC } from 'react';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

// @scripts
import Modal from './ModalPortal';

const ShortText: FC = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [values, setValues] = useState<string[]>([]);
  const [openModal, setOnOpenModa] = useState<boolean>(false);
  const [modalValue, setModalValue] = useState<string>('');

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target: { value } } = event;

    setInputValue(value);
  };

  const handleOnSubmit = (event: React.FormEvent<HTMLInputElement>) => {
    event.preventDefault();

    setValues([...values, inputValue]);
    setInputValue('');
  };

  const handleOnOpenModal = (value?: string) => {
    setModalValue(value || '');
    setOnOpenModa(!openModal);
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
      <Box component="form" onSubmit={handleOnSubmit}>
        <TextField
          onChange={handleOnChange}
          placeholder="Type here..."
          size="small"
          value={inputValue}
        />
        <Button
          sx={{ height: 39 }}
          type="submit"
          variant="contained"
        >
          Enter
        </Button>
      </Box>
      <List>
        {values.map((value) => (
          <ListItem
            key={value}
            onClick={() => handleOnOpenModal(value)}
            sx={{ cursor: 'pointer' }}
          >
            <ListItemText
              primary={value.length > 5
                ? `${value.substring(0, 5).trim()}...`
                : value}
            />
          </ListItem>
        ))}
      </List>
      {openModal && (
        <Modal onClose={handleOnOpenModal}>
          <Typography>
            {modalValue}
          </Typography>
        </Modal>
      )}
    </Container>
  );
};

export default ShortText;
