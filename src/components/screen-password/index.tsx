/* eslint-disable react/no-array-index-key */
// @pakcaGES
import BackspaceIcon from '@mui/icons-material/Backspace';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import KeyboardTabIcon from '@mui/icons-material/KeyboardTab';
import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';

const defaultValue = 1234;

const ScreenPasword = () => {
  const [values, setValues] = useState<number[]>([]);
  const [error, setError] = useState(false);

  const handleOnClick = (value: number) => {
    setValues([...values, value]);
    setError(false);
  };

  const handleOnRemoveLast = () => {
    setValues(values.filter((item) => item !== values.at(-1)));
  };

  const handleOnSubmit = () => {
    if (Number(values.join('')) !== defaultValue) {
      setError(true);
      setValues([]);
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Grid container sx={{ textAlign: 'center' }}>
        <Grid item xs={12} sx={{ py: 3, minHeight: 80 }}>
          <Typography variant="h5" sx={{ letterSpacing: 5 }}>
            {values}
          </Typography>
        </Grid>
        {[...new Array(9)].map((_, index) => (
          <Grid key={index} item xs={4}>
            <Typography
              sx={{ py: 3, cursor: 'pointer' }}
              onClick={() => handleOnClick(index + 1)}
            >
              {index + 1}
            </Typography>
          </Grid>
        ))}
        <Grid item xs={4} sx={{ py: 2 }}>
          <IconButton onClick={handleOnRemoveLast}>
            <BackspaceIcon />
          </IconButton>
        </Grid>
        <Grid item xs={4}>
          <Typography
            sx={{ py: 3, cursor: 'pointer' }}
            onClick={() => handleOnClick(0)}
          >
            0
          </Typography>
        </Grid>
        <Grid item xs={4} sx={{ py: 2 }}>
          <IconButton onClick={handleOnSubmit}>
            <KeyboardTabIcon />
          </IconButton>
        </Grid>
      </Grid>
      {error && (
        <Typography textAlign="center" sx={{ py: 2, color: red[500] }}>
          Wrong pin
        </Typography>
      )}
    </Container>
  );
};

export default ScreenPasword;
