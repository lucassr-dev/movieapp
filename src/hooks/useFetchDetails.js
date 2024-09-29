import { useEffect, useState } from "react";
import fetchData from "./fetchData";

const useFetchDetails = (endpoint) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData(endpoint, setData, setLoading, setError);
  }, [endpoint]);

  return { data, loading, error };
};

export default useFetchDetails;