import { useEffect, useState } from "react";
import fetchData from "./fetchData";

const useFetch = (endpoint) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData(endpoint, (data) => setData(data.results), setLoading, setError);
  }, [endpoint]);

  return { data, loading, error };
};

export default useFetch;