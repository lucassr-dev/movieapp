import axios from "axios";

const fetchData = async (endpoint, setData, setLoading, setError) => {
  try {
    setLoading(true);
    const response = await axios.get(endpoint);
    setData(response.data);
  } catch (error) {
    console.error('Error fetching data:', error);
    setError(error);
  } finally {
    setLoading(false);
  }
};

export default fetchData;