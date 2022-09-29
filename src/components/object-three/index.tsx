// @packages
import { Grid } from '@mui/material';
import React from 'react';

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 8, 5, 3, 5, 7, 4, 2];

const ObjectThree = () => {
  const sliceArrayIntoChunks = (array, chunkSize) => {
    let chunks: any = [];

    for (let i = 0; i < array.length; i += chunkSize) {
      const chunk = array.slice(i, i + chunkSize);

      chunks = [...chunks, chunk];
    }

    return chunks;
  };

  return (
    <Grid container>
      {[...new Array(5)].map((item, index) => (
        <Grid item xs={2}>
          {sliceArrayIntoChunks(data, 2).map()}
        </Grid>
      ))}
    </Grid>
  );
};

export default ObjectThree;
