import { useState, useEffect } from "react";

export function useFetch(endpoint) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(`https://flyeasewebapi.azurewebsites.net/FlyEaseApi${endpoint}`)
      .then((response) => response.json())
      .then((data) => setData(data.response))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, [endpoint]);

  return { data, loading, error };
}
