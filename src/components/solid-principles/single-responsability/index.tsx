// packages
import Container from '@mui/material/Container';
import React from 'react';

// @scripts
import ListItems from './ListItems';
import Loading from './Loading';
import useFetchTodos from './useFetchTodos';

const SingleResponsability = () => {
  const { data, isLoading } = useFetchTodos();

  if (isLoading) return <Loading />;

  return (
    <Container sx={{ mt: 1 }}>
      <ListItems data={data} />
    </Container>
  );
};

export default SingleResponsability;
