// @packages
import Container from '@mui/material/Container';
import React, { useState } from 'react';
import Stack from '@mui/material/Stack';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';

const Star = () => {
  const [hoveredStar, setHoveredStar] = useState<number | null>(null);
  const [selectedStar, setSelectedStar] = useState<number | null>(null);

  const handleOnMouseEnter = (star: number) => {
    setHoveredStar(star);
  };

  const handleOnMouseLeave = () => {
    setHoveredStar(null);
  };

  const handleOnClick = (star: number) => {
    setSelectedStar(star);
  };

  return (
    <Container sx={{ mt: 5 }}>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        {[...new Array(5)].map((_, index) => {
          if ((index === 0 && (hoveredStar === 0 || selectedStar === 0))
            || (hoveredStar && hoveredStar >= index)
            || (selectedStar && selectedStar >= index)) {
            return (
              <StarIcon
                key={Math.random()}
                onClick={() => handleOnClick(index)}
                onMouseEnter={() => handleOnMouseEnter(index)}
                onMouseLeave={handleOnMouseLeave}
                sx={{ fontSize: 90, cursor: 'pointer' }}
              />
            );
          }

          return (
            <StarBorderIcon
              key={Math.random()}
              onClick={() => handleOnClick(index)}
              onMouseEnter={() => handleOnMouseEnter(index)}
              onMouseLeave={handleOnMouseLeave}
              sx={{ fontSize: 90, cursor: 'pointer' }}
            />
          );
        })}
      </Stack>
    </Container>
  );
};

export default Star;
