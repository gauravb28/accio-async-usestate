import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const resp = await fetch(url);
        console.log(resp);
        if (!resp.ok) {
          setError(true);
          setLoading(false);
          return;
        }
        const result = await resp.json();
        setData(result);
      } catch (err) {
        setError(true);
        console.log(err);
      }
      setLoading(false);
    };

    getUsers();
  }, []);

  return { data, loading, error };
};

export default useFetch;
