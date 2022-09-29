// @packages
import Container from '@mui/material/Container';
import React from 'react';
import Typography from '@mui/material/Typography';

interface ScoreProps {
  questions: number,
  score: number,
}

const Score = ({ questions, score }: ScoreProps) => {
  const getScore = () => (score / questions) * 100;

  return (
    <Container sx={{ mt: 5 }}>
      <Typography textAlign="center">
        {`You scored: ${getScore()}%`}
      </Typography>
    </Container>
  );
};

export default Score;
