// @packages
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import React, { useState } from 'react';

// @images
const LeaderImg = 'https://raw.githubusercontent.com/jusshe/coding-challenge-pictures/main/ladder.png';

const Leaders = () => {
  const [imageIndex, setImageIndex] = useState(0);

  const handleOnEnter = (index: number) => {
    setImageIndex(index);
  };

  const handleOnLeave = () => {
    setImageIndex(0);
  };

  const getImageSize = (index: number) => (index >= imageIndex && imageIndex !== 0 ? 180 : 150);

  return (
    <Container
      maxWidth="md"
      sx={{
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        mt: 5,
      }}
    >
      {[...new Array(5)].map((_, index) => (
        <Box
          alt="leader"
          component="img"
          key={`${`leader: ${index + 1}`}`}
          onMouseEnter={() => handleOnEnter(index + 1)}
          onMouseLeave={handleOnLeave}
          src={LeaderImg}
          sx={{ height: getImageSize(index + 1), display: 'flex' }}
        />
      ))}
    </Container>
  );
};

export default Leaders;
