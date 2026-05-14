import { useState, useEffect } from 'react';
import api from '../services/fishService';

export function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await api.get(url);
        if (!cancelled) setData(res.data);
      } catch (err) {
        if (!cancelled) setError(err.message);
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    fetchData();

    // Cleanup: if component unmounts, don't update state
    return () => { cancelled = true; };
  }, [url]);

  return { data, loading, error };
}
