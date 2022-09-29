// @packages
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import React, { useState } from 'react';
import Slider from '@mui/material/Slider';

const CustomBlur = () => {
  const [imageBlur, setimageBlur] = useState<number>(1);

  const handleOnChange = (_: Event, newValue: number | number[]) => {
    setimageBlur(newValue as number);
  };

  const image = `https://picsum.photos/seed/sameimage/1000${imageBlur > 0 ? `?blur=${imageBlur}` : ''}`;

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Box
        alt="image"
        component="img"
        src={image}
        sx={{ width: '100%' }}
      />
      <Slider
        max={10}
        min={0}
        onChange={handleOnChange}
        value={imageBlur}
      />
    </Container>
  );
};

export default CustomBlur;
