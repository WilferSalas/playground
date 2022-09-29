// packages
import { useEffect, useState } from 'react';
import axios from 'axios';

// @interface
import { Data } from './ListItems';

const useFetchTodos = () => {
  const [data, setData] = useState<Data[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      await axios
        .get('https://jsonplaceholder.typicode.com/todos')
        .then((res) => {
          setData(res.data);
        })
        .catch(() => {
          // TODO: error logic
        })
        .finally(() => {
          setIsLoading(false);
        });
    };

    fetchData();
  }, []);

  return { data, isLoading };
};

export default useFetchTodos;
