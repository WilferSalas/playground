// @packages
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import { TextField } from '@mui/material';

const functionOptions = {
  half: (number) => number / 2,
  double: (number) => number * 2,
  increment: (number) => number + 1,
  decrement: (number) => number - 1,
};

const Function = () => {
  const [functions, setFunctions] = useState<any>([]);
  const [inputvalue, setInputvalue] = useState<string>('');
  const [functionValues, setFunctionValues] = useState<any>({
    originalValue: 0,
    functionResult: 0,
  });

  const handleOnAddFunction = (value: string) => {
    setFunctions([...functions, value]);
  };

  const handleOnAddClear = () => {
    setFunctions([]);
  };

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target: { value } } = event;

    setInputvalue(value);
  };

  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setFunctionValues({
      originalValue: inputvalue,
      functionResult: functions
        .reduce((acc, cur) => functionOptions[cur](acc), Number(inputvalue)),
    });

    setInputvalue('');
    setFunctions([]);
  };

  return (
    <Container maxWidth="md" sx={{ textAlign: 'center', mt: 2 }}>
      <Box>
        {Object.keys(functionOptions).map((key) => (
          <Button
            key={key}
            onClick={() => handleOnAddFunction(key)}
            sx={{ ml: 0.2 }}
            variant="contained"
          >
            {key}
          </Button>
        ))}
        <Button onClick={handleOnAddClear} sx={{ ml: 2 }} variant="contained">
          Clear
        </Button>
      </Box>
      <Box sx={{ my: 2 }}>
        <Typography variant="h5" sx={{ mb: 2 }}>
          My Function
        </Typography>
        {functions.map((value) => (
          <Typography key={value}>
            {value}
          </Typography>
        ))}
      </Box>
      <Box component="form" onSubmit={handleOnSubmit}>
        <TextField
          onChange={handleOnChange}
          placeholder="Add a value here..."
          size="small"
          value={inputvalue}
        />
        <Button sx={{ py: 0.9 }} type="submit" variant="contained">
          Submit
        </Button>
      </Box>
      <Box>
        <Typography variant="h6" sx={{ my: 2 }}>
          Last execution
        </Typography>
        <Typography>
          {functionValues.originalValue}
          {' '}
          -
          {'>'}
          {' '}
          My function -
          {'>'}
          {' '}
          {functionValues.functionResult}
        </Typography>
      </Box>
    </Container>
  );
};

export default Function;
