// @packages
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import React, { useEffect, useState } from 'react';

const GrowingButton = () => {
  const [isButtonGrowing, setIsButtonGrowing] = useState<boolean>(false);
  const [buttonSize, setButtonSize] = useState<number>(150);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isButtonGrowing) {
        setButtonSize((prevSize) => prevSize + 5);
      } else {
        setButtonSize((prevSize) => prevSize - 5);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [isButtonGrowing]);

  const handleOnClickButton = () => {
    setIsButtonGrowing(!isButtonGrowing);
  };

  return (
    <Container
      maxWidth="md"
      sx={{
        display: 'flex',
        height: '94vh',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Button
        onClick={handleOnClickButton}
        variant="contained"
        sx={{ height: buttonSize - 100, width: buttonSize }}
      >
        {isButtonGrowing ? 'Grow' : 'Shrink'}
      </Button>
    </Container>
  );
};

export default GrowingButton;
