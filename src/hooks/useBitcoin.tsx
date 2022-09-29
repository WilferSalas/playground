// @scripts
import { useEffect, useState } from 'react';
import axios from 'axios';

interface Props {
 url: string,
}

const useBitcoin = ({ url }: Props) => {
  const [data, setData] = useState<any>();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      await axios(url)
        .then((result) => {
          setData(result.data.bpi.USD.rate);
        }).catch((err) => {
          setError(err.message);
          setLoading(false);
        }).finally(() => setLoading(false));
    };

    const interval = setInterval(() => fetchData(), 6000);

    return () => clearInterval(interval);
  }, []);

  return { data, error, loading };
};

export default useBitcoin;
