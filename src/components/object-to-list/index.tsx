// @packages
import Box from '@mui/material/Box';
import CircleIcon from '@mui/icons-material/Circle';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import React from 'react';
import SquareIcon from '@mui/icons-material/Square';
import Typography from '@mui/material/Typography';

// @data
import objectToListData from '../../config/data/object-to-list.json';

export interface IResult {
  title: string;
  description?: string;
  depth: number;
}

const ObjectToList = () => {
  let result: IResult[] = [];
  let index: number = 0;

  const findObjectDepth = (object): IResult[] => {
    Object.entries(object).forEach(([key, value]) => {
      if (typeof value === 'object') {
        result = [...result, { title: key, depth: index }];
        index += 1;
        findObjectDepth(value);
      } else {
        result = [...result, { title: key, description: value as string, depth: index }];
      }
    });

    return result;
  };

  const getBullet = (depth: number) => {
    const sxProperties = { fontSize: 7, mr: 0.5, mb: 0.2 };
    const bullet = {
      0: <CircleIcon sx={sxProperties} />,
      1: <RadioButtonUncheckedIcon sx={sxProperties} />,
      2: <SquareIcon sx={sxProperties} />,
    };

    return bullet[depth];
  };

  const getIndentation = (depth: number) => {
    const indentation = {
      0: 0,
      1: 2,
      2: 4,
    };

    return indentation[depth];
  };

  return (
    <Container
      component={Paper}
      elevation={2}
      maxWidth="md"
      sx={{
        height: 'calc(100vh - 40px)',
        mt: 1,
        pt: 2,
      }}
    >
      {findObjectDepth(objectToListData).map(({ title, description, depth }) => (
        <Box key={title} sx={{ ml: getIndentation(depth) }}>
          {getBullet(depth)}
          <Typography
            display="inline"
            sx={{
              fontWeight: 600,
              pr: 0.5,
              textTransform: 'capitalize',
            }}
          >
            {title}
            :
          </Typography>
          <Typography display="inline" gutterBottom>
            {description}
          </Typography>
        </Box>
      ))}
    </Container>
  );
};

export default ObjectToList;
