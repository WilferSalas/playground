// @packages
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import Score from './Score';

interface questionData {
  question: string,
  answers: string[],
  correct: number,
}

interface QuizProps {
  data: questionData[]
}

const Quiz = ({ data }: QuizProps) => {
  const [question, setQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [wrongAnswer, setWrongAnswer] = useState({ index: 0, value: false });

  const handleOnClick = (answer: number, correctAnswer: number) => {
    if (answer === correctAnswer) {
      setQuestion(question + 1);
      setWrongAnswer({ index: 0, value: false });

      if (!wrongAnswer.value) setScore(score + 1);
    } else {
      setWrongAnswer({ index: answer, value: true });
    }
  };

  if (data.length - 1 === question) {
    return <Score questions={data.length - 1} score={score} />;
  }

  return (
    <Container sx={{ mt: 5 }} maxWidth="md">
      {[data[question]].map((item) => [
        <Box key={item.question}>
          <Typography
            textAlign="center"
            variant="h5"
            sx={{ mb: 4 }}
          >
            {item.question}
          </Typography>
        </Box>,
        <Box key={item.answers.at(0)}>
          <Grid container spacing={3}>
            {item.answers.map((answer, index) => (
              <Grid
                item
                key={answer}
                xs={6}
                sx={{ cursor: 'pointer' }}
                onClick={() => handleOnClick(index, item.correct)}
              >
                <Typography
                  component={Paper}
                  sx={{
                    p: 3,
                    backgroundColor:
                      (wrongAnswer.value && wrongAnswer.index === index)
                        ? red[200]
                        : null,
                  }}
                >
                  {answer}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Box>,
      ])}
    </Container>
  );
};

export default Quiz;
