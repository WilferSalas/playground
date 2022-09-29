// @packages
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import React from 'react';

const Loading = () => (
  <Box
    sx={{
      alignItems: 'center',
      display: 'flex',
      height: 'calc(100vh - 50px)',
      justifyContent: 'center',
    }}
  >
    <CircularProgress size={50} />
  </Box>
);

export default Loading;
