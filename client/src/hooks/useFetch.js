import { useState, useEffect } from "react";
import { useApiToken } from "../api/useApiToken.js";

export function useFetch(endpoint) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const token = useApiToken();

  useEffect(() => {
    if (token === null) {
      return;
    }

    setLoading(true);
    fetch(`https://flyeasewebapi.azurewebsites.net/FlyEaseApi${endpoint}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setData(data.response))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, [endpoint, token]);

  return { data, loading, error };
}
