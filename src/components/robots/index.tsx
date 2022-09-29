// @packages
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';

const Robots = () => {
  const [inputvalue, setInputvalue] = useState<string>('');
  const [robots, setRobots] = useState<string[]>([]);

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target: { value } } = event;

    setInputvalue(value);
  };

  const handleOnSubmit = (event) => {
    event?.preventDefault();

    setRobots([...robots, inputvalue]);
    setInputvalue('');
  };

  const handleOnClickRobot = (selectedRobot) => {
    setRobots(robots.filter((robot) => robot !== selectedRobot));
  };

  return (
    <Container
      maxWidth="md"
      sx={{
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        minHeight: 'calc(100vh - 65px)',
        mt: 5,
      }}
    >
      <Box component="form" onSubmit={handleOnSubmit} sx={{ mb: 4 }}>
        <TextField
          onChange={handleOnChange}
          placeholder="Generate robot"
          size="small"
          value={inputvalue}
        />
        <Button
          sx={{ height: '100%' }}
          type="submit"
          variant="contained"
        >
          Enter
        </Button>
      </Box>
      <Box>
        {robots.map((robot) => (
          <Box
            alt={`${robot}`}
            component="img"
            key={`${robot}`}
            onClick={() => handleOnClickRobot(robot)}
            src={`https://robohash.org/${robot}`}
            sx={{ height: 200, cursor: 'pointer' }}
          />
        ))}
      </Box>
    </Container>
  );
};

export default Robots;
