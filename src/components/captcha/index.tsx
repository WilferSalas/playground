// @packages
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import React, { useState } from 'react';
import Typography from '@mui/material/Typography';

// @data
import captchaImages from '../../config/data/captcha-images.json';

const Captcha = () => {
  const [showCaptcha, setShowCaptcha] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const handleOnShowCaptcha = () => {
    setShowCaptcha(true);
  };

  const handleOnSelectImage = (selectedValue: number, correctValue: number) => {
    if (selectedValue === correctValue) {
      setShowCaptcha(false);
      setError('');
    } else {
      setError('Wrong answer, try again');
    }
  };

  const randomNumber = Math.floor(Math.random() * 4) + 1;

  return (
    <Container maxWidth="sm" sx={{ textAlign: 'center' }}>
      {!showCaptcha && (
        <Button
          onClick={handleOnShowCaptcha}
          sx={{ my: 5 }}
          variant="contained"
        >
          I am not a robot
        </Button>
      )}
      {showCaptcha && (
        <>
          <Typography sx={{ my: 5 }}>
            Select
            {' '}
            {randomNumber}
          </Typography>
          <Grid container spacing={0}>
            {captchaImages.map((captcha) => (
              <Grid item key={captcha.id} xs={4}>
                <Box
                  component="img"
                  onClick={() => handleOnSelectImage(captcha.id, randomNumber)}
                  src={captcha.url}
                  sx={{
                    cursor: 'pointer',
                    height: 160,
                    width: 190,
                  }}
                />
              </Grid>
            ))}
          </Grid>
        </>
      )}
      {error && (
        <Typography sx={{ mt: 3 }} variant="h6" color="error">
          {error}
        </Typography>
      )}
    </Container>
  );
};

export default Captcha;
