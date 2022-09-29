/* eslint-disable implicit-arrow-linebreak */
// @packages
import Container from '@mui/material/Container';
import Pagination from '@mui/material/Pagination';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

// @scripts
import Content from './content';
import Loading from './Loading';

const UsersPagination = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      await axios.get(`https://randomuser.me/api/?page=${page}&results=5`).then((response) =>
        response.data.results.map((user) => ({
          age: `${user.dob.age}`,
          email: `${user.email}`,
          name: `${user.name.first} ${user.name.last}`,
        }))).then((users) => {
        setData(users);
      }).finally(() => {
        setIsLoading(false);
      });
    };

    fetchData();
  }, [page]);

  const handleOnChange = (_: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  if (isLoading) return <Loading />;

  return (
    <Container maxWidth="md" sx={{ mt: 2 }}>
      <Content data={data} />
      <Pagination
        count={4}
        onChange={handleOnChange}
        page={page}
        sx={{ display: 'flex', justifyContent: 'center', mt: 1 }}
      />
    </Container>
  );
};

export default UsersPagination;
