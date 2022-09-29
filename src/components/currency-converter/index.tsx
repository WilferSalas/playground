// @scripts
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import React, { useEffect, useState } from 'react';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import axios from 'axios';

// @data
import currencyNames from '../../config/data/currency-name.json';

const CurrencyConverter = () => {
  const [inputValue, setInputValue] = useState<number>(1);
  const [data, setData] = useState<any>({});
  const [currency, setCurrency] = useState({
    from: 'USD',
    to: 'USD',
  });

  useEffect(() => {
    const fetchData = async () => {
      await axios('https://api.exchangerate.host/latest?base=USD')
        .then((res) => {
          setData(res.data.rates);
        });
    };

    fetchData();
  }, []);

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target: { value } } = event;

    setInputValue(value as unknown as number);
  };

  const handleOnSelect = (event: SelectChangeEvent, code: string) => {
    setCurrency({
      ...currency,
      [code]: event.target.value as string,
    });
  };

  return (
    <Container>
      <Box sx={{ alignItems: 'center', display: 'flex', mt: 3 }}>
        <Typography sx={{ mx: 2 }}>
          Convert
        </Typography>
        <TextField
          onChange={handleOnChange}
          size="small"
          value={inputValue}
        />
        <Typography sx={{ mx: 2 }}>
          from
        </Typography>
        <FormControl fullWidth>
          <Select
            value={currency.from}
            onChange={(event) => handleOnSelect(event, 'from')}
            size="small"
          >
            {Object.entries(currencyNames).map(([name, code]) => (
              <MenuItem key={`${name} from`} value={code}>
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Typography sx={{ mx: 2 }}>
          to
        </Typography>
        <FormControl fullWidth>
          <Select
            value={currency.to}
            onChange={(event) => handleOnSelect(event, 'to')}
            size="small"
          >
            {Object.entries(currencyNames).map(([name, code]) => (
              <MenuItem key={`${name} to`} value={code}>
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      {(currency.from && currency.to) && (
        <Box>
          <Typography align="center" variant="h6" sx={{ my: 4 }}>
            {`${inputValue} ${currency.from} = ${inputValue * (data[currency.to] / data[currency.from])} ${currency.to}`}
          </Typography>
        </Box>
      )}
    </Container>
  );
};

export default CurrencyConverter;
